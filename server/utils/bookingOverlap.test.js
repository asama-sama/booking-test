import bookingOverlap, {addDurationToDate} from './bookingOverlap';
import {
    booking_orig,
    booking_overlap_with_orig_start,
    booking_overlap_with_orig_end,
    booking_overlap_with_orig_start_and_end,
    booking_overlap_with_origin_fully,
    booking_nooverlap_with_orig,
    cases_should_overlap,
    cases_should_not_overlap
} from '../test-artifacts/booking';

describe('addDurationToDate', () => {
    const date = new Date("02 Mar 2020 9:00:00 GMT+1000");
    test('add 1 hour', () => {
        expect(addDurationToDate(date, 60)).toEqual(new Date("02 Mar 2020 10:00:00 GMT+1000"))
    });

    test('add 90 minutes', () => {
        expect(addDurationToDate(date, 90)).toEqual(new Date("02 Mar 2020 10:30:00 GMT+1000"))
    })

    test('add 5 hours', () => {
        expect(addDurationToDate(date, 300)).toEqual(new Date("02 Mar 2020 14:00:00 GMT+1000"))
    })
})

describe('bookingCompare', () => {
    test('no overlap', () => {
        expect(bookingOverlap(booking_orig, booking_nooverlap_with_orig))
            .toBe(false);
    });
    test('overlap start', () => {
        expect(bookingOverlap(booking_orig, booking_overlap_with_orig_start))
            .toBe(true);
    })
    test('overlap end', () => {
        expect(bookingOverlap(booking_orig, booking_overlap_with_orig_end))
            .toBe(true);
    });
    test('overlap start and end', () => {
        expect(bookingOverlap(booking_orig, booking_overlap_with_orig_start_and_end))
            .toBe(true)
    })
    test('overlap fully', () => {
        expect(bookingOverlap(booking_orig, booking_overlap_with_origin_fully))
            .toBe(true)
    });

    test('overlap cases', () => {
        for (let {b1, b2} of cases_should_overlap) {
            expect(bookingOverlap(b1, b2)).toBe(true)
        }
    })

    test('not overlapping cases', () => {
        for (let {b1, b2} of cases_should_not_overlap) {
            expect(bookingOverlap(b1, b2)).toBe(false)
        }
    })
})