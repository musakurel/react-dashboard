import React from "react";
import "../index.css";
import { Layout, Menu, Card, Row, Col, Space, Button, Badge } from "antd";
const Statistics = () => {
  const CardStyle = {
    backgroundColor: "#283046",
    color: "white",
    border: "none",
    borderRadius: "5px",
    width: "100%",
   
  };
  return (
    <div>
      <Card style={{ ...CardStyle }}>
        <div className="space-align-container">
          <div className="space-align-block">
            <Space align="baseline">
              <Badge
                style={{
                  backgroundColor: "rgb(255,255,255,.12)",
                  border: "none!important",
                  boxShadow: "none",
                  color: "#b2c0c3",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "12px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                offset={[10, -30]}
                count={"img"}
              ></Badge>
              <span className="mock-block">
                {" "}
                <h2>999K</h2> <p className="sta-text">Lorem</p>{" "}
              </span>
            </Space>
          </div>
          <div className="space-align-block">
            <Space align="baseline">
              <Badge
                style={{
                  backgroundColor: "rgba(0,207,232,.12)",
                  border: "none!important",
                  boxShadow: "none",
                  color: "#00cfe8",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "12px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                offset={[10, -30]}
                count={"img"}
              ></Badge>
              <span className="mock-block">
                {" "}
                <h2>999K</h2> <p className="sta-text">Lorem</p>{" "}
              </span>
            </Space>
          </div>
          <div className="space-align-block">
            <Space align="baseline">
              <Badge
                style={{
                  backgroundColor: "rgba(234,84,85,.12)",
                  border: "none!important",
                  boxShadow: "none",
                  color: "#ea5455",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "12px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                offset={[10, -30]}
                count={"img"}
              ></Badge>
              <span className="mock-block">
                {" "}
                <h2>999K</h2> <p className="sta-text">Lorem</p>{" "}
              </span>
            </Space>
          </div>
          <div className="space-align-block">
            <Space align="baseline">
              <Badge
                style={{
                  backgroundColor: "rgba(40,199,111,.12)",
                  border: "none!important",
                  boxShadow: "none",
                  color: "#28c76f",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "12px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                offset={[10, -30]}
                count={"img"}
              ></Badge>
              <span className="mock-block">
                {" "}
                <h2>$999</h2> <p className="sta-text">Lorem</p>{" "}
              </span>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Statistics;
