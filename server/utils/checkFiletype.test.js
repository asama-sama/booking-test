import checkFiletype from './checkFiletype';
describe('checkFiletype', () => {
    test(`'blah.csv' === csv`, () => {
        const filename = 'blah.csv'
        expect(checkFiletype(filename, 'csv')).toBe(true);
    })
    test(`'test.blah.csv' === csv`, () => {
        const filename = 'test.blah.csv'
        expect(checkFiletype(filename, 'csv')).toBe(true);
    })
    test(`'test.blah.text' !== csv`, () => {
        const filename = 'test.blah.text'
        expect(checkFiletype(filename, 'csv')).toBe(false);
    })
})