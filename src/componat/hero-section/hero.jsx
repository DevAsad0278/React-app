import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="heepoi">
      <div className="hero">
        <div className="hero-content">
          <div className="it">
            <h1>
              Creating a Better
              <br></br>
              <span>IT Solutions.</span>
            </h1>
          </div>
          <div className="pra">
            <p>
              Transform your ideas into reality with Heapware. From startups to
              large enterprises, we've got you covered.
            </p>
          </div>
          <div className="hero-btn">
            <button>Get a free consultant call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
