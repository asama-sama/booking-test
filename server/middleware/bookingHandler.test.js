import { postBookings } from "./bookingHandler";
import { bookingReq, bookingRes } from "./bookingHandler.testdata";

describe("postBookings", () => {
    test("it should return correct values for inserted, overlapped, previous", () => {
        const mockRes = {
            status: jest.fn(_ => mockRes),
            send: jest.fn()
        };
        postBookings(bookingReq, mockRes);
        expect(mockRes.send.mock.calls[0][0]).toEqual(bookingRes)
    })
})