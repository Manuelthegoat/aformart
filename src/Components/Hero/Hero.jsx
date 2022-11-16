import React from 'react'
import './Hero.css';
import Girl from '../../img/Woman.png';
import Btn from '../../img/Searchbtn.png';
import Icon from '../../img/Searchicon.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="heroleft">
            <p className="herotitle">
            Ado Market Square brings <br/>African Foods, To <br/>Your <span className="alttext">Doorstep </span>.
            </p>
            <p className="herotext">
            Best cooks and best delivery guys all at your service. Hot <br/>tasty food will reach you in 60 minutes.
            </p>
            <div className="search">
                <img src={Icon} alt="" className="icon" />
                <input type="text" name="text" id="text" className='heroinput' placeholder='Search food' />
                <button className="btnhero"><img src={Btn} alt="" /></button>
            </div>
        </div>
        <div className="heroright">
            <img src={Girl} alt="" />
        </div>
    </div>
  )
}

export default Hero
