import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
//styles
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme'
import { storeHandle } from '../../firebase/config'
import {useState} from 'react'


const Recipe = () => {

  const {id} = useParams()


     const[recipe,setRecipe] =  useState(null)
     const[error,setError] =  useState('')
  
   const{color,mode}= useTheme()
   const findRecipe=(id)=>{
    storeHandle.collection('recipes').doc(id).get()
    .then(doc=>{
      if(!doc.exists){ setError('Could not find that recipe')}
    setRecipe(doc.data())
    })
   }
   findRecipe(id)
  

  return (
    <div className='container  min-vh-100 '  >
   {error && <div className='text-danger'  >{error}</div> }
    {recipe && 
       < div className="card my-2 text-light style='width: 10em;'" 
       style={{backgroundColor:mode ==='dark'?'grey':color}}
       key ={recipe.id}>
              
              <h3 className="card-title">{recipe.title} </h3>

              
            <p className='mx-3 text-start'>Ingredients :</p>
            <ul className="text-start" />
            
              {recipe.ingredients.map((ing)=>(
                <li className=' text-start   list-unstyled px-3' key={ing}>{ing}</li>
              ))
              }
            
            <h5 h4 className="my-1 card-subtitle ">It takes about {recipe.cookingTime} minutes to cook </h5>
            <p className="lead py-2">{recipe.method}</p>
    </div>}
    </div>
  )
}

export default Recipe