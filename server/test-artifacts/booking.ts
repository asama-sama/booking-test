const booking_orig = {
    "time": "02 Mar 2020 11:00:00 GMT+1000",
    "duration": 180,
    "user_id": "0001"
}

const booking_nooverlap_with_orig = {
    "time": "02 Mar 2020 15:00:00 GMT+1000",
    "duration": 180,
    "user_id": "0001"
}

const booking_overlap_with_orig_start = {
    "time": "02 Mar 2020 13:00:00 GMT+1000",
    "duration": 180,
    "user_id": "0001"
}

const booking_overlap_with_orig_end = {
    "time": "02 Mar 2020 9:00:00 GMT+1000",
    "duration": 180,
    "user_id": "0001"
}

const booking_overlap_with_orig_start_and_end = {
    "time": "02 Mar 2020 12:00:00 GMT+1000",
    "duration": 60,
    "user_id": "0001"
}

const booking_overlap_with_origin_fully = {
    "time": "02 Mar 2020 10:00:00 GMT+1000",
    "duration": 300,
    "user_id": "0001"
}

const cases_should_overlap = [
{
    b1: {
        "time": "02 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "userId": "0001"
    },
    b2:  {
        "time": "02 Mar 2020 13:00:00 GMT+1000",
        "duration": 180,
        "user_id": "0001"
    }
}, {
    b1: {
        "time": "02 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "userId": "0001"
    },
    b2:  {
        "time": "02 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "user_id": "0001"
    }
}, {
    b1: {
        "time": "02 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "userId": "0001"
    },
    b2:  {
        "time": "02 Mar 2020 13:59:59 GMT+1000",
        "duration": 180,
        "user_id": "0001"
    }
}]

const cases_should_not_overlap = [
{
    b1: {
        "time": "03 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "userId": "0001"
    },
    b2: {
        "time": "03 Mar 2020 15:00:00 GMT+1000",
        "duration": 180,
        "user_id": "0001"
    }
}, {
    b1: {
        "time": "03 Mar 2020 11:00:00 GMT+1000",
        "duration": 180,
        "userId": "0001"
    },
    b2: {
        "time": "03 Mar 2020 14:00:00 GMT+1000",
        "duration": 180,
        "user_id": "0001"
    }
}]


export {
    booking_orig,
    booking_nooverlap_with_orig,
    booking_overlap_with_orig_start,
    booking_overlap_with_orig_end,
    booking_overlap_with_orig_start_and_end,
    booking_overlap_with_origin_fully,
    cases_should_overlap,
    cases_should_not_overlap
}