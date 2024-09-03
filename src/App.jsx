import React, {useEffect} from 'react';
import {Layout, Breadcrumb, theme , Divider } from 'antd'
import './App.css'
import Home from './components/Home';
import Team from './components/Team';
import Project from './components/Project';
import Contact from './components/Contact'; // Import the new Contact component

const{Content, Footer} = Layout;


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
  
    <header id='home' className="header">
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className='logo'
            src="images/logo3.jpg"  // Replace with the path to your logo image
            alt="Company Logo" />
            <Breadcrumb
              className='menu'
              items={[
                { title: <a href="#home">Home</a> },
                { title: <a href="#team">Team</a> },
                { title: <a href="#project">Our projects</a> },
                { title: <a href="#contact">Contact Us</a> }
              ]}
            />
        </div>
      </header>
   
    <Content className='content-container'>
   
      <section id='home' className='home-card-container'>
        <Home />
      </section>

      <Divider className="custom-divider">
        <b>Our Projects</b>
      </Divider>
    <section id='project' className='project-div-container'>
     <Project /> 
    </section>
      <Divider className="custom-divider">
          <b>Our Team</b>
      </Divider>
      <section id='team' className='profile-div-container'>
            <Team />
      </section>
      
    <Divider className="custom-divider">
          <b>Contact Us</b>
        </Divider>
        <section id='contact' className='contact-div-container'>
          <Contact />
        </section>
    </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}>
        VERSAPRO TECH©{new Date().getFullYear()} 
      </Footer>
  </Layout>
 );
}

export default App;


