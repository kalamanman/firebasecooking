import { Link } from 'react-router-dom'
import { useState} from 'react'
import './Navbar.css'
import Home from '../pages/home/Home'
import Create from '../pages/create/Create'
import Search from '../pages/search/Search'
import SearchBar from './SearchBar'
import {useTheme}  from '../hooks/useTheme'
import ThemeSelector from './ThemeSelector'


const Navbar = () => {

  
  const [term,setTerm] = useState('');
 
        const {color,changeColor,mode} =useTheme()
        
  return (
    <div className='py-1  container-fluid
    d-flex justify-content-end
    my-3
    align-items-center' 
    style={{backgroundColor:mode==='dark'?'grey':color}}
    >
        <Link to ='/' className='mx-0
         text-light py-0 px-4  ms-0 text-decoration-none me-auto fs-3'  element={<Home/>}>
          Ninja Cooking Pro</Link>
        <SearchBar/>  
        <Link to ='/create'  className='mx-4 my3 text-light 
         py-3 text-decoration-none fs-3'  element={<Create/>}>Add a recipe</Link>
    
         
    </div>
    )
}

export default Navbar