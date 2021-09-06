import React,{useEffect} from 'react'
import { requestFetchData } from '../Thunk'
import { useDispatch,useSelector } from 'react-redux'
import "./Style.css"
const Data = () => {
    const imageData=useSelector(state=>state.reducer.fetchedData)
    console.log(imageData)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(requestFetchData(imageData))
    }, [dispatch])
    const imageDataFields=imageData.length > 0 ? Object.keys(imageData[0]) : [];
    
    return (
        <div>
           <center>
           <h3>Data</h3> 
           <h1>
                {!imageData[0] ? (
                    "No ImageData Found"):
                    (
                    <table>
                    <tbody>
                      
                        {imageData.map((log) => (
                       <img className="img-size" src={log} />
                        ))}
                    </tbody>
                    </table>
                )}
                </h1>
           <br/>
           </center> 
        </div>
    )
}

export default Data
