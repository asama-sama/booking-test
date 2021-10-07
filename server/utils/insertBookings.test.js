import insertBookings from './insertBookings';
import {booking_current as currentBookings, booking_1_booking} from '../test-artifacts/bookings'
const fs = require("fs");

describe('insertBookings', () => {

    test('all bookings could be inserted, no overlap', () => {
        const newBookings = [{
            "time": "01 Mar 2020 3:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "02 Mar 2020 3:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "03 Mar 2020 3:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
        }];
        const {bookingsToInsert, bookingsOverlapping} = insertBookings(newBookings, currentBookings)
        expect(bookingsToInsert.length).toBe(3);
        expect(bookingsOverlapping.length).toBe(0);
    })

    test('1 booking insert, 2 overlap', () => {
        const newBookings = [{
            "time": "01 Mar 2020 12:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "02 Mar 2020 13:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "03 Mar 2020 15:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
        }];
        const {bookingsToInsert, bookingsOverlapping} = insertBookings(newBookings, currentBookings)
        
        expect(bookingsToInsert.length).toBe(1);
        expect(bookingsOverlapping.length).toBe(2);
    })

    test('3 bookings overlap', () => {
        const newBookings = [{
            "time": "01 Mar 2020 11:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "02 Mar 2020 12:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
          },
          {
            "time": "03 Mar 2020 13:00:00 GMT+1000",
            "duration": 180,
            "user_id": "0001"
        }];
        const {bookingsToInsert, bookingsOverlapping} = insertBookings(newBookings, currentBookings)
        expect(bookingsToInsert.length).toBe(0);
        expect(bookingsOverlapping.length).toBe(3);
    });

    test('test given csv file against initial state', () => {
      const {bookingsToInsert, bookingsOverlapping} = insertBookings(booking_1_booking, currentBookings)
      expect(bookingsToInsert.length).toBe(4);
      expect(bookingsOverlapping.length).toBe(4);
    })
})