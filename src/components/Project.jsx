import React  from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../components_css/project.css';

const ProjectPhases = Object.freeze({
  PLANNING: "Planning / Concept",
  DEVELOPMENT: "Active Development",
  BETA: "Beta Testing",
  LIVE: "Live",
  MAINTENANCE: "Maintenance Mode",
  ARCHIVED: "Archived"
});
 
const projects = [
  {
    id: '1',
    title: "MathMorph",
    logo: "/images/mathmorph2.png",
    description: "MathMorph is our  flagship AI-powered math learning platform, designed to revolutionize how students learn and master math topics."+
                 " This project focuses on creating accessible, engaging, and effective learning experiences for students of "+
                 "all ages and backgrounds, leveraging cutting-edge technology to transform traditional education methods." +
                 "Students learn at their pace while the AI tracks progress, provides instant feedback, and continuously adapts to their needs. "+
                 "Tutors and parents get real-time insights, effort tracking, and actionable recommendations—all in one dashboard.",
    features: [
      "Personalized Learning Paths",
      "Real-time Student Progress Tracking",
      "Simplified Tutor Assignment Workflow",
      "Real-Time Assessment & Smart Feedback"
    ],
    link: "#",
    status: ProjectPhases.DEVELOPMENT
  },
  {
    id: '2',
    title: "ColabLearn",
    logo: "/images/vp_logo.png",
    description: "An innovative e-learning platform dedicated to delivering cutting-edge tech courses and programs. Our ongoing work leverages the latest research in learning science and engineering to create content that fosters deep understanding and knowledge creation.",
    features: [
      "Advanced Learning Management System",
      "Interactive Course Content",
      "AI-Powered Learning Analytics",
      "Collaborative Learning Tools"
    ],
    link: "https://www.youtube.com/@ColabLearn",
    status: ProjectPhases.BETA
   }//,
  // {
  //   id: '3',
  //   title: "VPimSys",
  //   logo: "/images/VPimSys_Logo.jpg",
  //   description: "A cloud-based platform designed to revolutionize how small retail businesses manage their operations. VPimSys provides an affordable, easy-to-use, and scalable solution for managing product catalogs, purchase orders, inventory, and analytics.",
  //   features: [
  //     "Real-time Inventory Management",
  //     "Sales Analytics Dashboard",
  //     "Cloud-based POS System",
  //     "Automated Purchase Orders"
  //   ],
  //   link: "#",
  //   status: ProjectPhases.PLANNING
  // }
  
];

const Project = () => {
    return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Innovative solutions that drive digital transformation and business growth</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <img src={project.logo} alt={project.title} className="project-logo" />
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              {/* <p 
                  className={`project-description ${expandedProjects[project.id] ? 'expanded' : '' }`}
                  onClick={() => toggleExpand(project.id)}
                  style={{cursor: 'pointer', position: 'relative'}}
                  title={expandedProjects[project.id] ? "Click to view less" : "Click to view more"} 
                  >
                  {project.description}</p> */}
                  <p className="project-description">
                      {project.description}
                  </p>

              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Button 
                type="primary" 
                href={project.link}
                target="_blank"
                className="project-link"
                icon={<ArrowRightOutlined />}
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <h2>Have a Project in Mind?</h2>
        <p>Let's work together to bring your ideas to life</p>
        <Button type="primary" href="/contact" size="large">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Project;
