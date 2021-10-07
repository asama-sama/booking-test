interface Booking {
    time: string,
    duration: number,
    userId: string
}

const fromJson = (json: Object[]) : Booking[] => {
    return json.map((item: any) => {
        const booking: Booking = {
            time: item.time,
            duration: parseInt(item.duration),
            userId: item.userId
        }
        if (!booking.time || !booking.duration || !booking.userId) {
            throw new Error(`Booking information invalid: ${item.toString()}`)
        }
        return booking;
    })
}

export type {Booking};
export {fromJson}