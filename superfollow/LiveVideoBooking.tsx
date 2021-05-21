import * as ENUM from "./enums";
import * as INTERFACE from "./interfaces";

// [GET] api/timeslot
{
    /*
    Frontend Logic:

    ADMIN - Create time slots page & USER - Calendar page: 
    The date range is from last month to the next year after

    (E.g. Today is 2021-3-3. Return time slots from 2021-02-01 to 2023-12-31)

    */
    interface request_parameters {
        startLocalDate : String, //YYYY-MM-DD
        endLocalDate : String //YYYY-MM-DD
        showDisabled? : boolean
    }
    
    interface response_body extends INTERFACE.generic_response {
        data: [
            {
                _id: String,
                year: number,
                month: number,
                startTime: String, //09:00:00
                endTime: String, //10:00:00
                durationSeconds: number
            },
        ],
    }
}


// [GET] api/timeslot/available
{
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.timeslot[]
    }
}


// [POST] api/timeslot/add
{
    interface request_body {
        startTimestamp : number,
        endTimestamp : number
    }
    interface response_body extends INTERFACE.generic_response{
        data : INTERFACE.timeslot
    }
}

// [POST] api/timeslot/remove
{
    interface request_body {
        timeSlotID : String
    }
    interface response_body extends INTERFACE.generic_response{
    }
}

// [GET] api/timeslot/booking
{
    interface request_parameters {
        startLocalDate : String, //YYYY-MM-DD
        endLocalDate : String //YYYY-MM-DD
    }
    interface response_body extends INTERFACE.generic_response{
        data : INTERFACE.timeslot_booking[]
    }
}

// [PUT] api/timeslot/booking/{id}
{
    interface request_body {
        skuid : [
            String
        ],
        remarks : String
    }

    interface response_body extends INTERFACE.generic_response{
    }
}

// [PUT] api/timeslot/booking/{id}
{
    interface response_body extends INTERFACE.generic_response{
        data : INTERFACE.timeslot_booking
    }
}

// [POST] api/timeslot/booking/add
{
    interface request_body {
        timeSlotID : String,
        localDate : String, //YYYY-MM-DD
        skuid : [
            String
        ],
        remarks : String
    }
    interface response_body extends INTERFACE.generic_response{
        data : INTERFACE.timeslot_booking
    }
}

// [POST] api/timeslot/booking/toStatus
{
    interface request_body {
        bookingID : String,
        status : ENUM.timeslot_booking_status,
        rejectCode : ENUM.timeslot_booking_reject_codes,
        rejectText : String,
        cancelCode : ENUM.Timeslot_booking_cancel_codes,
        cancelText : String,
        bufferTime : number
    }
    interface response_body extends INTERFACE.generic_response{
        data : INTERFACE.timeslot_booking
    }
}

// ******************************
{
    interface request_body {
        id : String,
        skuid : [
            String
        ],
        remarks : String
    }
    interface response_body extends INTERFACE.generic_response{
    }
}