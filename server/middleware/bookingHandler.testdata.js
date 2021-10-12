const bookingReq = {
    files: 
        {
            'file-1': {
                name: 'test.csv',
                data: `time, duration, userId
                01 Mar 2020 11:00:00 GMT+1000, 300, 0001
                02 Mar 2020 14:00:00 GMT+1000, 300, 0001
                03 Mar 2020 11:00:00 GMT+1000, 180, 0001
                04 Mar 2020 11:00:00 GMT+1000, 180, 0001
                06 Mar 2020 14:00:00 GMT+1000, 300, 0001
                03 Mar 2020 16:00:00 GMT+1000, 300, 0002
                06 Mar 2020 03:00:00 GMT+1000, 480, 0002
                03 Mar 2020 06:00:00 GMT+1000, 180, 0003`
            }
        }
    
}

const bookingRes = {
    bookings: [{
            "duration": 180,
            "time": "01 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "02 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "03 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "04 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "05 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 300,
            "time": "02 Mar 2020 14:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 300,
            "time": "06 Mar 2020 14:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 300,
            "time": "03 Mar 2020 16:00:00 GMT+1000",
            "userId": "0002",
        },
        {
            "duration": 480,
            "time": "06 Mar 2020 03:00:00 GMT+1000",
            "userId": "0002",
        },
        {
            "duration": 180,
            "time": "03 Mar 2020 06:00:00 GMT+1000",
            "userId": "0003",
        }
    ],
    "insertedBookings": [
        {
            "duration": 300,
            "time": "02 Mar 2020 14:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 300,
            "time": "06 Mar 2020 14:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 300,
            "time": "03 Mar 2020 16:00:00 GMT+1000",
            "userId": "0002",
        },
        {
            "duration": 480,
            "time": "06 Mar 2020 03:00:00 GMT+1000",
            "userId": "0002",
        },
        {
            "duration": 180,
            "time": "03 Mar 2020 06:00:00 GMT+1000",
            "userId": "0003",
        },
    ],
    "overlappingBookings": [
        {
            "duration": 300,
            "time": "01 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "03 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001",
        },
        {
            "duration": 180,
            "time": "04 Mar 2020 11:00:00 GMT+1000",
            "userId": "0001"
        }
    ],
    "previousBookings": [{
        "duration": 180,
        "time": "01 Mar 2020 11:00:00 GMT+1000",
        "userId": "0001",
    },
    {
        "duration": 180,
        "time": "02 Mar 2020 11:00:00 GMT+1000",
        "userId": "0001",
    },
    {
        "duration": 180,
        "time": "03 Mar 2020 11:00:00 GMT+1000",
        "userId": "0001",
    },
    {
        "duration": 180,
        "time": "04 Mar 2020 11:00:00 GMT+1000",
        "userId": "0001",
    },
    {
        "duration": 180,
        "time": "05 Mar 2020 11:00:00 GMT+1000",
        "userId": "0001",
    }]
}

export {bookingReq, bookingRes}