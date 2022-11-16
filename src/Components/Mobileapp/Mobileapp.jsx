import React from 'react'
import './Mobileapp.css';
import Google from '../../img/Playstore.png';
import Apple from '../../img/Appstore.png';
import Man from '../../img/Man.png';

const Mobileapp = () => {
  return (
    <div className="mobile">
        <div className="mobileleft">
            <p className="mobiletitle">You Can Now Order On Our Mobile <span className="extra">App</span></p>
            <p className="mobiletext">All you need to do is download our delivery app and you can <br/>start making orders for your delivery.</p>
            <div className="download">
                <img src={Google} alt="" />
                <img src={Apple} alt="" />
            </div>
        </div>
        <div className="mobileright">
            <img src={Man} alt="" />
        </div>
    </div>
  )
}

export default Mobileapp
