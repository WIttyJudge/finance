import React, { Component } from "react";
import "./category.css";
import { Row, Col } from "react-flexbox-grid";
import { Typography, Divider, Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { Title } = Typography;

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],

      categoryValue: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/category/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ categories: json, categoryValue: json[0].name });
      });
  }

  render() {
    const { categories, categoryValue } = this.state;

    return (
      <div>
        <Title>Категории</Title>
        <Divider className="content__divider" />

        <Row between="xs" top="xs">
          <Col xs={5}>
            <Title level={2}>Создать</Title>
            <Form layout="vertical">
              <Form.Item label="Название категории">
                <Input placeholder="Категория"></Input>
              </Form.Item>
              <Form.Item label="Выделенная сумма">
                <Input placeholder="Сумма"></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Создать</Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={5}>
            <Title level={2}>Редактировать</Title>
            <Form layout="vertical">
              <Form.Item label="Выберите категорию">
                <Select placeholder="Категория">
                  {categories.map((category) => {
                    return <Option value={category.id}>{category.name}</Option>;
                  })}
                </Select>
              </Form.Item>
              <Form.Item label="Заголовок">
                <Input placeholder="Заголовок"></Input>
              </Form.Item>
              <Form.Item label="Выделенная сумма">
                <Input placeholder="Сумма"></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Обновить</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Category;
