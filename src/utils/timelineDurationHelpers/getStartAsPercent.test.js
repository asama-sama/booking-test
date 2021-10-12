import getStartAsPercent from './getStartAsPercent';

describe('getStartAsPercent', () => {
    test('12am', () => {
        expect(getStartAsPercent('01 Mar 2020 00:00:00 GMT+1000')).toBe(0);
    })

    test('12pm', () => {
        expect(getStartAsPercent('01 Mar 2020 12:00:00 GMT+1000')).toBe(50);
    })

    test('6am', () => {
        expect(getStartAsPercent('01 Mar 2020 6:00:00 GMT+1000')).toBe(25);
    })
})