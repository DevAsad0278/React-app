import React from "react";
import "./it.css";
import Iard from "./card";

const It = () => {
  return (
    <div>
      <div className="it">
        <div className="it-comt">
          <h4>OUR EXPERTISE</h4>
          <h1>
            Comprehensive <span>IT Solutions</span>
          </h1>
          <p>
            We offer a wide range of services to meet all your IT needs. Explore
            our comprehensive solutions designed to help your business thrive in
            the digital age.
          </p>
        </div>
      </div>
      <div className="ii">
        <Iard></Iard>
      </div>
    </div>
  );
};

export default It;
