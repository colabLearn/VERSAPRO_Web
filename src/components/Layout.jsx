import PropTypes from "prop-types";
import "../components_css/Layout.css";
import Navbar from "./common/navbar";
import Footer from "./common/footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
