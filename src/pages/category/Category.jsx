import React, { Component } from "react";
import { Typography, Divider } from "antd";
const { Title } = Typography;

class Category extends Component {
  render() {
    return (
      <div>
        <Title>Категория</Title>
        <Divider style={{ backgroundColor: "white" }}></Divider>
      </div>
    );
  }
}

export default Category;
