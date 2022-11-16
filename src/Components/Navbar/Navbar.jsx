import React from 'react'
import './Navbar.css';
import Logo from '../../img/Logo.png';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import cartimg from "../../img/cart.png"

const Navbar = ({size}) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100)
      console.log(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return()=> window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className={`${sticky ? "sticky" : "navbar"}`}>
        <Link className="navlogo" to='/'>
            <img src={Logo} alt="" />
        </Link>
        <ul className="navlist">
            <Link className="navitem" to="/trending">Trending</Link>
            <Link className="navitem">Delivery status</Link>
            <Link className="navitem" to="/products">Available products</Link>
            <Link className="navitem">About us</Link>
            <Link className='navitem carty' to="/cart">
              <img src={cartimg} alt="" />
        <span>{size}</span>
            </Link>
        </ul>
        <Link className="navbtn" to='/'>
            <button className="navbutton">Browse Categories</button>
        </Link>
    </div>
  )
}

export default Navbar
