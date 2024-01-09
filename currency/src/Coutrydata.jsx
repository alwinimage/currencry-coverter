import { useEffect, useState } from "react"
import axios from 'axios';

function Coutrydata() {

    const [data,setData]=useState([]);

    const [error,seterror]=useState(null);

    const [loaded,setloaded]=useState(false);

    useEffect (  () => {
       const fetchdata= async()=>{
        try{
            setloaded(true);
            const reposnse=  await axios ();  
            setloaded (reposnse.data);
        }
        catch (error){
            seterror(error)
        }
        finally{
            setloaded(false)
        }
        fetchdata();
       }
    },[])
  return (
    <div>

    </div>
  )
}

export default Coutrydata