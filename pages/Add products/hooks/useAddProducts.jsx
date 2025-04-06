import React, { useState } from 'react'

const useAddProducts = () => {
    const baseUrl = 'http://localhost:4006/api'
    const [isLoading, setIsLoading] = useState(false)
        const [formData, setFormData] = useState({
            name:'',
            type:'',
            id:''
        }
    )
    const handleInput = (e) =>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    } 
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setIsLoading(true)
        try {
           const res = await fetch(`${baseUrl}/products/`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }
           }) 
           const data = await res.json()
           console.log(data);

        } catch (error) {
            console.log(error);       
        }
        finally{
            setIsLoading(false)
            
        }
    }

    return{
        handleInput, handleSubmit, isLoading
    }
}

export default useAddProducts