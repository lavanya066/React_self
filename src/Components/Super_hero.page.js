import axios from "axios"
import { useEffect, useState } from "react"


export const Super_heroPage = () => {
    const [isLoading,setisLoading]=useState(true)
    const [data,setData]=useState([])
    const [errors,setErrors]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:4000/superheroe')
        .then(res=>{
            setData(res.data)
            setisLoading(false)
        })
        .catch(error=>{
            setErrors(error.message)
            setisLoading(false)
        })
    },[])
    if(isLoading){
        return<h1>isLoading</h1>
    }
    if(errors){
      
        return <h2>{errors}</h2>
    }
  return (
    <div>
        {
            data.map(hero=>{
                return(
                    <div>{hero.name}</div>
                )
            })
        }
    </div>
  )
}
