import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // loads tsparticles package bundle
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // keeps it behind all content
        },
        background: {
          color: {
            value: "#0b0f17", // deep tech blue-black background
          },
        },
        fpsLimit: 120,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#00aaff", // bright tech cyan
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
            random: false,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00aaff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            attract: {
              enable: false,
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
