import React, {useEffect} from 'react';
import {Layout, Breadcrumb, theme , Card, Carousel, Divider} from 'antd'
import './App.css'
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className='logo'
            src="images/logo3.jpg"  // Replace with the path to your logo image
            alt="Company Logo" />
          <Breadcrumb className='menu'>
            <Breadcrumb.Item><a href="#home">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="#team">Team</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="#project">Our projects</a></Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </header>
   
    <Content className='content-container'>
   
      <section id='home' className='home-card-container'>
        <Card  className='home-card'
              title="Our Mission" 
              hoverable>
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
      </section>

  <Divider className="custom-divider">
    <b>Our Team</b>
  </Divider>
    <section id='team' className='profile-div-container'>
      <table className='team-members'>
        <tr>
          <td>
            <Card id='profile-card' hoverable>
              <div className='profile-div'>
                <img className='profile-img' src="/images/MD_CEO.jpg" alt='Adetunji Adeniran' />
                  <p className='profile-text'>
                    <a 
                      href="/Tunji-profile-page" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                      Adetunji Adeniran
                    </a>
                    <br />
                    Team/Tech Lead.
                  </p>
              </div>
            </Card>
          </td>
          <td>
          <Card  hoverable>
              <div className='profile-div'>
                <img className='profile-img' src="/images/diran.jpg" alt='Diran Adeniran' />
                  <p className='profile-text'>
                    <a 
                      href="/diran-profile-page" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      >
                      Diran Adeniran
                    </a>
                  <br />
                    Operation Lead.
                  </p>
              </div>
            </Card>
          </td>
        </tr>
      </table>
    </section>
    <Divider className="custom-divider">
    <b>Our Projects</b>
  </Divider>
    <section id='project' className='project-div-container'>
      Project container
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