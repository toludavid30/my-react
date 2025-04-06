import React, { useContext } from 'react'
import { authContext } from '../../../src/contexts/AuthProvider'
const useSignUp = () => {  
     const {isLoading, handleSubmit, setFormData} = useContext(authContext)

    const handleInput = (e) =>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
        
    }



    return{
        isLoading,
        handleSubmit,
        handleInput
    }
}

export default useSignUp