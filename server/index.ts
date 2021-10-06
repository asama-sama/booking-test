import {Booking} from "./types/Booking";

const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors()) // so that app can access

const bookings = JSON.parse(fs.readFileSync('./server/bookings.json')).map(
  (bookingRecord: Booking ) => ({
    time: Date.parse(bookingRecord.time),
    duration: bookingRecord.duration * 60 * 1000, // mins into ms
    userId: bookingRecord.user_id,
  }),
)



app.get('/bookings', (_: Request, res: Response) => {
  console.log('test');

  res.json().then(bookings => bookings)
})

app.listen(3001, () => console.log("app is listening..."))
