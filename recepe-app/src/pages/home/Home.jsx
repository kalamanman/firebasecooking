//styles
import  './Home.css'
import { storeHandle } from '../../firebase/config'
import {useState,useEffect} from 'react'
import List from '../../components/List'
import  ThemeSelector  from '../../components/ThemeSelector'

const Home = () => {
    
    const [recipes,setRecipes] = useState(null)
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)


    useEffect(()=>{
        setIsPending(true)
        storeHandle.collection('recipes').get()
        .then((snapshot)=>{
          if(snapshot.empty){
            setIsPending(false)
            setError('No recipes were found')
          }else{
              let result =[]
              snapshot.docs.forEach(doc=>{
                result.push({id:doc.id, ...doc.data()})
              })
              setIsPending(false)
              setRecipes(result)
          }

        })
    },[])

  return (

      <div className='min-h-100v'>
        {isPending && <div> Is Loading ....</div> }
        {error && <div> could not fetch data !!</div> }
  
        {recipes && <List   recipes = {recipes}/> }
        
      </div>
  )
}

export default Home