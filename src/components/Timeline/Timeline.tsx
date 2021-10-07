import { Booking, TimeStamp } from "../../Types";
import styles from './style.module.css';

const Duration = ({duration, time}: {duration: number, time: TimeStamp}) => {
    const durationWidth = (duration / (24 * 60)) * 100; // percentage width of day
    const startDate = new Date(time);
    const startMinutes = startDate.getHours() * 60 + startDate.getMinutes();
    const startAsPercent = (startMinutes / (24 * 60)) * 100;
    const style: React.CSSProperties = {
        left: `${startAsPercent}%`,
        width: `${durationWidth}%`,
        backgroundColor: 'blue',
        position: 'absolute',
        height: '10px',
        borderRadius:'20px',
        border: '1px solid black'
    } 
    return <div style={style}></div>
}

const getBookingsByDate = (bookings: Booking[])  => {
    const bookingsByDate: {[key: string]: Booking[]} = {};
    bookings.map(booking => {
        let dateIdentifier;
        const date = new Date(booking.time);
        dateIdentifier = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        
        const bookingsOnDate = bookingsByDate[dateIdentifier];
        if (!bookingsOnDate) {
            bookingsByDate[dateIdentifier] = [booking]
        } else {
            bookingsOnDate.push(booking);
        }
    })
    return bookingsByDate;
}

const Timeline = ({bookings}: {bookings: Booking[]}) => {

    const bookingsByDate = getBookingsByDate(bookings);

    console.log('bookingsbydate', bookingsByDate)
    return (
        <div className={styles.Timeline}>
            {
                Object.keys(bookingsByDate).map(bookingDate => (
                    <div className={styles['Timeline-Row']}>
                        <div className={styles['Timeline-Row-Time']}>{bookingDate}</div>
                        <div className={styles['Timeline-Row-Duration']}>
                            {
                                bookingsByDate[bookingDate].map(booking => (
                                    <Duration duration={booking.duration} time={booking.time} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Timeline;