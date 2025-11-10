import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import bg1 from "../assets/hero.jpg";


// Lazy load components
const About = lazy(() => import("./about"));
const Mission = lazy(() => import("./mission"));
const Hero = lazy(() => import("./hero"));
const Hero2 = lazy(() => import("./hero2"));
const Hero3 = lazy(() => import("./hero3"));
const Hero4 = lazy(() => import("./hero4"));
const Navbar = lazy(() => import("../components/common/navbar"));
const Showcase = lazy(() => import("./common/showcase"));
const Teams = lazy(() => import("./teams"));

const Home = () => {
  const slides = useMemo(
    () => [
      { bg: bg1, Component: Hero },
      { bg: bg1, Component: Hero2 },
      { bg: bg1, Component: Hero3 },
      { bg: bg1, Component: Hero4 }
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const SlideComponent = slides[current].Component;
  return (
    <div className="">
      <div
        style={{
          background: `url(${slides[current].bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="bg-black/70">
          <Suspense fallback={<div />}> 
            <Navbar />
          </Suspense>
          {/* Left Arrow */}
          <button
            aria-label="Previous slide"
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-10"
          >
            <LeftOutlined className="text-lg" />
          </button>
          {/* Right Arrow */}
          <button
            aria-label="Next slide"
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-10"
          >
            <RightOutlined className="text-lg" />
          </button>
          <Suspense fallback={<div />}> 
            <SlideComponent />
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
