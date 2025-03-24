// import { CgAdd } from "react-icons/cg";
import React from "react";

const Case = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        className="case"
        style={{
          height: "90%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="head-case"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10",
            textAlign: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: " rgb(13 148 136)",
              fontWeight: "700",
              fontSize: "1.5rem",
            }}
          >
            CASE STUDIES
          </p>
          <h1>
            Latest{" "}
            <span style={{ color: " rgb(13 148 136)" }}>
              {" "}
              Showcase & Solutions
            </span>
            to
            <br></br> IT
            <span style={{ color: " rgb(13 148 136)" }}>Solutions</span>
          </h1>
        </div>
        <div className="img-container" style={{ width: "100%" }}>
          <div className="img-goal">
            <div
              className="wepb-img"
              style={{
                display: "flex",
                gap: "40px",
                justifyContent: "center",
                margin: "auto",
                width: "90%",
              }}
            >
              <div className="img-goal">
                <img
                  src="src/assets/1.webp"
                  alt=""
                  style={{ height: "550px", width: "420px" }}
                />
              </div>
              <div className="img-goal" style={{}}>
                <img
                  src="src/assets/2.webp"
                  alt=""
                  style={{
                    height: "550px",
                    width: "420px",
                  }}
                />
                {/* <div className="goo"> */}
                {/* <CgAdd /> */}
                {/* <h3>IT MANAGEMENT</h3> */}
                {/* </div> */}
              </div>
              <div className="img-goal">
                <img
                  src="src/assets/3.webp"
                  alt=""
                  style={{ height: "550px", width: "420px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
