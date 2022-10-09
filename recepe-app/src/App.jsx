import {BrowserRouter,Routes,Route}    from 'react-router-dom'
//Components imports
import Home  from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar'
//styles imports
import './App.css'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {
     
 const {mode} = useTheme()
  

  return (
    <div className= "App">
      <div className={`container `}>

 
   

      
      </div>
      <div className={`${mode}`}>
      <BrowserRouter>
      <Navbar/>
         <div className="container">
          <ThemeSelector/>
         </div>
      <Routes>
   
         <Route path='/' element ={<Home/>}  />
         <Route path='/search' element ={<Search/>}  />
         <Route path='/create' element ={<Create/>}  />
         <Route path='/recipe/:id' element ={<Recipe/>}  />
         

      </Routes>
      
      </BrowserRouter>
      </div>
      

    </div>
  )
}

export default App
