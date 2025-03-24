import React from "react";

const Max = () => {
  return (
    <div style={{ height: "70vh" }}>
      <div
        className="max"
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          padding: "60px",
          alignItems: "center",
          height: "100%",
          gap: "100px",
        }}
      >
        <div
          className="max-img"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            width: "50%",
          }}
        >
          <div className="imgt">
            <img
              src="src/assets/company.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
          <div className="imgt">
            <img
              src="src/assets/max.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
          <div className="imgt">
            <img
              src="src/assets/zylo.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
          <div className="imgt">
            <img
              src="src/assets/zety.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
          <div className="imgt">
            <img
              src="src/assets/instagram.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
          <div className="imgt">
            <img
              src="src/assets/microsoft.webp"
              alt=""
              style={{ height: "100px", width: "160px" }}
            />
          </div>
        </div>
        <div className="max-content">
          <div
            className="max-co"
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <h1 style={{ width: "89%", fontSize: "3.5rem" }}>
              Trusted By
              <span style={{ color: " rgb(13 148 136)" }}>1,790+</span> World's
              Leading
              <br></br>
              <span style={{ color: " rgb(13 148 136)" }}>IT Companies.</span>
            </h1>
            <p>
              Consectetur adipiscing elit. Maecenas quis faucibus ligula.
              Maecenas a purus massa. Ut elementum sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Max;
