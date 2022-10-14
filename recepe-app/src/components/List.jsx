import {Link} from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Recipe from '../pages/recipe/Recipe'

//styles 
import  './List.css'

const List = ({recipes}) => {
const {color,mode} =  useTheme()


    console.log(recipes)
    return (
      <div className="container List min-vh-100">
        
            <div className="row my-2">
                         { recipes.map((recipe)=>(

                  <div className="col-sm-6  col-lg-4  my-2"  key ={recipe.id}>
                    < div className="card p-1 
                      text-light text-start flex-stretch h-100
                     d-flex flex-coloumn justify-content-bottom  "
                         style={{backgroundColor:mode==='dark'?'grey':color}}
                    >
              
                      <h3 className=" mb-0 card-title text-center">{recipe.title} </h3>
                
              
              
                      < p className='mt-2' >It takes about {recipe.cookingTime} to cook </p>
                      <p className="lead">{recipe.method.substring(0,100)} .....</p>
                      <Link to={`/recipe/${recipe.id}`}  element={<Recipe/>}
                      className='btn btn-dark mt-auto '  >
                      TRy this .... </Link>
              
            </div>
          </div>

           ))
          

                         }

      
   </div>
      </div>
        
    )
}

export default List;
                                                                                                                                                                                                 