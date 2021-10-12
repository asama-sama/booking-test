import {bookings, bookings_transformed} from "./getBookingsByDate.testdata";
import getBookingsByDate from "./getBookingsByDate";

describe('getBookingsByDate', () => {
    test('check the bookings get grouped correctly', () => {
        expect(getBookingsByDate(bookings)).toEqual(bookings_transformed)
    })
})