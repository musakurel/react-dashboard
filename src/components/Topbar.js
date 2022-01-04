import React, { useState } from "react";
import {
  Layout,
  Menu,
  Badge,
  Popover,
  
  Button,
  
  Row,
  Col,
  
} from "antd";
import { Icon } from "@iconify/react";
import CartContent from "./CartContent";
const { SubMenu, Group } = Menu;
const ButtonGroup = Button.Group;

const { Header } = Layout;


const content = CartContent;
const Topbar = () => {
  return (
    <div>
      <Header
        style={{
          padding: 0,
          backgroundColor: "#283046 !important",
          borderRadius: "5px",
          alignItems: "center",
        }}
      >
        <Menu style={{ backgroundColor: "#283046" }} mode="horizontal">
       
<Row>
          <Col span={12} xs={0} lg={8}>
           <Menu.ItemGroup
            className="menumenu"
            xs={0}
            sm={0}
            style={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <Menu.Item
              key="calendar"
              icon={<Icon icon="feather-calendar" height={20} />}
            />
            <Menu.Item
              key="chat"
              icon={<Icon icon="feather-message-square" height={20} />}
            ></Menu.Item>
            <Menu.Item
              key="mail"
              icon={<Icon icon="feather-mail" height={20} />}
            ></Menu.Item>
            <Menu.Item
              key="todo"
              icon={<Icon icon="feather-check-square" height={20} />}
            ></Menu.Item>

            <Menu.Item
              key="star"
              style={{ float: "left" }}
              icon={
                <Icon
                  style={{ color: "#ff9f43" }}
                  icon="feather-star"
                  height={20}
                />
              }
            ></Menu.Item>
          </Menu.ItemGroup>
          </Col>
          
          <Col style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "20px",
              alignItems: "center",
            }} span={12} xs={24} lg={12}>
          <Menu.ItemGroup
            className="menumenu"
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "20px",
              alignItems: "center",
            }}
          >
            <Menu.Item
              style={{}}
              key="search"
              icon={<Icon icon="feather-search" height={20} />}
            ></Menu.Item>

            <CartContent />
            <Menu.Item
              key="notification"
              icon={<Icon icon="feather-bell" height={20} />}
            ></Menu.Item>

            <Menu.Item className="user-area" key="user">
              <ul>
                <li
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "0px",
                    marginBottom: "0px",
                    padding: "0px",
                  }}
                >
                  Musa Kurel
                </li>
                <li
                  style={{
                    opacity: "0.6",
                    float: "right",
                    fontSize: "12px",
                    marginTop: "-40px",
                    marginBottom: "0px",
                    padding: "0px",
                  }}
                >
                  admin
                </li>
              </ul>
            </Menu.Item>
          </Menu.ItemGroup>
          </Col>
          </Row>
        </Menu>
      </Header>
    </div>
  );
};

export default Topbar;
