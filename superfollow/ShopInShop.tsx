import * as ENUM from "./enums";
import * as INTERFACE from "./interfaces";

// [GET] api/sis/components
{
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.sis_components[]
    }
}

// [GET] api/sis/components/{Store id}
{
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.sis_store_components[]
    }
}