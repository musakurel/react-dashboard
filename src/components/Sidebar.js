import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Card, Row, Badge, Col } from "antd";
import "../index.css";
import { Icon, InlineIcon } from "@iconify/react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const menuClick = () => {
  this.style.backgroundColor = "#161d31 !important";
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ backgroundColor: "#283046", }}>
      <Sider
        style={{ backgroundColor: "#283046", color: "white"  }}
        breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          style={{
            backgroundColor: "#283046",
            color: "#d0d2d6",
            border: "none",
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <SubMenu
            icon={<Icon icon="feather-home" height={20} />}
            expandIcon={
              <Badge
                style={{
                  backgroundColor: "rgba(255,159,67,.12)",
                  border: "none!important",
                  boxShadow: "none",
                  color: "#ff9f43",
                  fontWeight:"bold"
                }}
                offset={[-30, 8]}
                count={2}
              >
                <Icon
                  style={{ color: "#d0d2d6" }}
                  icon="ep:arrow-down-bold"
                  height={11}
                />
              </Badge>
            }
            key="sub2"
            title="Home"
            onClick={() => {
              menuClick();
            }}
          >
            <Menu.Item key="16">Team 1</Menu.Item>
            <Menu.Item key="18">Team 2</Menu.Item>
          </SubMenu>
          <Menu.ItemGroup className="menu-heading" title={
    <>
      <span className="category-name">CATEGORY 1</span>
    </>
  }>
            <Menu.Item icon={<Icon icon="feather-mail" height={20} />} key="1">
              Email
            </Menu.Item>
            <Menu.Item
              icon={<Icon icon="feather-message-square" height={20} />}
              key="2"
            >
              Chat
            </Menu.Item>
            <Menu.Item
              icon={<Icon icon="feather-check-square" height={20} />}
              key="3"
            >
              Todo
            </Menu.Item>
            <Menu.Item
              icon={<Icon icon="feather-calendar" height={20} />}
              key="4"
            >
              Calendar
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<Icon icon="feather-shopping-cart" height={20} />}
              expandIcon={<Icon
                style={{ color: "#d0d2d6" }}
                icon="ep:arrow-down-bold"
                height={11}
              />}
              title="User"
            >
              <Menu.Item key="5">Element1</Menu.Item>
              <Menu.Item key="6">Element2</Menu.Item>
              <Menu.Item key="7">Element3</Menu.Item>
            </SubMenu>
          </Menu.ItemGroup>
          <Menu.ItemGroup title={
    <>
      <span className="category-name">CATEGORY 2</span>
    </>
  }>
            <Menu.Item icon={<Icon icon="feather-type" height={20} />} key="8">
              Typography
            </Menu.Item>
            <Menu.Item icon={<Icon icon="feather-eye" height={20} />} key="9">
              Feather
            </Menu.Item>
            <SubMenu
              icon={<Icon icon="feather-credit-card" height={20} />}
              key="sub3"
              expandIcon={
                <Badge
                  style={{
                    backgroundColor: "rgba(40,199,111,.12)",
                    border: "none!important",
                    boxShadow: "none",
                    color: "#28c76f",
                    fontWeight:"bold"
                  }}
                  offset={[-40, 8]}
                  count={"new"}
                >
                  <Icon
                    style={{ color: "#d0d2d6" }}
                    icon="ep:arrow-down-bold"
                    height={11}
                  />
                </Badge>
              }
              title="Cards"
            >
              <Menu.Item key="10">Element 1</Menu.Item>
              <Menu.Item key="11">Element 2</Menu.Item>
            </SubMenu>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
