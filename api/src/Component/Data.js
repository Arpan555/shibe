import React,{useEffect} from 'react'
import { requestFetchData} from '../Thunk'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import "./Style.css"
const Data = () => {
    const imageData=useSelector(state=>state.reducer.fetchedData)
    const history=useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestFetchData(imageData))
    }, [dispatch,requestFetchData])
    
    const imageDataFields=imageData.length > 0 ? Object.keys(imageData[0]) : [];
    
    return (
        <div>
           <center>
        <input type="button" value="apply filter" onClick={()=>history.push("/filter")}/>
        
        <h3>Data</h3>
           <h1>
           {Object.keys(imageData).length === 0 ? (<div>...Loading</div>) :
            (
    
                       <div> {imageData.map((img) => (
                       <img className="img-size" src={img} title={img} />
                        ))}
                    </div>
        
            )}
                </h1>
           <br/>
           </center> 
        </div>
    )
}

export default Data
