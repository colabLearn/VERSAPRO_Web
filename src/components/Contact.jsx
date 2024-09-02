import React from 'react';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import '../App.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <center><h2>Contact Us</h2></center>
      <div className="address-wrapper">
        <address className="address-item">
          <p>
            <HomeOutlined /> VERSAPRO TECH<br />
            1 Tranent Walk<br />
            Dundee, DD40XW <br />
             United Kingdom.<br />
          </p>
          <p>
            <PhoneOutlined /> +44(0)7770093639
          </p>
          <p>
            <MailOutlined /> <a href="mailto:colablearn2024@gmail.com">colablearn2024@gmail.com</a>
          </p>
        </address>
        
        <address className="address-item">
          <p>
            <HomeOutlined /> VERSAPRO TECH<br />
            Simrock str 85<br />
            40237, Dusseldorf <br />
            Germany. <br />
          </p>
          <p>
            <PhoneOutlined /> +49(0)17620569849
          </p>
          <p>
            <MailOutlined /> <a href="mailto:adediranao@gmail.com">adediranao@gmail.com</a>
          </p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
