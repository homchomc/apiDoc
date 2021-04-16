import * as ENUM from "./enums";

export interface generic_response {
    status : ENUM.generic_response_status
    message? : String
    timestamp : number
    data? : Object
}

export interface timeslot {
    _id: String,
    year: number,
    month: number,
    startTime: String, //09:00:00
    endTime: String, //10:00:00
    durationSeconds: number
    disabled? : boolean
    userName? : String
}

export interface timeslot_booking {
    _id: String,
    status: ENUM.timeslot_booking_status,
    userName: number,
    timeSlotRefId : String, 
    localDate : String //yyy-mm-dd,
    bufferTime? : number,
    rejectCode? : String,
    rejectText? : String,
    cancelCode? : String,
    cancelText? : String,
    skuid?: Array<String>,
    remarks? : String,
    createTime : number,
    streamInfo? : {
        streamkey : String,
        m3u8 : string
        transcoderServer : String
        canStream : boolean,
        startTime : String, //yyyy-mm-dd HH:mm:ss
        endTime : String
    }
}