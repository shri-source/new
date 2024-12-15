import React from 'react';
import '../Style/Contact.css';
import image from "../assets/contactAsset.webp";

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact us</h1>
      <div className="contacts">
      <div className="add">
        <p>We love our customers, so please feel free to call us 24/7.</p>
        <p>Address: Bilby Rd, Elk Grove, Sacramento County, California 95757 , US</p>
        <p>US Contact No: 1-770-518-1947</p>
        <p>Email - info@allroundstaffing.com</p>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Contact