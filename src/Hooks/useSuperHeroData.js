import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export const useSuperHeroData = (onSuccess,onError) => {
    return useQuery(
        'super-heroes',()=>{
        return axios.get('http://localhost:4000/superheroes')},
        {
            // cacheTime:5000,//amt of time in the memory
            // staleTime:30000,
            // //  no additional request even if the query changes
            // refetchOnMount:'always',
            // //irrespective of the data being stale or not the data will always refetch
            // refetchOnWindowFocus:true,
            // //anytime the tab loses focus and gains focus the background refetch takes place
            
            // //the query will automatically refetch every 2 sec
            // //this can be used when the data keeps changeing all the time 
            //refetchIntervalInBackground:true,
            // //continue to poll the data even when the data is not in focus
            enabled:false,
            //disable fetching on mount 
            onSuccess,
            onError,
            select:(data)=>{
                const superhero=data.data.map((hero)=>{
                   return hero.name
                }
                )
                return superhero
            }

            
        })
}
