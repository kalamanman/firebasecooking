import { useEffect, useState } from 'react'

export function useFetch(url,method='GET'){

  
  
  //const[data,setData]=useState([{"title": "to [new york","id":"100"},{"title": "to Paris ","id": "200"},{"title": "to London","id": "300"},{"title": "to Washington","id":"400"}])
 
 const[data,setData]=useState(null)
  const[error,setError] =useState(null)
 const[isPending,setIsPending]=useState(true)
 const [options,setOptions]=  useState(null)
 //function to postDtat
 const setFetchOptions=(dataToPost)=>{
   setOptions({
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(dataToPost)
   })
 }

 useEffect(()=>{

   const controller =new AbortController()

     const fetchData = async (fetchOptionsObject)=>{
      //const controller = AbortController()
      
      setIsPending(true)
            try{

              const res = await fetch(url,{...fetchOptionsObject,signal:controller.signal})
              if(!res.ok){
                 throw new Error(res.statusText)
              }
        
              const json =await res.json()
              setIsPending(false)
              setData(json)
              setError(null)
            }catch(err){
             if(err.name==="AbortError"){
              console.log('Fetch was aborted')
             }else {
              setIsPending(false)
              
              setError('Could not fetch data')
              console.log(err.message)

             }
               
             

              
            }
        
      
     
     }
     if(method=== 'GET'){
      fetchData()
     }
     if(method==='POST' && options){
      fetchData(options)
     }
     
    
     return ()=>{
      controller.abort()
     }

 },[url,options,method])

  

 return {data,isPending,error,setFetchOptions}

}
    
