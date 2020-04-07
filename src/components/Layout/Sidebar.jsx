import React, { Component } from "react";
import { Layout } from "antd";
import {
  ClockCircleOutlined,
  UserOutlined,
  BarChartOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons-svg";
import { Menu } from "antd";
import { NavLink, withRouter } from "react-router-dom";

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      theme: "light",
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { location } = this.props;
    const { collapsed, theme } = this.state;

    return (
      <Sider
        theme={theme}
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width={"250px"}
      >
        <Menu
          theme={this.state.theme}
          mode="inline"
          defaultSelectedKey={["/bill"]}
          selectedKeys={[location.pathname.toString()]}
        >
          <Menu.Item key="/bill">
            <NavLink to="/bill">
              {/* <UserOutlined /> */}
              <span>Счет</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/history">
            <NavLink to="/history">
              {/* <BarChartOutlined /> */}
              <span>История</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/planning">
            <NavLink to="/planning">
              {/* <ClockCircleOutlined /> */}
              <span>Планирование</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/record">
            <NavLink to="/record">
              {/* <PlusSquareOutlined /> */}
              <span>Новая запись</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/categories">
            <NavLink to="/categories">
              {/* <UserOutlined /> */}
              <span>Категории</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
