import React, {useEffect} from 'react';
import {Layout, Breadcrumb, theme , Card, Carousel} from 'antd'
import './App.css'
const{Header, Content, Footer} = Layout;
const{Meta} = Card;

function App() {
  
  const {
    token: { colorBgContainer},
  } = theme.useToken();

  // Set CSS variables on component mount
  useEffect(() => {
    document.documentElement.style.setProperty('--color-bg-container', colorBgContainer);
      }, [colorBgContainer]);

return (
  
  <Layout className='container'>
  <header className="header">
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img className='logo'
      src="images/logo3.jpg"  // Replace with the path to your logo image
      alt="Company Logo" 
      />
    <Breadcrumb className='menu'>
      <Breadcrumb.Item><a href="/home">Home</a></Breadcrumb.Item>
      <Breadcrumb.Item><a href="/our-people">Our people</a></Breadcrumb.Item>
      <Breadcrumb.Item><a href="/our-projects">Our projects</a></Breadcrumb.Item>
    </Breadcrumb>
  </div>
</header>
   
   <Content className='content-container'>
   
    <div>
      <Card  className='home-card'
        title="Our Mission" 
        hoverable
       >
         <Carousel autoplay autoplaySpeed={30000} speed={1000}>
       <p className='mission-paragraph'>
        Leading the Revolution with Cutting-Edge Technology and Innovative Solutions for a Better Tomorrow.
        </p>
        <p className='mission-paragraph'>
        Empowering the next generation of tech leaders and bridging the digital divide by offering 
        widespread access to top-tier technology training for all.
        </p>
        </Carousel>
      </Card>
    </div>
    <div>
      This is another div
    </div>

    
  </Content>
  <Footer
        style={{
          textAlign: 'center',
        }}
      >
        VERSAPRO©{new Date().getFullYear()} Created by VERSAPRO TECH
      </Footer>
  </Layout>
 );
}

export default App;
