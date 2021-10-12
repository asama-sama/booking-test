import { TimeStamp, TimelineDurationProperty } from "../../Types";
import getBookingsByDate from "../../utils/getBookingsByDate/getBookingsByDate";
import styles from './style.module.css';
import {BOOKING_TYPES} from '../../utils/constants';
import getDurationWidth from '../../utils/timelineDurationHelpers/getDurationWidth';
import getStartAsPercent from "../../utils/timelineDurationHelpers/getStartAsPercent";

const Duration = ({duration, time, type, row}: {duration: number, time: TimeStamp, type: BOOKING_TYPES, row: number}) => {
    
    const durationWidth = getDurationWidth(duration)
    const startAsPercent = getStartAsPercent(time)
    let colorClass;
    switch (type) {
        case BOOKING_TYPES.NEW_BOOKING:
            colorClass = 'Booking-New';
            break;
        case BOOKING_TYPES.PREVIOUS_BOOKING:
            colorClass = 'Booking-Previous'
            break;
        case BOOKING_TYPES.OVERLAPPING_BOOKING:
            colorClass = 'Booking-Overlap'
    }
    const style: React.CSSProperties = {
        left: `${startAsPercent}%`,
        width: `${durationWidth}%`,
        top: `${(row-1)*10*2+5}px`,
        position: 'absolute',
        height: '10px',
        borderRadius:'20px',
        border: '1px solid black'
    } 
    return <div style={style} className={colorClass}></div>
}

const Timeline = ({bookings, rows}: {bookings: TimelineDurationProperty[], rows: number}) => {

    const bookingsByDate = getBookingsByDate(bookings);
    const rowStyle = {
        height: `${rows * 10 * 2}px`
    };

    return (
        <div className={styles.Timeline}>
            <div className={`${styles['Timeline-Row--firstrow']} ${styles['Timeline-Row']}`} style={rowStyle}>
                <div className={styles['Timeline-Row-Time']}></div>
                <div className={`${styles['Timeline-Row-Duration']} ${styles['Timeline-Row-Duration--firstrow']}`}>
                    <span>12am</span>
                    <span>6am</span>
                    <span>12pm</span>
                    <span>6pm</span>
                    <span>11:59pm</span>
                </div>
            </div>
            {
                Object.keys(bookingsByDate).map((bookingDate, i) => (
                    <div className={styles['Timeline-Row']} style={rowStyle} key={`row-${i}`}>
                        <div className={styles['Timeline-Row-Time']}>{bookingDate}</div>
                        <div className={styles['Timeline-Row-Duration']}>
                            {
                                bookingsByDate[bookingDate].map((booking, i) => (
                                    <Duration 
                                        duration={booking.duration} 
                                        time={booking.time} 
                                        type={booking.type} 
                                        row={booking.row}
                                        key={`duration-${i}`}
                                    />
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