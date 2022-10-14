//styles 
import { useState,useEffect } from 'react'
import { storeHandle } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import  './Create.css'
import { useTheme } from '../../hooks/useTheme'

const Create =  () => {
  const[title,setTitle] = useState('')
  const[ingredient,setIngredient] = useState('')
  const[method,setMethod] = useState('')
  const[cookingTime,setCookingTime] = useState('')

  const[ingredients,setIngredients] = useState([])
 const navigate =useNavigate()
const {color} =useTheme()

const addIngredient=(e)=>{
 e.preventDefault()
 if(ingredient){
  
 setIngredient(ingredient)}
  if(!ingredients.includes(ingredient)){
    setIngredients((prevIng) =>([...prevIng,ingredient]))
  }
  setIngredient('')
}
   const  handleSubmit=async (e)=>{
    e.preventDefault()
   const recipe ={title,method, cookingTime :cookingTime+' minutes',ingredients}
   try{
    await storeHandle.collection('recipes').add(recipe)
    navigate('/')
   }catch(err){
    console.log('err')
   }
  
   }
   



  
  return (
    <div   
    className='container'
    style={{backgroundColor:color}}
    >
      
      <form  
     onSubmit={handleSubmit} >
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='d-flex py-3'>
        < input type="text" 
        className='form-control'
        onChange={(e)=>setIngredient(e.target.value.trim().toLowerCase())} 
        
        value={ingredient} />
         
         <button className='btn btn-lg btn-dark ms-1 py-0 px-3'
         onClick={addIngredient}
          >Add </button>
      
      
    
         </div>
         { ingredients.map(ing=>(<div  className='d-inline-block mb-2' key={ing} >
      
      {ing} ,</div>))}
     
      <div className='text-start'>
      <label htmlFor="title" className="form-label mt-5 text-start text-light"  >Title</label>
      <input type="text" id='title'
         className='form-control '
      value={title}
      required
      onChange={(e)=>setTitle(e.target.value)} />
      
     </div>
     <div className='text-start text-light'>
      <label htmlFor="method" className="form-label">Method</label>
      <textarea type="text" id='method' 
        className='form-control'
      value={method}
      onChange={(e)=>setMethod(e.target.value)} />
      </div>
      <div className='text-start text-light'>
      <label htmlFor="cookingTime" className="form-label">Cooking Time</label>
      <input type="number" id='cookingTime' 
        className='form-control'
      value={cookingTime}
      required
      onChange={(e)=>setCookingTime(e.target.value)} />
      </div>
      <button type='submit' className='btn btn-lg btn-dark my-lg-3'
      
      >Submit</button>
           </div>
          </div>
      </form>

    </div>
   
  )
}

export default Create