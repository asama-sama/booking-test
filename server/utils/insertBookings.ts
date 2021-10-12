import { Booking } from "../types/Booking"
import bookingOverlap from "./bookingOverlap";
// Takes a list of bookings and returns which ones can be inserted and which ones
// can't be onto another bookings list, based on whether they overlap
const insertBookings = (newBookings: Booking[], currentBookings: Booking[]) : {
    bookingsToInsert: Booking[],
    bookingsOverlapping: Booking[]
} => {

    const bookingsToInsert: Booking[] = []
    const bookingsOverlapping: Booking[] = []

    newBookings.forEach(newBooking => {
        for (let currentBooking of currentBookings) {
            if (bookingOverlap(newBooking, currentBooking)) {
                bookingsOverlapping.push(newBooking);
                return;
            }
        }
        bookingsToInsert.push(newBooking);
    })

    return {
        bookingsToInsert,
        bookingsOverlapping
    }
}

export default insertBookings;