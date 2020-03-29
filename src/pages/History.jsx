import React, { Component } from "react";
import { Typography, Table, Divider, Tag } from "antd";
const { Title } = Typography;

const columns = [
  {
    title: "Сумма",
    dataIndex: "count",
    // defaultSortOrder: "descend",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.count - b.count,
    align: "center",
    width: 150
  },
  {
    title: "Дата",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
    align: "center"
  },
  {
    title: "Категория",
    dataIndex: "category",
    align: "center"
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
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    align: "center",
    render: type => {
      let color;
      if (type === "Расход") color = "#f50";
      if (type === "Доход") color = "#29f";

      return <Tag color={color}>{type}</Tag>;
    }
  }
];

const data = [
  {
    key: 1,
    category: "Работа",
    date: "2014-12-24 20:20:00",
    count: 100,
    type: "Расход"
  },
  {
    key: 2,
    category: "Еда",
    date: "2014-11-27 17:13:00",
    count: 200,
    type: "Доход"
  },
  {
    key: 3,
    category: "Работа",
    date: "2016-12-25 13:35:00",
    count: 15,
    type: "Доход"
  },
  {
    key: 5,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Расход"
  },
  {
    key: 6,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Расход"
  },
  {
    key: 7,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Доход"
  },
  {
    key: 8,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Доход"
  },
  {
    key: 9,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Расход"
  },
  {
    key: 10,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5000,
    type: "Доход"
  },
  {
    key: 11,
    category: "Работа",
    date: "2020-12-25 17:35:12",
    count: 5055500,
    type: "Доход"
  },
  {
    key: 12,
    category: "Работа",
    date: "2010-12-25 17:35:12",
    count: 5000,
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
        <Divider style={{ backgroundColor: "white" }} />
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.onChange}
          bordered
        />
      </div>
    );
  }
}

export default History;
