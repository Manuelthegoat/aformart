import React from 'react'
import './About.css';
import aboutleft from '../../img/aboutleft.png';
import icon1 from '../../img/ico1.png';
import icon2 from '../../img/ico2.png';
import icon3 from '../../img/ico3.png';
import icon4 from '../../img/ico4.png';

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={aboutleft} alt="" />
        </div>
        <div className="right">
            <p className="abouttitle">Your Favorite <span className="african">African Foods</span> <br/>All In One Place!</p>
            <p className="abouttext">This is a type of resturent which typically serves food and drink, in addition to <br/>light refreshments such as baked goods or snacks. The term comes from the <br/>French word meaning food</p>
            <ul className="abouti">
                <li><img src={icon1} alt="" />Online order</li>
                <li><img src={icon2} alt="" />24/7 service</li>
            </ul>
            <ul className="about2">
                
            <li><img src={icon3} alt="" />pre-reservation</li>
                <li><img src={icon4} alt="" />Shipping</li>
            </ul>
            <button className="aboutus">About us</button>
        </div>
    </div>
  )
}

export default About
