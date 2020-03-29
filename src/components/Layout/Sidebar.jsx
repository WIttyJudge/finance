import React, { Component } from "react";
import { Layout } from "antd";
import {
  ClockCircleOutlined,
  UserOutlined,
  BarChartOutlined,
  PlusSquareOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      theme: "light"
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        theme={this.state.theme}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        width={"250px"}
      >
        <Menu theme={this.state.theme} mode="inline" selectedKeys={["1"]}>
          <Menu.Item key="1">
            <NavLink to="/bill">
              <UserOutlined />
              <span>Счет</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/history">
              <BarChartOutlined />
              <span>История</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/planning">
              <ClockCircleOutlined />
              <span>Планирование</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/record">
              <PlusSquareOutlined />
              <span>Новая запись</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="/categories">
              <UserOutlined />
              <span>Категории</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
