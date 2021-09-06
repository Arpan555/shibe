import axios from "axios"
import { fetchData } from "./Redux/Actions/allActions"

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