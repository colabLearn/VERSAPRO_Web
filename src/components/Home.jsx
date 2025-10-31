import About from "./about";
import Mission from "./mission";
import Hero from "./hero";
import Navbar from "../components/common/navbar";
import bg from "../assets/hero.jpg";
import Showcase from "./common/showcase";
import Teams from "./teams";

const Home = () => {
  return (
    <div className="">
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black/70">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Mission />
      <Showcase />
      <Teams />
    </div>
  );
};

export default Home;
