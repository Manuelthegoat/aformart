import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import Routes from './Routes'
import swal from 'sweetalert'

const App = () => {
  const [cart , setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const handleClick = (pop) => {
   let isPresent = false;
   cart.forEach((prod)=>{
    if (pop.id === prod.id)
    isPresent = true;
   })
   if (isPresent){
    setWarning(true);
    setTimeout(()=>{
      setWarning(false);
    }, 2000);
    return ;
   }
      setCart([...cart, pop]);
      swal("Good job!", "You have added this product to cart!", "success", {timer: 2000});
  }
  const handleChange = (pop, d) =>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if (data.id === pop.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
    setCart([...tempArr])
  }
  return (
    <div>
     <Navbar size={cart.length}/>
     <Routes handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange}/> 
     <Footer/>
     {
      warning && alert("Sorry this item is already in cart")
     }
    </div>
  )
}

export default App

