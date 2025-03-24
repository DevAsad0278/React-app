import { HiUserPlus } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloud } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Card } from "react-bootstrap";

const Iard = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          padding: "20px",
        }}
      >
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <IoCodeSlashOutline />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>
              Web Development
            </Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <IoIosCloud />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>
              Mobile App Development
            </Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <IoIosApps />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>
              SAAS Development
            </Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <HiUserPlus />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>
              ERP System Development
            </Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <FaCartShopping />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>SEO Services</Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "24rem",
            // border: "0.3px solid rgb(13 148 136)",
            // boxShadow: "0px 0px 5px",
          }}
        >
          <i
            className="i2"
            style={{
              fontSize: "60px",
              padding: "10px",
              color: "rgb(13 148 136)",
            }}
          >
            <FaFacebook />
          </i>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>
              Digital Marketing
            </Card.Title>
            <Card.Text>
              Crafting high-impact websites tailored to your brand’s needs. Our
              team specializes in user-friendly interfaces and scalable
              solutions that drive engagement and enhance user experience.
            </Card.Text>
            <i
              style={{
                fontSize: "45px",
                float: "right",
                color: "rgb(13 148 136)",
              }}
            >
              <FaArrowRight />
            </i>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Iard;
