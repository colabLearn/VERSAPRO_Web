import React from 'react';
import { Collapse } from 'antd';
import '../components_css/project.css'; // Ensure correct path to your CSS

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
    label: "VPimSys",
    projectLogoUrl:"../../images/VPimSys_Logo.jpg",
    projectDescription: (
      <>
         <p>
            <b>VPimSys </b>is an exciting, ongoing project that aims to revolutionize how small retail businesses manage 
            their operations. Currently in development, VPimSys is a cloud-based platform designed to provide 
            small businesses with an affordable, easy-to-use, and scalable solution for managing product catalogs, 
            purchase orders, inventory, sales points, and analytics. Our goal is to simplify complex retail management 
            tasks and empower small businesses to operate more efficiently and profitably, without the high costs and complexity 
            of enterprise software like SAP.

         </p>
         <p>
            As we continue to develop and refine the platform, we are focused on delivering real-time visibility, seamless integrations, 
            and data-driven insights to help retailers improve decision-making, optimize their operations, and grow their businesses. 
            With VPimSys, small businesses will gain the tools they need to compete in today’s fast-paced market while keeping costs manageable.
         </p>
         <p>
          We are excited to continue working towards bringing this innovative solution to life and look forward to the ongoing collaboration and 
          feedback as we roll out new features and scale VPimSys to meet the evolving needs of small retailers.
         </p>
      </>

    ),
    projectLink: "#"
  },
  // {
  //   key: '3',
  //   label: "CallPro",
  //   projectLogoUrl: "../../images/callPro_Logo_g.png",
  //   projectDescription: (
  //     <>
  //       <p><strong>CallPro</strong> is a groundbreaking startup focused on transforming the professional 
  //         services landscape in Africa, starting with Nigeria. Our goal is to develop a 
  //         robust web application that seamlessly connects verified professionals with those 
  //         who need their services.
  //       </p>
  //       <ul>
  //         <li><strong>CallMed: </strong> 
  //           This specialized platform enables users to locate, verify, and connect 
  //           with nearby medical practitioners, including doctors, nurses, and pharmacists. 
  //           Whether users need emergency assistance, online consultations, or appointment 
  //           scheduling, CallMed ensures they can access trusted healthcare professionals 
  //           quickly and efficiently.
  //         </li>
  //         <li><strong>CallMech: </strong> 
  //           This service connects users with nearby automobile technicians in real time. 
  //           Whether you’re facing a sudden breakdown or need routine maintenance, CallMech 
  //           provides profiles, locations, and availability of qualified mechanics to get you 
  //           back on the road quickly.
  //         </li>
  //       </ul>
  //       <p>
  //       As we expand CallPro, we will introduce additional professional services, 
  //       refining our platform based on user feedback and market acceptance.
  //       </p>
  //     </>
  //   ),
  //   projectLink: "#",
  // },
  // {
  //   key: '4',
  //   label: "VERSAPRO Services",
  //   projectLogoUrl: "../../images/VP_move_G.png",
  //   projectDescription: (
  //     <>
  //       <p>
  //           <strong>Tech-Enables Logistics & Recruitment Solutions: </strong> 
  //           We are developing technology-driven solutions to enhance logistics services 
  //           and streamline recruitment processes for a wide range of companies.
  //       </p>
        
  //     </>
  //   ),
  //   projectLink: "/verspro_services",
  // },
  // {
  //   key: '5',
  //   label: "VERSAPRO Tech",
  //   projectLogoUrl: "../images/VP_tech.jpg",
  //   projectDescription: (
  //     <>
  //       <p>
  //           <strong>Tech-Solution Consultancy: </strong> 
  //           Our consultancy division specializes in delivering tailored technology solutions that cater 
  //           to the distinct needs of both corporate clients and individuals. Leveraging our expertise 
  //           across diverse domains, we are dedicated to providing impactful and results-driven tech solutions.
  //       </p>
        
  //     </>
  //   ),
  //   projectLink: "/verspro_services",
  // },
];

const CustomHeader = ({ logoUrl, label }) => (
  <div className="custom-header">
    {logoUrl && <img src={logoUrl} alt={label} />}
    <span>{label}</span>
  </div>
);

const Project = () => (
  <Collapse
    accordion
    className="ant-collapse"
    items={projects.map(project => ({
      key: project.key,
      label: <CustomHeader logoUrl={project.projectLogoUrl} label={project.label} />,
      children: (
        <>
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
        </>
      ),
    }))} 
  />
);

export default Project;
