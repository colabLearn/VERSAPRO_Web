import React from 'react';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <center><h2>Contact Us</h2></center>
      <div className="address-wrapper">
        <div className="address-item">
          <address>
            <p>
              <HomeOutlined /> VERSAPRO TECH<br />
              1 Tranent Walk<br />
              Dundee, United Kingdom <br />
              DD40XW <br />
            </p>
            <p>
              <PhoneOutlined /> +44(0)7770093639
            </p>
            <p>
              <MailOutlined /> <a href="mailto:colablearn2024@gmail.com">colablearn2024@gmail.com</a>
            </p>
          </address>
        </div>
        <div className="address-item">
          <address>
            <p>
              <HomeOutlined /> VERSAPRO TECH<br />
              Hauptstraße 1<br />
              Berlin, Germany <br />
              10115 <br />
            </p>
            <p>
              <PhoneOutlined /> +49 30 12345678
            </p>
            <p>
              <MailOutlined /> <a href="mailto:info@versapro.de">info@versapro.de</a>
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
