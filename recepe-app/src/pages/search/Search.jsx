//styles

import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import List from '../../components/List'


const Search = () => {

  const query = useLocation().search
      console.log(query)
         const         {data:recipes,error,isPending}        =   useFetch(`http://localhost:3000/recipes${query}`)
                  
  return (
    

      <div>
      {error && <div>{error} </div> }
      {isPending && <div>Loading ... </div> }
        {(recipes && recipes.length !=0)? <List  recipes = {recipes}/>:
        <div>No recipe with the term  " {new URLSearchParams(query)}" was found</div>
        
      }

      </div>
  )
}

export default Search