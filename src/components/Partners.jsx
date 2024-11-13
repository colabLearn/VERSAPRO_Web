import React from 'react';
import { Collapse } from 'antd';
import '../components_css/Patners.css'; // Ensure correct path to your CSS

const partners = [
  {
    key: '1',
    name: "Microsoft",
    badgeImg: "/images/MS_Startups_Celebration_Badge_Dark.png",
    briefIntro: (
      <p>Our startup is excited to announce a strategic sponsorship with Azure as we continue developing our product. 
          This partnership provides us with access to Azure's cutting-edge cloud tools and infrastructure, offering crucial 
          support during our development phase and throughout user testing. Azure’s powerful resources will enable us to refine 
          our product, optimize performance, and gather valuable insights, all while ensuring scalability and security. This 
          collaboration will be instrumental in helping us mature the product and prepare for a successful market launch, driving 
          profitability and long-term growth.
      </p>
    )
  },
  // Add more partners here
];

const CustomHeader = ({ logoUrl, name }) => (
  <div className="custom-header">
    {logoUrl && <img src={logoUrl} alt={name} className="partner-logo" />}
    <span>{name}</span>
  </div>
);

const Partner = () => (
  <div className="partners-container">
    <Collapse accordion className="ant-collapse">
      {partners.map(partner => (
        <Collapse.Panel
          key={partner.key}
          header={<CustomHeader logoUrl={partner.badgeImg} name={partner.name} />}
        >
          <div className="partner-description">
            {partner.briefIntro}
          </div>
        </Collapse.Panel>
      ))}
    </Collapse>
  </div>
);

export default Partner;
