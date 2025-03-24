import React from "react";

const Goal = () => {
  return (
    <div style={{ height: "60vh" }}>
      <div
        className="goal"
        style={{
          display: "flex",
          gap: "40px",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          className="goal-cont"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <p style={{ color: " rgb(13 148 136)", fontSize: "25px" }}>
            Why Choose Us?
          </p>
          <h1 style={{ fontSize: "3rem", width: "68%", fontWeight: "600" }}>
            Our Goal is
            <br></br>
            <span style={{ color: " rgb(13 148 136)" }}>
              Delivering Excellence in IT Services.
            </span>
          </h1>
          <p style={{ width: "80%" }}>
            Our team of experts is committed to providing top-notch IT
            solutions, including database management, performance optimization,
            and customized software development. We focus on ensuring
            scalability, security, and efficiency to support your business
            growth.
          </p>
        </div>
        <div className="goal-img" style={{ display: "flex", gap: "20px" }}>
          <div
            className="gaol-img"
            style={{
              height: "170px",
              width: "350px",
              boxShadow: "0px 0px 5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="src/assets/database.webp" alt="" />
          </div>
          <div
            className="gaol-img"
            style={{
              height: "170px",
              width: "350px",
              boxShadow: "0px 0px 5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="src/assets/performance.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
