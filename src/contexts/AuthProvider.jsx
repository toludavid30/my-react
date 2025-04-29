import React, { createContext, useState } from 'react'

export const authContext = createContext();


const AuthProvider = ({children}) => {
    const baseUrl = 'https://my-backend-llzt.onrender.com/api'
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:''
  })
    const login = () =>{
        alert('logging in')
    }
    const handleSubmit = async(e) => {
      setIsLoading(true);
      e.preventDefault()
      
      try {
         const res = await fetch(`${baseUrl}/auth`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers:{
              'Content-Type':'application/json'
          }
         }) 
         const data = await res.json()
         console.log(data);
        //  console.log(formData);
         

      } catch (error) {
          console.log(error);       
      }
      finally{
          setIsLoading(false)
          
      }
  }
    
    
    const values = {
        login, 
        handleSubmit,
        isLoading,
        setFormData,
        formData
    }    
  return (
    <authContext.Provider value ={values}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider