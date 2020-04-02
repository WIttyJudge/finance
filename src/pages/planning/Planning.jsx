import React, { Component } from "react";
import { Typography, Divider, Progress } from "antd";
const { Title, Text } = Typography;

class Planning extends Component {
  render() {
    return (
      <div>
        <Title>Планирование</Title>
        <Divider style={{ background: "white" }}></Divider>

        <Text strong style={{ fontSize: "16px" }}>
          Девушка:
          <Text> 1000р из 5000</Text>
        </Text>
        <Progress percent={30} />

        <Text strong style={{ fontSize: "16px" }}>
          Еда: <Text> 1000р из 5000</Text>
        </Text>
        <Progress percent={30} />

        <Text strong style={{ fontSize: "16px" }}>
          Поездка: <Text> 1000р из 5000</Text>
        </Text>
        <Progress percent={30} />
      </div>
    );
  }
}

export default Planning;
