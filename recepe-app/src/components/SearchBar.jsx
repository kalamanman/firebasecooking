import React from 'react'
import { useNavigate } from 'react-router-dom'


import { useState } from 'react'

const SearchBar =()=>{

   //setup the state
  const[term,setTerm] =useState('')
  const navigate =useNavigate()

const handleSubmit =(e)=>{
  e.preventDefault()
  setTerm(e.target.value)
  navigate(`/search?q=${term}`)
  setTerm('')

}

  return (
    <div  >
    <form  
  
    onSubmit={handleSubmit}>
     <label 
     className='text-light me-2 fs-4 '
     htmlFor="search">Search
     </label>
  
        <input type="text" 
     className='me-4 '
     id='search'
     value={term}
     onChange={(e)=>{setTerm(e.target.value)}}
     />
    
     
     
    </form>
  </div>
  )
}

export default SearchBar