import { FETCH_DATA } from "../Actions";
const initialState={
    fetchedData:[]
}
export default function reducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                fetchedData:action.payload
            }
        default:
            return state
    }
}