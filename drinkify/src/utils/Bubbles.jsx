import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";

export default function Bubbles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 40,
          density: { enable: true, area: 800 },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: { min: 2, max: 6 },
        },
        move: {
          enable: true,
          direction: "top",
          speed: 1,
          straight: true,
          outModes: {
            default: "out",
          },
        },
        fpsLimit: 45,
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return <></>;
};
