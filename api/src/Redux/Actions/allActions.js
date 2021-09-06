import { FETCH_DATA } from "./index";
export const fetchData=(data)=>{
    return{
        type:FETCH_DATA,
        payload:data
    }
}