import { FETCH_DATA,FILTER_DATA,SET_FILTER_DATA } from "./index";
export const fetchData=(data)=>{
    return{
        type:FETCH_DATA,
        payload:data
    }
}
export const filterData=(data)=>{
    return{
        type:FILTER_DATA,
        payload:data
    }
}
export const setFilterData=(data)=>{
    return{
        type:SET_FILTER_DATA,
        payload:data
    }
}