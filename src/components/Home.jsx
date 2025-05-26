import React from 'react';
import { Button } from 'antd';
import { RocketOutlined, TeamOutlined, BulbOutlined } from '@ant-design/icons';
import '../components_css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Leading the Revolution with Cutting-Edge Technology</h1>
          <p>Empowering the next generation of tech leaders and bridging the digital divide</p>
          <div className="hero-buttons">
            <Button type="primary" size="large" icon={<RocketOutlined />}>
              Get Started
            </Button>
            <Button size="large">Learn More</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/src/assets/chatGPTImage.png" alt="ChatGPT Technology" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <RocketOutlined className="feature-icon" />
          <h3>Innovation First</h3>
          <p>Cutting-edge solutions for tomorrow's challenges</p>
        </div>
        <div className="feature-card">
          <TeamOutlined className="feature-icon" />
          <h3>Expert Team</h3>
          <p>Dedicated professionals with proven expertise</p>
        </div>
        <div className="feature-card">
          <BulbOutlined className="feature-icon" />
          <h3>Smart Solutions</h3>
          <p>Intelligent approaches to complex problems</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <p>Leading the Revolution with Cutting-Edge Technology and Innovative Solutions for a Better Tomorrow.</p>
            </div>
            <div className="mission-card">
              <p>Empowering the next generation of tech leaders and bridging the digital divide by offering widespread access to top-tier technology training for all.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
