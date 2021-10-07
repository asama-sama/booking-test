import parseCSVtoJSOn from "./parseCSVtoJSON";
const {booking_1_CSV, booking_1_json} = require('../test-artifacts/bookings')

describe('parseCSVToJSON', () => {
    test('', () => {
        expect(parseCSVtoJSOn(booking_1_CSV)).toEqual(booking_1_json)
    })
})