import {parseBookingsFromCSV} from './parseBookingsFromCSV';
const {booking_1_CSV, booking_1_json} = require('../../test-artifacts/bookings')

describe('parseBookingsFromCSV', () => {
    test('take a usual object and parse it', () => {
        expect(parseBookingsFromCSV(booking_1_CSV)).toEqual(booking_1_json)
    })
})