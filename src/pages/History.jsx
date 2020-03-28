import React, { Component } from "react";
import { Typography, Table, Divider } from "antd";
const { Title } = Typography;

const columns = [
  {
    title: "Сумма",
    dataIndex: "count",
    // defaultSortOrder: "descend",
    sorter: (a, b) => a.count - b.count,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Дата",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.date - b.date,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Категория",
    dataIndex: "category"
  },
  {
    title: "Тип",
    dataIndex: "type",
    filters: [
      {
        text: "Доход",
        value: "Доход"
      },
      {
        text: "Расход",
        value: "Расход"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.type.indexOf(value) === 0
  }
];

const data = [
  {
    key: 1,
    category: "Работа",
    date: "2014-12-24 20:20:00",
    count: 100,
    type: "Доход"
  },
  {
    key: 2,
    category: "Еда",
    date: "2014-11-27 17:13:00",
    count: 200,
    type: "Расход"
  },
  {
    key: 3,
    category: "Родели",
    date: "2014-12-22 23:12:00",
    count: 100,
    type: "Доход"
  },
  {
    key: 4,
    category: "Работа",
    date: "2014-12-25 13:35:00",
    count: 15,
    type: "Доход"
  }
];

class History extends Component {
  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    return (
      <div>
        <Title>История записей</Title>
        <Divider></Divider>
        <Table columns={columns} dataSource={data} onChange={this.onChange} />
      </div>
    );
  }
}

export default History;
