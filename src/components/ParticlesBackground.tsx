"use client"; 

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // ✅ Correct Import

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    if (typeof loadSlim === "function") {
      await loadSlim(engine); // ✅ Load only if function exists
    } else {
      console.error("loadSlim is not available");
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, 
        background: { color: "gray" },
        particles: {
          number: { value: 50, density: { enable: true, area: 600 } },
          color: { value: "#ffffff" },
          shape: { type: "star" },
          opacity: { value: 1, random: true },
          size: { value: 1, random: true },
          move: { enable: true, speed: 1, direction: "none", random: false },
        },
      }}
      className=" z-0 top-0 left-0 w-full h-[400px]"
    />
  );
}
