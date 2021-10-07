import {Booking, fromJson} from "./types/Booking";
import checkFiletype from './utils/checkFiletype';
import parseCSVtoJSOn from "./utils/parseCSVtoJSON";

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const fileUpload = require('express-fileupload')

const app = express()
app.use(cors()) // so that app can access
app.use(fileUpload());

const bookings: Booking[] = JSON.parse(fs.readFileSync('./bookings.json')).map(
  (bookingRecord: any ) => ({
    time: Date.parse(bookingRecord.time),
    duration: bookingRecord.duration * 60 * 1000, // mins into ms
    userId: bookingRecord.user_id,
  }),
)



app.get('/bookings', (_: any, res: any) => {
  console.log('get bookings')
  // res.json().then(bookings => bookings)
  res.json(bookings)
})

app.post('/bookings', (req: any, res: any) => {
  // console.log('post file', req.files)
  const fileNames = Object.keys(req.files);
  console.log(`uplaoded ${fileNames.length} files`)
  for (let filename of fileNames) {
    const file = req.files[filename];

    const csvData = file.data.toString('utf8');

    if (!checkFiletype(file.name, 'csv')) {
      // TODO: handle error
      continue;
    }
    const bookings = fromJson(parseCSVtoJSOn(csvData));

    console.log('bookings', bookings)
    // checks for overlapping bookings
  }
  
  res.sendStatus(200);
})

app.listen(3001, () => console.log("app is listening..."))
