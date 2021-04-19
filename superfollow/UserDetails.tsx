import * as ENUM from "./enums";
import * as INTERFACE from "./interfaces";

// [GET] api/userDetails
{
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.user_details,
    }
}

// [GET] api/userDetails/stores
{
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.user_stores_response[],
    }
}