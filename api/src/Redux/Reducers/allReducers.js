import { FETCH_DATA,FILTER_DATA,SET_FILTER_DATA } from "../Actions";
const initialState={
    fetchedData:[],
    setFilterData:{}
}
export default function reducer(state=initialState,action){
    console.log(action.payload)
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                fetchedData:action.payload
            }
        case FILTER_DATA:
            return{
                ...state,
                fetchedData: action.payload
            }
        case SET_FILTER_DATA:
            return{
                ...state,
                setFilterData:{...state.setFilterData,...action.payload}
            }
        default:
            return state
    }
}