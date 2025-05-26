import React from 'react';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import '../components_css/team.css';

const team = [
  {
    image_url: "/images/tunji_2.jpg",
    name: 'Adetunji Adeniran.',
    position: "Founder/Tech-Lead",
    bio: "Leading innovation and technical strategy with over 10 years of experience in software development.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:adetunji@versapro.com"
    }
  },
  {
    image_url: "/images/diran.jpg",
    name: 'Adediran Adeniran',
    position: "VPimSys Design-Lead",
    bio: "Expert in system design and architecture, specializing in scalable enterprise solutions.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:adediran@versapro.com"
    }
  },
  {
    image_url: "/images/IMG_5795.png",
    name: 'Anh Khoi',
    position: "Front-end Developer",
    bio: "Passionate front-end developer with expertise in modern web technologies and innovative solutions.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:anhkhoi@versapro.com"
    }
  }
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>Dedicated professionals working together to bring innovation to life</p>
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="member-image">
              <img src={member.image_url} alt={member.name} />
              <div className="social-links">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
                <a href={member.social.email}>
                  <MailOutlined />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <span className="position">{member.position}</span>
              <p className="bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team-cta">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented individuals to join our growing team</p>
        <a href="/careers" className="cta-button">View Open Positions</a>
      </div>
    </div>
  );
};

export default Team;
