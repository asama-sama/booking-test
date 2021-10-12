import getDurationWidth from './getDurationWidth';

describe('getDurationWidth', () => {
    test('test 180 minutes', () => {
        expect(getDurationWidth(180)).toBe(12.5)
    })

    test('test 720 minutes', () => {
        expect(getDurationWidth(720)).toBe(50)
    })
})