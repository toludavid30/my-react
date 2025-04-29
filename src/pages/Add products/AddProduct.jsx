import useAddProducts from "./hooks/useAddProducts"

const AddProduct = () => {
    const{handleInput, handleSubmit, isLoading} = useAddProducts()
  return (
    <div>
        <form onSubmit={handleSubmit} className="container w-75 py-4 mx-auto d-flex flex-column gap-3" action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleInput} name='name' className="form-control form-control-md" id="name" placeholder="Enter Product name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="type">Product Type </label>
                <input type="text" onChange={handleInput} name='type' className="form-control form-control-md" id="type" placeholder="Enter Product type" required/>
            </div>
            <div className="form-group">
                <label htmlFor="id">Product ID</label>
                <input type="text" onChange={handleInput} name='id' className="form-control form-control-md" id="productID" placeholder="Enter Product ID" required/>
            </div>
            <button type="submit" disabled={isLoading} className="btn btn-primary btn-lg w-100">
                {
                    isLoading?(
                        <span>Adding .....</span>
                    ):(
                        <span>Add Product</span>
                    )
                }
            </button>
        </form>
    </div>
  )
}

export default AddProduct