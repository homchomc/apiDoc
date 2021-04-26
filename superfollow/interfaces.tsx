import * as ENUM from "./enums";

export interface generic_response {
    status : ENUM.generic_response_status
    success : boolean
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




export interface user_details {
    id : String
    userName : String
    userId : String
    roles : String[]
    type? : String;
    providerType? : String
    profilePicture  : String
    banner : String
    zh : user_details_content
    en : user_details_content
}
export interface user_details_content {
    name : String
    intro : String
}
export interface store_details {
    code : String,
    zh : {
        name : String
    },
    en : {
        name : String
    }
}
export interface user_stores {
    userName: String
    email? : String
    stores? : String[]
    storesDetails? : store_details[]
}



//  -----------------------------------------    Shop In Shop    --------------------------------------------

export interface sis_components {
    type : ENUM.Store_component_types
    enable : boolean
    name? : String
}

export interface sis_store_components {
    store : string
    components : sis_store_components_component[]
}

export interface sis_store_components_component {
    type : ENUM.Store_component_types
    name : String
    data? : sis_banner_data[]
}

export interface sis_components_images {
    store : String
    components : Map<ENUM.Store_component_types,sis_components_images_details>
    
}
interface sis_components_images_details {
    imageId : string
    url : string
}

interface sis_banner_data {
    imageUrl : string
    url : string
    bannerNameZh : string
    bannerNameEn : string
}
