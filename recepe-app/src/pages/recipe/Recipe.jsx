import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
//styles
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme'


const Recipe = () => {

  const {id} = useParams()

  const url = `http://localhost:3000/recipes/${id}`
  
     const{data:recipe} =  useFetch(url)
  
   const{color,mode}= useTheme()


  return (
    <div className='container  min-vh-100 '  >
   
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