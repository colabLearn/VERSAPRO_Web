import { lazy, Suspense } from "react";
import bg from "../assets/hero.jpg";

// Lazy load components
const About = lazy(() => import("./about"));
const Mission = lazy(() => import("./mission"));
const Hero = lazy(() => import("./hero"));
const Navbar = lazy(() => import("../components/common/navbar"));
const Showcase = lazy(() => import("./common/showcase"));
const Teams = lazy(() => import("./teams"));

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
          <Suspense fallback={<div />}> 
            <Navbar />
          </Suspense>
          <Suspense fallback={<div />}> 
            <Hero />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<div />}> 
        <About />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Mission />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Showcase />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Teams />
      </Suspense>
    </div>
  );
};

export default Home;
