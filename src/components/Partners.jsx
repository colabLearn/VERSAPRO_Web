import React from 'react';
import { Button } from 'antd';
import { GlobalOutlined, TeamOutlined } from '@ant-design/icons';
import '../components_css/Partners.css';

const partners = [
  {
    id: '1',
    name: "Microsoft",
    logo: "/images/MS_Startups_Celebration_Badge_Dark.png",
    category: "Technology Partner",
    description: "Strategic partnership with Azure providing cutting-edge cloud tools and infrastructure for development and deployment.",
    benefits: [
      "Access to Azure's cloud infrastructure",
      "Technical support and resources",
      "Development tools and services",
      "Scalability and security solutions"
    ],
    link: "https://azure.microsoft.com"
  }
];

const Partners = () => {
  return (
    <div className="partners-container">
      <div className="partners-header">
        <h1>Our Partners</h1>
        <p>Working together with industry leaders to deliver excellence</p>
      </div>

      <div className="partners-grid">
        {partners.map(partner => (
          <div className="partner-card" key={partner.id}>
            <div className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>

            <div className="partner-content">
              <div className="partner-info">
                <h2>{partner.name}</h2>
                <span className="partner-category">
                  <GlobalOutlined /> {partner.category}
                </span>
                <p className="partner-description">{partner.description}</p>
              </div>

              <div className="partner-benefits">
                <h3>Partnership Benefits</h3>
                <ul>
                  {partner.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <Button 
                type="primary" 
                href={partner.link}
                target="_blank"
                className="partner-link"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="partnership-cta">
        <div className="cta-content">
          <TeamOutlined className="cta-icon" />
          <h2>Become a Partner</h2>
          <p>Join our network of industry leaders and innovators</p>
          <Button type="primary" href="/contact" size="large">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
