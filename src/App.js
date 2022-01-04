import "./App.css";
import React, { useState } from "react";

import "antd/dist/antd.css";
import "./index.css";
import { Layout, Card, Row, Col } from "antd";


import Sidebar from "./components/Sidebar";
import Desc from "./components/Desc";
import Topbar from "./components/Topbar";
import Statistics from "./components/Statistics";
const {  Content } = Layout;


// CART STYLE
const CardStyle = {
  backgroundColor: "#283046",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

function App() {

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" style={{ backgroundColor: "#161d31" }}>
          <Content style={{ margin: "0 16px", backgroundColor: "none" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Row gutter={[32, 45]} style={{ backgroundColor: "none", marginBottom: "32px"}}>
                <Col span={24}>
                  <Topbar />
                </Col>
                <Col xs={24} md={12} xl={8} span={8}>
                  <Desc />
                </Col>

                <Col xs={24} md={12}  xl={16} span={16}>
                  <Statistics />
                </Col>
              </Row>

              <Row gutter={[32, 32]} >
               
                <Col
                  xs={24}
                  xl={8}
                  md={24}
                  span={8}
                  className="menumenumenu"
                  style={{ display: "flex", flexDirection: "column"}}
                >
                  <Row>
                    <Col span={24} md={12} xs={24}
                  xl={24} style={{ display: "flex"}} >
                  <Card
                    style={{
                      ...CardStyle,
                      width: "45%",
                      marginBottom: "32px",
                      height: "15vh",
                    }}
                  />
                  <Card
                    style={{
                      ...CardStyle,
                      width: "45%",
                      marginLeft: "32px",
                      marginBottom: "32px",
                      height: "15vh",
                    }}
                  />
                  </Col>
                  </Row>
                  <Row>
                  <Col md={12} xs={24}
                  xl={24} span={24}>
                  <Card
                    style={{ ...CardStyle, width: "100% ", height: "15vh" }}
                    />
                    </Col>
                    </Row>
                </Col>

                <Col  xs={24} xl={16} span={16}>
                  <Card
                    style={{
                      ...CardStyle,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <span>I am text centered</span>
                  </Card>
                </Col>
              </Row>
              <Row gutter={[32,32]} style={{ justifyContent: "space-around", marginTop:"32px"}}>
                <Col md={12} xs={24} lg={12} span={12}>
                  <Card
                    style={{ ...CardStyle, width: "100%", height: "25vh" }}
                  />
                </Col>

                <Col md={12} xs={24} lg={12} span={12}>
                  <Card
                    style={{
                      ...CardStyle,
                      marginLeft: "auto",
                      width: "100% ",
                      height: "25vh",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
