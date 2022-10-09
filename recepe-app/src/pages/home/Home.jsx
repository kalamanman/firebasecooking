//styles
import  './Home.css'
import {useFetch} from '../../hooks/useFetch'
import List from '../../components/List'
import  ThemeSelector  from '../../components/ThemeSelector'

const Home = () => {
    const url='http://localhost:3000/recipes'
    const {data:recipes,error,isPending} = useFetch(url)

  return (

      <div>
        {isPending && <div> Is Loading ....</div> }
        {error && <div> could not fetch data !!</div> }
  
        {recipes && <List  recipes = {recipes}/> }
        
      </div>
  )
}

export default Home