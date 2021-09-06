import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { requestFilteredData } from '../Thunk'
import { setFilterData } from '../Redux/Actions/allActions'
const Filter = () => {
    const prevFilterData= useSelector(state => state.reducer.setFilterData)
    const filterData= useSelector(state => state.reducer.filterData)
    console.log(filterData)
    const {limit,type}=prevFilterData
    const [filter,setFilter]=useState({limit:limit,type:type})
    
    const history=useHistory()
    const dispatch = useDispatch()
    const handleInputData=(e)=>{
        let {name,value}=e.target;
        setFilter({...filter,[name]:value})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setFilterData(filter))
        dispatch(requestFilteredData(filter))
        history.push("/")
        }
         
    
    return (
        <div>
            <center>
             <form method="POST" onSubmit={handleSubmit}>
                <label>No of Records</label><br/>
                <input type="number" name="limit" value={filter.limit} onChange={handleInputData}/><br/>
                <label>Record Type</label><br/>
                <input type="text" name="type" value={filter.type} onChange={handleInputData}/><br/><br/>
                <input type="submit" value="Apply Filter" />
            </form>
            </center>

               <hr/>
            
        </div>
    )
}

export default Filter
