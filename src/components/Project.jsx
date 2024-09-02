import React from 'react';
import { Collapse } from 'antd';
import '../App'; // Ensure correct path to your CSS

const { Panel } = Collapse;

const projects = [
  {
    key: '1',
    label: "ColabLearn",
    projectLogoUrl: "../../images/colabLearnLogo.jpg",
    projectDescription: (
      <>
        <p><strong>ColabLearn: </strong> is an innovative e-learning platform dedicated to delivering 
          cutting-edge tech courses and programs. Our ongoing work leverages the latest 
          research in learning science and learning engineering. We are creating content 
          that goes beyond mere information dissemination, focusing on fostering deep 
          understanding and knowledge creation, particularly in an era where AI solutions 
          are abundant but true learning and knowledge acquisition remain critical.
        </p>
      </>
    ),
    projectLink: "https://www.youtube.com/@ColabLearn",
  },
  {
    key: '2',
    label: "CallPro",
    projectLogoUrl: "../../images/callPro_Logo_g.png",
    projectDescription: (
      <>
        <p><strong>CallPro</strong> is a groundbreaking startup focused on transforming the professional 
          services landscape in Africa, starting with Nigeria. Our goal is to develop a 
          robust web application that seamlessly connects verified professionals with those 
          who need their services.
        </p>
        <ul>
          <li><strong>CallMed: </strong> 
            This specialized platform enables users to locate, verify, and connect 
            with nearby medical practitioners, including doctors, nurses, and pharmacists. 
            Whether users need emergency assistance, online consultations, or appointment 
            scheduling, CallMed ensures they can access trusted healthcare professionals 
            quickly and efficiently.
          </li>
          <li><strong>CallMech: </strong> 
            This service connects users with nearby automobile technicians in real time. 
            Whether you’re facing a sudden breakdown or need routine maintenance, CallMech 
            provides profiles, locations, and availability of qualified mechanics to get you 
            back on the road quickly.
          </li>
        </ul>
        <p>
        As we expand CallPro, we will introduce additional professional services, 
        refining our platform based on user feedback and market acceptance.
        </p>
      </>
    ),
    projectLink: "/callPro",
  },
  {
    key: '3',
    label: "VERSAPRO Services",
    projectLogoUrl: "../../images/VP_move_G.png",
    projectDescription: (
      <>
        <p>
            <strong>Tech-Enables Logistics & Recruitment Solutions: </strong> 
            We are developing technology-driven solutions to enhance logistics services 
            and streamline recruitment processes for a wide range of companies.
        </p>
        
      </>
    ),
    projectLink: "/verspro_services",
  },
  {
    key: '4',
    label: "VERSAPRO Tech",
    projectLogoUrl: "../images/VP_tech.jpg",
    projectDescription: (
      <>
        <p>
            <strong>Tech-Solution Consultancy: </strong> 
            Our consultancy division specializes in delivering tailored technology solutions that cater 
            to the distinct needs of both corporate clients and individuals. Leveraging our expertise 
            across diverse domains, we are dedicated to providing impactful and results-driven tech solutions.
        </p>
        
      </>
    ),
    projectLink: "/verspro_services",
  },
  
];

const CustomHeader = ({ logoUrl, label }) => (
  <div className="custom-header">
    {logoUrl && <img src={logoUrl} alt={label} />}
    <span>{label}</span>
  </div>
);

const Project = () => (
  <Collapse accordion className="ant-collapse">
    {projects.map(project => (
      <Panel 
        header={<CustomHeader logoUrl={project.projectLogoUrl} label={project.label} />} 
        key={project.key}
      >
        <div className="project-description">
          {project.projectDescription}
        </div>
        <a 
          href={project.projectLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          View More
        </a>
      </Panel>
    ))}
  </Collapse>
);

export default Project;

