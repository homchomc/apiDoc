import * as ENUM from "./enums";
import * as INTERFACE from "./interfaces";



// [GET] api/category
{
    interface request_parameters {
        showEnabled? : boolean
        showDisabled? : boolean
    }
    interface response_body extends INTERFACE.generic_response {
        data : INTERFACE.category[]
    }
}

// [POST] api/category
{
    interface request_body {
        zh : INTERFACE.categoryDetails
        en : INTERFACE.categoryDetails
    }
    interface response_body extends INTERFACE.generic_response {
        data : INTERFACE.category
    }
}


// [DELETE] api/category
{
    interface request_parameters {
        categoryId : string
    }
    interface response_body extends INTERFACE.generic_response {
    }
}


// [POST] api/category/status
{
    interface request_body {
        categoryId : string
        status : ENUM.category_status
    }
    interface response_body extends INTERFACE.generic_response {
    }
}