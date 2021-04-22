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
        data: INTERFACE.sis_store_components
    }
}

// [PUT] api/sis/components/{Store id}
{
    type request_body = INTERFACE.sis_store_components_component[]
    
    interface response_body extends INTERFACE.generic_response {
        data: INTERFACE.sis_store_components
    }
}

// [POST] api/sis/images
{
    interface request_parameters {
        component? : ENUM.Store_component_types
        store : String
    }
    interface response_body extends INTERFACE.generic_response {
        data : INTERFACE.sis_components_images
    }
}

// [POST] api/sis/images
{
    interface request_formdata {
        imageFiles : File
        component : ENUM.Store_component_types
        store : String
        title : String
    }
    interface response_body extends INTERFACE.generic_response {
        data : INTERFACE.sis_components_images
    }
}

// [DELETE] api/sis/images
{
    interface request_parameters {
        component : ENUM.Store_component_types
        store : String
        id : String
    }
    interface response_body extends INTERFACE.generic_response {
        data : INTERFACE.sis_components_images
    }
}