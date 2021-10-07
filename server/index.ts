import {Booking, fromJson} from "./types/Booking";
import checkFiletype from './utils/checkFiletype';
import parseCSVtoJSOn from "./utils/parseCSVtoJSON";
import insertBookings from "./utils/insertBookings";

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors()) // so that app can access
app.use(fileUpload());

let bookings: Booking[] = JSON.parse(fs.readFileSync('./bookings.json')).map(
  (bookingRecord: any ) => ({
    time: bookingRecord.time,
    duration: bookingRecord.duration, // mins into ms
    userId: bookingRecord.user_id,
  }),
)

app.get('/bookings', (_: any, res: any) => {
  console.log('get bookings')
  // res.json().then(bookings => bookings)
  res.json(bookings)
})

app.post('/bookings', (req: any, res: any) => {
  const fileNames = Object.keys(req.files);
  let insertedBookings: Booking[] = [];
  let overlappingBookings: Booking[] = [];
  for (let filename of fileNames) {
    const file = req.files[filename];

    const csvData = file.data.toString('utf8');

    if (!checkFiletype(file.name, 'csv')) {
      // TODO: handle error
      continue;
    }
    try {
     
      const newBookings = fromJson(parseCSVtoJSOn(csvData));

      // checks for overlapping bookings
      const {bookingsOverlapping, bookingsToInsert} = insertBookings(newBookings, bookings);
      bookings = bookings.concat(bookingsToInsert);
      insertedBookings = insertedBookings.concat( bookingsToInsert);
      overlappingBookings = overlappingBookings.concat(bookingsOverlapping);
      
    } catch(e) { 
      return res.status(500).send(e)
    }
  }
  
  res.status(200).send({
    insertedBookings,
    overlappingBookings,
    bookings
  });
})

app.listen(3001, () => console.log("app is listening..."))
