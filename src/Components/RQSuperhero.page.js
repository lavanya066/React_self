import { useQuery } from "react-query"
import axios from "axios"
import { Super_heroPage } from "./Super_hero.page"
import { useState } from "react"
import { useSuperHeroData } from "../Hooks/useSuperHeroData"

export const RQSuperheroPage = () => {
    const[refetchInterval,setRefetchInterval] = useState(3000)
    const onSuccess=(data)=>{
        
        // if(data.data.length!==4){
            
        //     return setRefetchInterval(false)
        // }
        // else{
        //     console.log(refetchInterval)
        //     return refetchInterval
        // }
        console.log("perform sideeffect after data fetching ",data)

    }
    const onError=(data)=>{
        // return setRefetchInterval(false)
        console.log("perform side effect ehen error is encoutered ",data)
    }
    const {isLoading,data ,isError,error,isFetching,refetch}=useSuperHeroData(onSuccess,onError)
    console.log({isLoading,isFetching})
    if(isLoading){
        return <h2>Loading ...</h2>
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
  return (
      <>
      <div>RQSuperhero.page</div>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {
      data?.data.map(hero=>{
          return (
              <div>{hero.name}</div>
          )
      })
      } */}
      {
          data.map(heo=>{
              return (
                  <div key={heo}>{heo}</div>
              )
          })
      }

      </>
    
  )
}
