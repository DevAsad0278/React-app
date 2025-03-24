import React from "react";

const Main = () => {
  return (
    <div style={{ height: "50vh" }}>
      <div
        className="maan"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          className="main"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div className="main-con">
            <h1 style={{ fontSize: "4rem" }}>
              <span style={{ color: " rgb(13 148 136)" }}>Mission</span> is to{" "}
              <span style={{ color: " rgb(13 148 136)" }}>Protect </span>Your{" "}
              <br></br>
              Businesses & Much More
            </h1>
          </div>
          <div className="main-btn">
            <button
              style={{
                padding: "12px 25px",
                border: "2px solid rgb(13 148 136)",
                borderRadius: "5px",
                fontSize: "20px",
              }}
            >
              Discover More
            </button>
          </div>
        </div>
        <div className="img-maan">
          <img src="src/assets/p1.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
