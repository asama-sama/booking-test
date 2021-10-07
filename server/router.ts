const express = require('express');
const router = express.Router();
import {getBookings, postBookings} from './middleware/bookingHandler';

router.get('/bookings', getBookings)

router.post('/bookings', postBookings)

export default router;