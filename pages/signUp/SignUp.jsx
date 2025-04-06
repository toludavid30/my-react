import useSignUp from "./hooks/useSignUp"

const SignUp = () => {
    const {isLoading, handleSubmit, handleInput} = useSignUp()


  return (
    <div>
        <form onSubmit={handleSubmit} className="container w-75 py-4 mx-auto d-flex flex-column gap-3" action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleInput} name='name' className="form-control form-control-md" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleInput} name='email' className="form-control form-control-md" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleInput} name='password' className="form-control form-control-md" id="password" placeholder="Enter your password" required/>
            </div>
            {/* <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" className="form-control form-control-md" id="conPassword" placeholder="Confirm your password"/>
            </div> */}
            <button type="submit" disabled ={isLoading} className="btn btn-primary btn-lg w-100">
                {
                    isLoading? (
                        <span>Signing Up .....</span>
                    ):(
                        <span>Sign Up</span>
                    )
                }
            </button>
        </form>
    </div>
  )
}

export default SignUp