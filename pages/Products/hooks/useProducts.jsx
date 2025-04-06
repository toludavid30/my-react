import { useState, useEffect } from 'react';


const useProducts = () => {
        const baseUrl = 'https://fakestoreapi.com';
        const [products, setProducts] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
    
        useEffect(() => {
            getProducts();
        }, []);
        
        const getProducts = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${baseUrl}/products`);
                const data = await res.json();
                setProducts(data); 
            } catch (error) {
                console.log(error);     
            }finally{
                setIsLoading(false);
            }
    
        }
        return{
            isLoading,
            products,
        }
}

export default useProducts