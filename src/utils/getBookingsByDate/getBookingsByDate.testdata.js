const bookings = [{
    "time": "01 Mar 2020 11:00:00 GMT+1000", 
    "duration": 300,
    "userId": "0001"
},
{
    "time": "02 Mar 2020 14:00:00 GMT+1000", 
    "duration": 300,
    "userId": "0001"
},
{
    "time": "03 Mar 2020 11:00:00 GMT+1000", 
    "duration": 180,
    "userId": "0001"
},
{
    "time": "04 Mar 2020 11:00:00 GMT+1000", 
    "duration": 180,
    "userId": "0001"
},
{
    "time": "03 Mar 2020 14:00:00 GMT+1000", 
    "duration": 300,
    "userId": "0001"
}];

const bookings_transformed = {
    '2020-3-1': [{
        time: "01 Mar 2020 11:00:00 GMT+1000",
        duration: 300,
        userId: "0001"

    }], 
    '2020-3-2': [{
        time: "02 Mar 2020 14:00:00 GMT+1000",
        duration: 300,
        userId: "0001"

    }],
    '2020-3-3': [{
        time: "03 Mar 2020 11:00:00 GMT+1000",
        duration: 180,
        userId: "0001"

    }, {
        "time": "03 Mar 2020 14:00:00 GMT+1000", 
        "duration": 300,
        "userId": "0001"
    }],
    '2020-3-4': [{
        time: "04 Mar 2020 11:00:00 GMT+1000",
        duration: 180,
        userId: "0001"
        
    }]
};

export {bookings, bookings_transformed}