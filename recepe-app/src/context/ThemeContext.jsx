import { createContext,useReducer } from "react"

  export const ThemeContext =  createContext()
  //will recieve action object from the dispatch 
  //function {action.type: 'DO_THAT',action.payload 'How much to do'}
  const themeReducer=(state,action)=>{
    switch(action.type){
    case 'CHANGE_COLOR':
      return{...state,color:action.payload}
    case 'CHANGE_MODE':
      return{...state,mode:action.payload}
      default :
      return state

    }//end switch
  }

    export const ThemeProvider =({children})=>{
      const[state,dispatch] =useReducer(themeReducer,{color:'green',
      mode:'dark'
    }) //initial state
      //change color 
      const changeColor =(color)=>{
        dispatch({type:'CHANGE_COLOR',payload:color})
        //dispatch object {action.type,sction.payload}
      }
      const changeMode =(mode)=>{
        dispatch({type:'CHANGE_MODE',payload:mode})
        //dispatch object {action.type,sction.payload}
      }

   return(
    <ThemeContext.Provider 
       value={{
         ...state,changeColor,
         changeMode

           }}
    >

        {children}
    </ThemeContext.Provider>
)
     
  }


