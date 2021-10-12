import {BOOKING_TYPES} from './utils/constants';

type TimeStamp = string;
type Seconds = number;
type Booking = {
    time: TimeStamp;
    duration: Seconds;
    userId: string;
}

interface TimelineDurationProperty extends Booking {
    row: number,
    type: BOOKING_TYPES
}

export type {Booking, TimeStamp, Seconds, TimelineDurationProperty}