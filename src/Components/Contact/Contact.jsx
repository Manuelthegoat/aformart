import React from 'react'
import './Contact.css';
import Map from '../../img/Map.png';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contactleft">
          <div className="working">
            <p className="contacttitle">Working Hours</p><br/>
            <p className="contacttext">Sunday to saturday</p>
            <p className="contacttext">09:00 AM to 11:00 PM</p><br/>
            <p className="contacttext">Friday</p>
            <p className="contacttext">02:00 PM to 1:00AM</p>
          </div>
          <div className="location">
          <p className="contacttitle">Location</p><br/>
            <p className="contacttext">127, Nedum Street, Ogba,</p>
            <p className="contacttext">Lagos</p><br/>
            <p className="contacttext">546544</p>
          </div>
          <div className="contactus">
          <p className="contacttitle">Contact us</p><br/>
          <p className="contacttext">+123456789</p>
          <p className="contacttext">service@afor-mart.com</p>
          </div>
        </div>
        <div className="contactright">
            <img src={Map} alt="" className="map" />
        </div>
    </div>
  )
}

export default Contact
