import { Booking } from "../types/Booking"

const convertMinutesToMs = (minutes: number) => minutes * 60 * 1000;

const addDurationToDate = (date: Date, duration: number) : Date => {
    return new Date(date.getTime() + convertMinutesToMs(duration))
}

// returns true if too bookings have times that overlap with each other
const bookingOverlap = (booking1: Booking, booking2: Booking) : boolean => {
    const booking1_starttime = new Date(booking1.time);
    const booking1_endtime =  addDurationToDate(booking1_starttime, booking1.duration);
    const booking2_starttime = new Date(booking2.time);
    const booking2_endtime = addDurationToDate(booking2_starttime, booking2.duration);

    // booking 2 start or end falls within booking 1
    if (booking2_starttime.getTime() >= booking1_starttime.getTime() && booking2_starttime.getTime() <= booking1_endtime.getTime())   {
        return true
    };
    if (booking2_endtime.getTime() >= booking1_starttime.getTime() && booking2_endtime.getTime() <= booking1_endtime.getTime())       {
        return true
    };
    // booking 1 start or end falls within booking 2
    if (booking1_starttime.getTime() >= booking2_starttime.getTime() && booking1_starttime.getTime() <= booking2_endtime.getTime())   {
        return true
    };
    if (booking1_endtime.getTime() >= booking2_starttime.getTime() && booking1_endtime.getTime() <= booking2_endtime.getTime())       {
        return true
    };
    return false;
}

export default bookingOverlap;
export {addDurationToDate}