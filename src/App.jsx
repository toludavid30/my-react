import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Counter from './components/counter.jsx'
import BookCard from './components/BookCard.jsx'  
import Notfound from '../pages/Notfound.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products/Products.jsx'
import SingleProducts from '../pages/SingleProducts.jsx'
import SignUp from '../pages/signUp/SignUp.jsx'
import AddProduct from '../pages/Add products/AddProduct.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

const App = () => {
  return(
    <>
    <BrowserRouter>
      <AuthProvider>
      <Navbar/>
      <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<SingleProducts/>}/>
      <Route path="/hero" element={<Hero/>}/> 
      <Route path="/main" element={<BookCard/>}/>
      {/* <Route path="/main/:id" element={<SingleProducts/>}/> */}
      {/* <Route path="/main/:id/:productId" element={<SingleProducts/>}/> */}
      <Route path="*" element={<Notfound/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/add-product" element={<AddProduct/>}/>
      
    </Routes>
      </AuthProvider>
    
    </BrowserRouter>
    
    
    </>







    // <div>
    //   <Navbar/>
    //   <Hero/>
    //   <Counter/>
    // </div>
  )
}

export default App
