import { createContext,useContext, useEffect, useState } from "react";

const authContext = createContext(null)

export const useAuthContext = () =>{
  return useContext(authContext)
}

const AuthProvider = ({children}) => {
  const [isAuthorized,setIsAuthorized] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setIsAuthorized(true)
      console.log('token from auth context ', token);
    }else if(!token){
      setIsAuthorized(false)
    }
  },[])

  return (
    <authContext.Provider value={{isAuthorized,setIsAuthorized}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider;