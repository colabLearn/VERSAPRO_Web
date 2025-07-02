import React from 'react';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import '../components_css/team.css';

const team = [
  {
    image_url: "/images/tunji_2.jpg",
    name: 'Adetunji Adeniran',
    position: "Founder/Tech-Lead",
    bio: "Leading innovation and technical strategy with over 10 years of experience in software development. Specializes in cloud architecture, distributed systems, and enterprise software solutions. Has successfully led multiple high-impact projects and mentored numerous developers throughout his career.",
    expertise: [
      "Cloud Architecture",
      "Distributed Systems",
      "Enterprise Software",
      "Team Leadership"
    ],
    achievements: "Led the development of several successful enterprise solutions and established the company's technical roadmap.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:adetunji@versapro.com"
    }
  },
  {
    image_url: "/src/assets/adetunji.jpeg",
    name: 'Adediran Adeniran',
    position: "VPimSys Design-Lead",
    bio: "I am a Senior Financial Controller with over a decade of experience in finance, accounting, financial reporting, and process automation. My career has been defined by a strong commitment to leveraging technology to drive efficiency and accuracy in financial operations. As a tech-oriented finance professional, I specialize in integrating automation solutions to streamline workflows, enhance data integrity, and support strategic decision-making. I believe that the future of finance lies in intelligent automation, and I am passionate about bridging the gap between traditional financial practices and innovative digital tools.",
    expertise: [
      "System Architecture",
      "Design Patterns",
      "Enterprise Solutions",
      "UI/UX Design"
    ],
    achievements: "Architected the VPimSys platform from ground up, implementing industry-leading design practices.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:adediran@versapro.com"
    }
  },
  {
    image_url: "/src/assets/IMG_6307.jpeg",
    name: 'Anh Khoi',
    position: "Front-end Developer",
    bio: "Passionate front-end developer with expertise in modern web technologies and innovative solutions. Specializes in creating responsive, user-friendly interfaces using the latest front-end frameworks and best practices. Committed to delivering high-quality, performant web applications.",
    expertise: [
      "React.js",
      "Modern CSS",
      "UI/UX Implementation",
      "Web Performance"
    ],
    achievements: "Developed and maintained multiple key features of the company's web applications.",
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
              <div className="member-basic-info">
                <h3>{member.name}</h3>
                <span className="position">{member.position}</span>
              </div>
              <div className="member-details">
                <p className="bio">{member.bio}</p>
                <div className="expertise">
                  <h4>Areas of Expertise</h4>
                  <ul>
                    {member.expertise.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <p>{member.achievements}</p>
                </div>
              </div>
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
