import React, { Component } from "react";
import { Layout } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

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
      >
        <Menu
          theme={this.state.theme}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to="/bill">
              <UserOutlined />
              <span className="nav-text">Счет</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/history">
              <VideoCameraOutlined />
              <span className="nav-text">История</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/planning">
              <UploadOutlined />
              <span className="nav-text">Планирование</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/record">
              <UserOutlined />
              <span className="nav-text">Новая запись</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/categories">
              <UserOutlined />
              <span className="nav-text">Категории</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
