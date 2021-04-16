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

// [PUT] api/sis/components/{Store id}
{
    type request_body = INTERFACE.sis_store_components_component[]
    
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.sis_store_components
    }
}