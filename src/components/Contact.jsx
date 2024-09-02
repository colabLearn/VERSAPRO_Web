import React from 'react';
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <center><h2>Contact Us</h2></center>
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
  );
};

export default Contact;
