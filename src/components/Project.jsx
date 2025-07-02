import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import '../components_css/project.css';

const projects = [
  {
    id: '1',
    title: "ColabLearn",
    logo: "/images/colabLearnLogo.jpg",
    description: "An innovative e-learning platform dedicated to delivering cutting-edge tech courses and programs. Our ongoing work leverages the latest research in learning science and engineering to create content that fosters deep understanding and knowledge creation.",
    features: [
      "Advanced Learning Management System",
      "Interactive Course Content",
      "AI-Powered Learning Analytics",
      "Collaborative Learning Tools"
    ],
    link: "https://www.youtube.com/@ColabLearn",
    status: "Active Development"
  },
  {
    id: '2',
    title: "VPimSys",
    logo: "/images/VPimSys_Logo.jpg",
    description: "A cloud-based platform designed to revolutionize how small retail businesses manage their operations. VPimSys provides an affordable, easy-to-use, and scalable solution for managing product catalogs, purchase orders, inventory, and analytics.",
    features: [
      "Real-time Inventory Management",
      "Sales Analytics Dashboard",
      "Cloud-based POS System",
      "Automated Purchase Orders"
    ],
    link: "#",
    status: "Beta Testing"
  },
  {
    id: '3',
    title: "EdTech",
    logo: "/images/edutech-logo.png",
    description: "A comprehensive educational technology platform designed to bridge the digital divide in education. This project focuses on creating accessible, engaging, and effective learning experiences for students of all ages and backgrounds, leveraging cutting-edge technology to transform traditional education methods.",
    features: [
      "Personalized Learning Paths",
      "Virtual Reality Learning Environments",
      "Real-time Student Progress Tracking",
      "Interactive STEM Modules",
      "Teacher Collaboration Tools",
      "Mobile-First Learning Experience"
    ],
    link: "#",
    status: "Planning Phase"
  }
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
              <p className="project-description">{project.description}</p>

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
