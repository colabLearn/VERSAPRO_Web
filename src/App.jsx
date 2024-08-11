import * as React from 'react';
import {Layout, Divider, Card} from 'antd'
const{Header, Content, Footer} = Layout;
const{Meta} = Card;


function App() {
return (
  <Layout>
    <Header>
    <center><h1>VERSPRO Limited</h1></center>
    </Header>
    
  <Content>
     <div>
      <br/>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="../public/images//MD_CEO.jpg" />}
  >
    <Meta title="MD/CEO" description="VERSAPRO Limited" />
  </Card>
      <p> This is my page... </p>
      <Divider/>
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
