import React,{useState,createContext} from 'react'

export const LoadingContext = createContext()

export const LoadingContextProvider = (props) => {
	const [loading,setLoading] = useState(true)
	return (
		<LoadingContext.Provider value={{loading,setLoading}} >
			{props.children}
		</LoadingContext.Provider>
	)
}
