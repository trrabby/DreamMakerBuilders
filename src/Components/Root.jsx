import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import '../App.css';
import { Helmet } from 'react-helmet-async';
import { Footer } from './Footer';

export const Root = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const theme = document.querySelector('html').getAttribute('data-theme');
  // console.log(theme);

  return (
    <div>
      {/* Particle */}
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: theme = "light" ? "#b3ffe6" : "#1a1a00",
            },
          },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: "#C5EC1A" },
            // {value:`${theme = "light" ? "#99ffcc" : "#4d4d00"}`},
            links: {
              color: "#4d4d00",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      }
      <div className='container mx-auto'>
        <Helmet>
          <title>Fiber Fution | Home</title>
        </Helmet>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>

  )
}
