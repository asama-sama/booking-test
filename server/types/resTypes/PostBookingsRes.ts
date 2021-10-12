import { Booking } from "../Booking";

interface PostBookingsRes {
    insertedBookings: Booking[],
    overlappingBookings: Booking[],
    previousBookings: Booking[],
    bookings: Booking[]
}

export type {PostBookingsRes};