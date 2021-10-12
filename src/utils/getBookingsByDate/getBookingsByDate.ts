import { TimelineDurationProperty } from "../../Types";

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