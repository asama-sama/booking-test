type TimeStamp = string;
type Seconds = number;
type Booking = {
    time: TimeStamp;
    duration: Seconds;
    userId: string;
}

export type {Booking, TimeStamp, Seconds}