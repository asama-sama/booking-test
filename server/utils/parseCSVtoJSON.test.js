import parseCSVtoJSOn from "./parseCSVtoJSON";
const {booking_1_CSV, booking_2_CSV, booking_1_json} = require('../test-artifacts/bookings')

describe('parseCSVToJSON', () => {
    test('matches correctly to json structure', () => {
        expect(parseCSVtoJSOn(booking_1_CSV)).toEqual(booking_1_json)
    });
    test('matches correctly to json structure', () => {
        expect(parseCSVtoJSOn(booking_2_CSV)).toEqual(booking_1_json)
    })
})