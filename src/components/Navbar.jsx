import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/AuthProvider';
const Navbar = ( ) => {
    const {login} = useContext(authContext)
    return(
        <div>
            <h1>Logo</h1>
            <div className='container d-flex justify-content-between align-items-centre'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <button className='btn' onClick={login}>Log in</button>
                <Link to='/add-product'>Add Product</Link>
                <Link to='/sign-up'>Sign Up</Link>
            </div>
        </div>
    )
}
 
export default Navbar