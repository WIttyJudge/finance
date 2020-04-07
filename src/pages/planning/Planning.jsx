import React, { Component } from "react";
import { Typography, Divider, Progress } from "antd";
const { Title, Text } = Typography;

class Planning extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      percent: 5,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/category/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          categories: json,
        });
      });
  }

  countPeecent() {
    // this.state.categories.
    console.log(this.state.percent);
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <Title>Планирование</Title>
        <Divider className="content__divider" />

        {categories.map((category) => {
          return (
            <Text
              strong
              style={{
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {category.name}:
              <Text>
                {category.spend_money} из {category.max_money}
              </Text>
              <Progress percent={this.state.percent} />
            </Text>
          );
        })}

        {/* <Text strong style={{ fontSize: "16px" }}>
          Еда: <Text> 1000р из 5000</Text>
        </Text>
        <Progress percent={30} />

        <Text strong style={{ fontSize: "16px" }}>
          Поездка: <Text> 1000р из 5000</Text>
        </Text>
        <Progress percent={30} /> */}
      </div>
    );
  }
}

export default Planning;
