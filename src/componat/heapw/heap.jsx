import React from "react";
import Prog from "./prog/prog";
import "./heapw.css";

const Heap = () => {
  return (
    <div className="heep">
      <div className="iioi">
        <div className="heap">
          <div className="wel">
            <div className="wel-o">
              <h4>Welcome to Heapware</h4>
            </div>
            <div className="hapo">
              <h1>
                Let Us Be Your
                <br></br>
                <span>IT Partner</span>
              </h1>
            </div>
            <div className="heap-p">
              <p>
                At Heapware, we provide comprehensive IT solutions tailored to
                your business needs. From cloud management to software
                development, our team of experts is dedicated to ensuring your
                systems run smoothly, securely, and efficiently.
              </p>
            </div>
          </div>
          <div className="pro">
            <Prog />
          </div>
        </div>
        <div className="counter">
          <div className="img-cntent">
            <div className="counters">
              <h1>8+</h1>
              <p>Years of Experience</p>
            </div>
            <div className="counters">
              <h1>100k</h1>
              <p>Projects Completed</p>
            </div>
          </div>
          <img src="src/assets/team-collab.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Heap;
