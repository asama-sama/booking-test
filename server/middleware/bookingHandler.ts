import {Booking, fromJson} from "../types/Booking";
import checkFiletype from '../utils/checkFiletype';
import insertBookings from "../utils/insertBookings";
import parseCSVtoJSOn from "../utils/parseCSVtoJSON";
const fs = require('fs');

let bookings: Booking[] = JSON.parse(fs.readFileSync('./bookings.json')).map(
    (bookingRecord: any ) => ({
      time: bookingRecord.time,
      duration: bookingRecord.duration, // mins into ms
      userId: bookingRecord.user_id,
    }),
  );

const getBookings = (req:any, res: any) => {
    res.json(bookings);
};

const postBookings = (req: any, res: any) => {
    const fileNames = Object.keys(req.files);
    let insertedBookings: Booking[] = [];
    let overlappingBookings: Booking[] = [];
    for (let filename of fileNames) {
        const file = req.files[filename];
        
        try {
            const csvData = file.data.toString('utf8');
        
            if (!checkFiletype(file.name, 'csv')) {
                throw new Error('incorrect file format');
            }
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
}

export {getBookings, postBookings};