import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/modeIcon.svg'
//styles
import './ThemeSelector.css'

import React from 'react'
 const ThemeSelector =()=>{
        const {changeColor,mode,changeMode}= useTheme()
        const themeColors =  ['#58249c','#249c6b','#b70233']            //    ['green','blue','yellow']             //['#58249c','#249c6b','#b70233']
  return (
    <div className=' my-4 theme-selector'>
        <img src={modeIcon} 
        className='img-fluid d-flex me-auto'
        style={{filter:mode==='dark'?'invert(100%)':'invert(20%)'}}
        onClick={()=>mode==='dark'?changeMode('light'):changeMode('dark')}
        />
        <div    className="theme-btns" >
      
            {themeColors.map(item=>(
                <div
             
                key={item}
                style={{backgroundColor:item }}
                onClick={()=>changeColor(item)}
                />
            
            ))}

        </div>

    </div>
  )
}

export default ThemeSelector