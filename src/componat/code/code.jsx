import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import React from "react";

const Code = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="code"
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div className="code-c0n">
          <h1 style={{ fontSize: "4rem" }}>
            We Are{" "}
            <span style={{ color: "rgb(13 148 136)" }}>
              Perfect IT
              <br></br> Solutions
            </span>
            <br></br>
            For <span style={{ color: "rgb(13 148 136)" }}>Your Business</span>
          </h1>
          <p>
            Empower your business with advanced IT solutions tailored to meet
            the specific needs of your enterprise. We provide cutting-edge
            technology services that drive efficiency and innovation.
          </p>
          <div className="ok">
            <p>
              {" "}
              <span style={{ color: "rgb(13 148 136)" }}>
                <TiTick />
              </span>
              Comprehensive IT Infrastructure Managemen
            </p>
            <p>
              {" "}
              <span style={{ color: "rgb(13 148 136)" }}>
                <TiTick />
              </span>
              Tailored Cybersecurity Solutions
            </p>
            <p>
              {" "}
              <span style={{ color: "rgb(13 148 136)" }}>
                <TiTick />
              </span>
              Cloud Computing & Data Migration Services
            </p>
            <p>
              {" "}
              <span style={{ color: "rgb(13 148 136)" }}>
                <TiTick />
              </span>
              24/7 IT Support & Consulting Services
            </p>
          </div>
        </div>
        <div
          className="code-link"
          style={{
            display: "flex",
            listStyle: "none",
            textDecorationStyle: "none",
            gap: "20px",
            color: "black",
            width: "50%",
          }}
        >
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 20px",
                border: "1px solid black",
                borderRadius: "30px",
              }}
              href=""
            >
              Coding
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 20px",
                border: "1px solid black",
                borderRadius: "30px",
              }}
              href=""
            >
              JavaScript
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 20px",
                border: "1px solid black",
                borderRadius: "30px",
              }}
              href=""
            >
              Podcasts
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                padding: "10px 20px",
                border: "1px solid black",
                borderRadius: "30px",
              }}
              href=""
            >
              Databases
            </a>
          </li>
          <i>
            <FaArrowRight
              style={{ color: "rgb(13 148 136)", fontSize: "30px" }}
            />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Code;
