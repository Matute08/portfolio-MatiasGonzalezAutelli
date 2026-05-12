"use client"
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && 
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={{
            fpsLimit: 60,
            interactivity: {
                events: {
              onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#7C3AED",
        },
        links: {
            color: "#3B82F6",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 40,
        },
            opacity: {
              value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
    />
    </div>
  );
};

export default CoverParticles;
