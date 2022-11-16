import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Components/Products/Cart/Cart'
import Products from './Components/Products/Products'
import Trend from './Pages/Trend'
import NotFound from './Pages/NotFound'

const Routing = ({handleClick, cart, setCart, handleChange}) => {
  return <div>
    <Routes>
    <Route path="/" element={<Home handleClick={handleClick}/>}/>
    <Route path="/cart" element={<Cart cart={cart} handleChange={handleChange} setCart={setCart}/>}/>
    <Route path="/products" element={<Products handleClick={handleClick}/>}/>
    <Route path="/trending" element={<Trend/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
  </div>
}

export default Routing
