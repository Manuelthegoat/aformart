import React from 'react'
import './Footer.css';
import FooterLogo from '../../img/Logo.png';
import Facebook from '../../img/Facebook.png';
import Instagram from '../../img/Instagram.png';
import Twitter from '../../img/Twitter.png';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="name">
            <img src={FooterLogo} className="footerlogo" alt="" />
            <p className="nametext">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do <br/>eiusmod tempor </p>
            <div className="footicons">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
        </div>
        <div className="footlinks">
          <ul className="footlist">
            <li className="footlisttitle">About us</li>
            <li className='footlistli'>About us</li>
            <li className='footlistli'>Service us</li>
            <li className='footlistli'>Contact us</li>
            <li className='footlistli'>Company</li>
          </ul>
          <ul className="footlist">
            <li className="footlisttitle">About us</li>
            <li className='footlistli'>About us</li>
            <li className='footlistli'>Service us</li>
            <li className='footlistli'>Contact us</li>
            <li className='footlistli'>Company</li>
          </ul>
        </div>
        <div className="footcontact">
          <p className="footlisttitle">Get in touch</p>
          <p className="fcontacttext">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do eiu</p>
          <div className="footinput">
            <input type="text" placeholder='Email' className="finput" />
            <div className="fbtndiv">
            <button className="fbutton">Subscribe</button>
            </div>
          </div>
        </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Footer
