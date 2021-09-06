import axios from "axios"
import { fetchData,filterData } from "./Redux/Actions/allActions"

const request=axios.create({
    baseURL:"http://shibe.online/api",
})
export const requestFetchData=(state)=>{
    return async(dispatch)=>{
        try{
                console.log(state)
                const fetchedData=await request.get("/shibes?count=10",state)
                console.log(fetchedData.data)
                dispatch(fetchData(fetchedData.data))
        }catch(err){
            console.log(err)
        }


    }
}
export const requestFilteredData=(state)=>{
    return async(dispatch)=>{
        try {
            const {limit,type}=state
            console.log(limit,type)
            const filteredData=await request.get(`/${type}?count=${limit}`)
            console.log(filteredData.data)
            dispatch(filterData(filteredData.data))



        } catch (error) {
            console.log(error)
        }
    }
}
export const requestSetFilterData=(state)=>{
    return async(dispatch)=>{
        try {
            console.log(state)
        } catch (error) {
            
        }
    }
}