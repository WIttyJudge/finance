import React, { Component } from "react";
import PieGraph from "../../components/Page/PieGraph";
import { Typography, Table, Divider, Tag } from "antd";
const { Title } = Typography;

const columns = [
  {
    title: "Сумма",
    dataIndex: "amount",
    // defaultSortOrder: "descend",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.amount - b.amount,
    align: "center",
    width: 150,
  },
  {
    title: "Дата",
    dataIndex: "created_at",
    defaultSortOrder: "descend",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
    align: "center",
  },
  {
    title: "Категория",
    dataIndex: "category",
    align: "center",
  },
  {
    title: "Тип",
    dataIndex: "type",
    filters: [
      {
        text: "Доход",
        value: "Доход",
      },
      {
        text: "Расход",
        value: "Расход",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    align: "center",
    render: (type) => {
      let color;
      if (type === "Расход") color = "#f50";
      if (type === "Доход") color = "#29f";

      return <Tag color={color}>{type}</Tag>;
    },
  },
];

// const data = [
//   {
//     key: 1,
//     category: "Работа",
//     date: "2014-12-24 20:20:00",
//     amount: 100,
//     type: "Расход"
//   }
// ];

const locale = {
  filterTitle: "test1",
  filterConfirm: "Ок",
  filterReset: "Вернуть",
  emptyText: "Empty",
};

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      financeRecords: [],
      loading: true,
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/api/record")
      .then((res) => res.json())
      .then((json) => {
        this.setState(
          {
            financeRecords: json,
            loading: false,
          },
          () => {
            console.log(json);
          }
        );
      });
  };

  render() {
    const { financeRecords, loading } = this.state;

    return (
      <div>
        <Title>История записей</Title>
        <Divider className="content__divider" />
        <div className="content__chart">
          <PieGraph />
        </div>
        <Table
          columns={columns}
          dataSource={financeRecords}
          onChange={this.onChange}
          locale={locale}
          loading={loading}
          bordered
        />
      </div>
    );
  }
}

export default History;
