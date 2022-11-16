import React from 'react'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Trending from '../Components/Trending/Trending'
import About from '../Components/About/About'
import Products from '../Components/Products/Products'
import Mobileapp from '../Components/Mobileapp/Mobileapp'
import Contact from '../Components/Contact/Contact'

const Home = ({AddProducts, handleClick}) => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <Trending/>
        <About/>
        <Products AddProducts={AddProducts} handleClick={handleClick} />
        <About/>
        <Mobileapp/>
        <Contact/>
    </div>
  )
}

export default Home
