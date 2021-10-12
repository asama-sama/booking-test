import { TimelineDurationProperty } from "../../Types";

// groups together bookings into an object where the key is the data and corresponding value is the
// list of bookings that fall on that date
const getBookingsByDate = (bookings: TimelineDurationProperty[])  => {
    const bookingsByDate: {[key: string]: TimelineDurationProperty[]} = {};
    bookings.map(booking => {
        let dateIdentifier;
        const date = new Date(booking.time);
        dateIdentifier = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        
        const bookingsOnDate = bookingsByDate[dateIdentifier];
        if (!bookingsOnDate) {
            bookingsByDate[dateIdentifier] = [booking]
        } else {
            bookingsOnDate.push(booking);
        }
    })
    return bookingsByDate;
}

export default getBookingsByDate;