import {fromJson} from './Booking';
import {booking_1_json, booking_1_booking} from '../test-artifacts/bookings';

describe('Booking', () => {
    test('fromJson', () => {
        expect(fromJson(booking_1_json)).toEqual(booking_1_booking)
    })

    // add test for throw error
})