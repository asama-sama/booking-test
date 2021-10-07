import { Booking } from "../types/Booking"
import bookingOverlap from "./bookingOverlap";
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