import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleProducts = () => {
    const {id} = useParams()
    console.log(id);

    const baseUrl = "https://fakestoreapi.com";
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetchProduct()
    }, [])
    const fetchProduct = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`${baseUrl}/products/${id}`);
          const data = await res.json();
          console.log(data);
          setProduct(data);
        } catch (error) {
          console.log(error);
        } 
        finally{
          setIsLoading(false);
        }
      };
    
  return (
    <div>
        {
            isLoading ? (
                <p>Loading...</p>
            ):(
                <div>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt=""/>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )
          }
    </div>
  )
}

export default SingleProducts