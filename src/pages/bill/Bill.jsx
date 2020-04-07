import React, { Component } from "react";
import { Typography, Divider, Card, Table } from "antd";
import { Row, Col } from "react-flexbox-grid";
const { Title } = Typography;

const columns = [
  {
    title: "Валюта",
    dataIndex: "currency",
  },
  {
    title: "Курс",
    dataIndex: "rate",
  },
  {
    title: "Дата",
    dataIndex: "date",
  },
];

const dataSource = [
  {
    currency: "RUB",
    rate: "1000",
    date: "2020-05-12 13:50:00",
  },
  {
    currency: "USD",
    rate: "2000",
    date: "2020-05-12 13:50:00",
  },
  {
    currency: "EUR",
    rate: "3000",
    date: "2020-05-12 13:50:00",
  },
];

class Bill extends Component {
  render() {
    return (
      <div>
        <Title>Счет</Title>
        <Divider className="content__divider" />

        <Row between="xs">
          <Col xs={5}>
            <Card title="Test">
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
            </Card>
          </Col>

          <Col xs={7}>
            <Card title="Api">
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Bill;
