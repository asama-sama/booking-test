import {Booking} from '../types/Booking'

const booking_1_CSV = `time, duration, userId
01 Mar 2020 11:00:00 GMT+1000, 300, 0001
02 Mar 2020 14:00:00 GMT+1000, 300, 0001
03 Mar 2020 11:00:00 GMT+1000, 180, 0001
04 Mar 2020 11:00:00 GMT+1000, 180, 0001
06 Mar 2020 14:00:00 GMT+1000, 300, 0001
03 Mar 2020 16:00:00 GMT+1000, 300, 0002
06 Mar 2020 03:00:00 GMT+1000, 480, 0002
03 Mar 2020 06:00:00 GMT+1000, 180, 0003`;

const booking_1_json = [{
    time: "01 Mar 2020 11:00:00 GMT+1000", 
    duration: "300",
    userId: "0001"
},
{
    time: "02 Mar 2020 14:00:00 GMT+1000", 
    duration: "300",
    userId: "0001"
},
{
    time: "03 Mar 2020 11:00:00 GMT+1000", 
    duration: "180",
    userId: "0001"
},
{
    time: "04 Mar 2020 11:00:00 GMT+1000", 
    duration: "180",
    userId: "0001"
},
{
    time: "06 Mar 2020 14:00:00 GMT+1000", 
    duration: "300",
    userId: "0001"
},
{
    time: "03 Mar 2020 16:00:00 GMT+1000", 
    duration: "300",
    userId: "0002"
},
{
    time: "06 Mar 2020 03:00:00 GMT+1000", 
    duration: "480",
    userId: "0002"
},
{
    time: "03 Mar 2020 06:00:00 GMT+1000", 
    duration: "180",
    userId: "0003"
}];

const booking_1_booking: Booking[] = [{
    time: "01 Mar 2020 11:00:00 GMT+1000", 
    duration: 300,
    userId: "0001"
},
{
    time: "02 Mar 2020 14:00:00 GMT+1000", 
    duration: 300,
    userId: "0001"
},
{
    time: "03 Mar 2020 11:00:00 GMT+1000", 
    duration: 180,
    userId: "0001"
},
{
    time: "04 Mar 2020 11:00:00 GMT+1000", 
    duration: 180,
    userId: "0001"
},
{
    time: "06 Mar 2020 14:00:00 GMT+1000", 
    duration: 300,
    userId: "0001"
},
{
    time: "03 Mar 2020 16:00:00 GMT+1000", 
    duration: 300,
    userId: "0002"
},
{
    time: "06 Mar 2020 03:00:00 GMT+1000", 
    duration: 480,
    userId: "0002"
},
{
    time: "03 Mar 2020 06:00:00 GMT+1000", 
    duration: 180,
    userId: "0003"
}];

const booking_current: Booking[] = [{
    "time": "01 Mar 2020 11:00:00 GMT+1000",
    "duration": 180,
    "userId": "0001"
  },
  {
    "time": "02 Mar 2020 11:00:00 GMT+1000",
    "duration": 180,
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
    "time": "05 Mar 2020 11:00:00 GMT+1000",
    "duration": 180,
    "userId": "0001"
  }
    
]

module.exports = {booking_1_CSV, booking_1_json, booking_1_booking, booking_current}