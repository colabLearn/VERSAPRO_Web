import  {useState, useEffect} from 'react';
import {Layout, Divider, Card, Carousel} from 'antd'
import './App.css'
const{Header, Content, Footer} = Layout;
const{Meta} = Card;
const imageData = [
 {src: "/images/scroll/youtube1.jpeg", link: "https://www.youtube.com/playlist?list=PLEUY2ff5QBtsiPYjinLLY_lpUOFwUiljK"},
 {src: "/images/scroll/youtube2.jpeg", link: "https://www.youtube.com/playlist?list=PLEUY2ff5QBtv1pN-7Bb05Rn04U1n_1bon"}
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Change image every 10 seconds
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        setFade(true); // Start fading in
      }, 500); // Match this with your fade-out duration
    }, 10000); // Change image every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const currentImage = imageData[currentIndex];
return (
  
  <Layout className='container'>
    <Header>
    
    </Header>
    <Divider className='custom-divider'>
    <center><h1 className='page-title'>VERSAPRO Limited</h1></center>
    </Divider>
    
  <Content>
  <div className="card-container">
      <Card
      title={<a className={`caption ${fade ? 'fade-in' : 'fade-out'}`}
      href = {currentImage.link}
      target='_blank'
      rel='noopener noreferrer'>Tutorial@ColabLearn</a>}
        hoverable
        style={{
          width: 300,
          overflow: 'hidden', // Hide overflowed content
        }}
        cover={<img alt="example" src={currentImage.src} 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out',
          opacity: fade ? 1 : 0,
        }}
         />}
      >
     </Card>
      <Card 
        title="Our Mission" 
        hoverable
        style={{ 
          width: 700, 
        }}
      >
         <Carousel autoplay autoplaySpeed={30000} speed={1000}>
       <p className='mission-paragraph'><b>VERSAPRO Limited</b> —Where Technology Meets Innovation and Education. 
        In a world where technology is reshaping the way we live and work, 
        VERSAPRO is pushing to the forefront of this revolution. We harness 
        cutting-edge advancements to create solutions that not only keep pace 
        with change but drive it. Whether you are navigating the complexities of 
        modern business or seeking to enhance everyday life, our innovative technologies 
        are designed to meet the diverse needs of today’s users, unlocking new opportunities 
        and delivering real value.
        </p>
        <p className='mission-paragraph'>
          In addition to our technological solutions, we are committed to empowering the 
          next generation of tech leaders through our online learning platform. Offering 
          courses in programming and other essential tech skills, we aim to bridge the digital 
          divide by making high-quality education accessible to everyone, regardless of their 
          location or financial resources. Discover how VERSAPRO Limited is not only powering the 
          future with technology but also educating the innovators of tomorrow.
        </p>
        </Carousel>
      </Card>
    </div>

      <p> This is my page... </p>
      <Divider/>
    
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
