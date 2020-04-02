import React, { Component } from "react";
import "./category.css";
import { Row, Col } from "react-flexbox-grid";
import { Typography, Divider, Form, Input, Button, Select } from "antd";

const { Option } = Select;
const { Title } = Typography;

class Category extends Component {
  render() {
    return (
      <div>
        <Title>Категории</Title>
        <Divider style={{ backgroundColor: "white" }}></Divider>

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
                <Select placeholder="Категория" allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
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
