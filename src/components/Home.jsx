import React from 'react';
import { Card, Carousel } from 'antd';
import '../App.css';

const Home = () => (
  <Card className='home-card' title="Our Mission" hoverable>
    <Carousel autoplay autoplaySpeed={30000} speed={1000}>
      <div>
        <p className='mission-paragraph'>
          Leading the Revolution with Cutting-Edge Technology and Innovative Solutions for a Better Tomorrow.
        </p>
      </div>
      <div>
        <p className='mission-paragraph'>
          Empowering the next generation of tech leaders and bridging the digital divide by offering 
          widespread access to top-tier technology training for all.
        </p>
      </div>
    </Carousel>
  </Card>
);

export default Home;
