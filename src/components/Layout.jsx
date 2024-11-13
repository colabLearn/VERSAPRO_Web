import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'antd'
import '../components_css/Layout.css';
const Header = () => (
    <header className='header'>
         <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='header' >
          <img className='logo'
            src="images/logo3.jpg"  // Replace with the path to your logo image
            alt="Company Logo" />
            <Breadcrumb
              className='menu'
              items={[
                { title: <a href="/">Home</a> },
                { title: <a href="/team">Our Team</a> },
                { title: <a href="/project">Our projects</a> },
                { title: <a href="/contact">Contact Us</a> },
                { title: <a href="/partners">Our Partners</a> }
              ]}
            />
        </div>
</header>
);

const Footer = () => (
    <footer className="footer">
        <p>VERSAPRO©2024</p>
    </footer>
);

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// PropTypes validation
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is required
};

export default Layout;
