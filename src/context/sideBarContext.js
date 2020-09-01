import React,{useState,createContext} from 'react';

export const SidebarContext = createContext()


export const SidebarContextProvider = (props) => {
    const [hidden,setHidden] = useState('hidden')
      const hide = () => {
          setHidden('hidden')
      }
      const unhide = () => {
        setHidden('sidebar')
    }
    return(
        <SidebarContext.Provider value={{hidden,setHidden,hide,unhide}} >
            {props.children}
        </SidebarContext.Provider>
    )
}