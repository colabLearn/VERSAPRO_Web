import React from 'react';
import { Form, Input, Button } from 'antd';
import { 
    HomeOutlined, 
    PhoneOutlined, 
    MailOutlined,
    GlobalOutlined,
    SendOutlined
} from '@ant-design/icons';
import '../components_css/contact.css';

const { TextArea } = Input;

const contactDetails = [
  {
    country: "United Kingdom",
    address: ["51 Brougham Gardens", "Dundee, United Kingdom", "DD4 6TN"],
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
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <Form
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            className="contact-form"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your Name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="Your Email" size="large" />
            </Form.Item>

            <Form.Item
              name="subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input placeholder="Subject" size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea 
                placeholder="Your Message" 
                rows={4}
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large"
                icon={<SendOutlined />}
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="contact-info-section">
          <div className="contact-info-header">
            <h2>Our Offices</h2>
            <p>Visit us at our locations or reach out through our contact channels.</p>
          </div>

          {contactDetails.map((location, index) => (
            <div className="contact-card" key={index}>
              <h3>
                <GlobalOutlined /> {location.country}
              </h3>
              
              <div className="contact-detail">
                <HomeOutlined />
                <div>
                  {location.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="contact-detail">
                <PhoneOutlined />
                <a href={`tel:${location.phone}`}>{location.phone}</a>
              </div>

              <div className="contact-detail">
                <MailOutlined />
                <a href={`mailto:${location.email}`}>{location.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
