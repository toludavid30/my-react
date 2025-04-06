import React from 'react'
// import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useProducts from './hooks/useProducts';


const Products = () => {
    const { isLoading, products} = useProducts()
  return (
    <div>
        {
            isLoading ?( 
            <p>loading ...</p>
            )
            :(
            <div className='container'> 
                <h2>Products</h2>
                    <div className='card-container row justify-content-evenly gap-2'>
                        {
                        products?.map((elem, index)=>(
                            <div className='card col-md-3' key={index}>
                                <img src= {elem.image} alt="" className='card-img-top'/>
                                <div className='card-body'>
                                    <h2 className="card-title">{elem.title}</h2>
                                    <p className='card-text'>{elem.price}</p>
                                    <p className='card-text'>{elem.category}</p>
                                    <a href={`/products/${elem.id}`} className='btn btn-md btn-primary'>Purchase</a>
                                </div>
                            </div>
                        )
                    )
                }
                    </div>        
            </div>
            )
        }

    </div>
  )
}

export default Products