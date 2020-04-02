import React, { Component } from "react";
import { Typography, Divider, Form, Input, Button, Select, Col } from "antd";
const { Title } = Typography;
const { Option } = Select;

class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3333/categories")
      .then(res => res.json())
      .then(json => {
        this.setState({
          categories: json
        });
      });
  };

  render() {
    return (
      <div>
        <Title>Новая запись</Title>
        <Divider style={{ backgroundColor: "white" }}></Divider>

        <Title level={2}>Создать</Title>
        <Col xs={6}>
          <Form layout="vertical">
            <Form.Item label="Выберите категорию">
              <Select placeholder="Категория" allowClear>
                {this.state.categories.map(category => {
                  return (
                    <Option value={`${category.name}`}>{category.name}</Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item label="Выделенная сумма">
              <Input placeholder="Сумма"></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Создать</Button>
            </Form.Item>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Record;
