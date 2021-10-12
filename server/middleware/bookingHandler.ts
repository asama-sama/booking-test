import {Booking, fromJson} from "../types/Booking";
import { PostBookingsRes } from "../types/resTypes/PostBookingsRes";
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

// takes bookings CSV and adds them to bookings in memory
// returns what was inserted, what was there previously and what could not be inserted
const postBookings = (req: any, res: any) => {
    const fileNames = Object.keys(req.files);
    let insertedBookings: Booking[] = [];
    let overlappingBookings: Booking[] = [];
    const previousBookings = [...bookings];
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

    const returnBookings: PostBookingsRes = {
        insertedBookings,
        overlappingBookings,
        previousBookings,
        bookings
    }
    
    res.status(200).send(returnBookings);
}

export {getBookings, postBookings};