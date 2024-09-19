import React from 'react';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import '../components_css/contact.css';

const contactDetails = [
  {
    country: "United Kingdom",
    address: ["1 Tranent Walk", "Dundee, United Kingdom", "DD40XW"],
    phone: "+44(0)7770093639",
    email: "colablearn2024@gmail.com",
  },
  {
    country: "Germany",
    address: ["Hauptstraße 1", "Berlin, Germany", "10115"],
    phone: "+49 30 12345678",
    email: "info@versapro.de",
  },
];


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="address-wrapper">
        <table className='address-item'>
          <thead>
             <tr>
               <th>Country</th>
               <th><HomeOutlined /> Address</th>
               <th><PhoneOutlined /> Phone</th>
               <th><MailOutlined /> Email</th>
             </tr>
          </thead>
          <tbody>
             {contactDetails.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.country}</td>
                  <td>
                    
                    <ul>
                     {contact.address.map((line, i)=>(
                       <li key={i}>{line}</li> 

                     ))}
                    </ul>
                  </td>
                 
                  <td> 
                  
                  {contact.phone}
                  </td>

                  <td>
                  
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </td>
                </tr>
             ))}
          </tbody>
        </table>
    
  
      </div>
    </div>
    
  );
};

export default Contact;
