import React, { Component } from "react";
import {
  Typography,
  Divider,
  Form,
  Input,
  Button,
  Select,
  Col,
  Radio,
} from "antd";
const { Title } = Typography;
const { Option } = Select;

class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      types: [],

      categoryValue: "",
      typeValue: "",
      amountValue: "",
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/api/category/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          categories: json,
          categoryValue: json[0].name,
        });
      });

    fetch("http://localhost:3333/type")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          types: json,
          typeValue: json[0].id,
        });
      });
  };

  handleCategory = (value) => {
    this.setState({ categoryValue: value });
  };

  handleRadio = (e) => {
    this.setState({ typeValue: e.target.value });
  };

  handleValue = (e) => {
    this.setState({ amountValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });

    let createRecord = {
      category: this.state.categoryValue,
      type: this.state.typeValue,
      amount: parseInt(this.state.amountValue),
    };

    console.log(createRecord);
  };

  render() {
    const { categories, types, categoryValue, typeValue } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Title>Новая запись</Title>
        <Divider className="content__divider" />

        <Title level={2}>Создать</Title>
        <Col xs={6}>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Form.Item label="Выберите категорию">
              <Select
                placeholder="Категория"
                value={categoryValue}
                onChange={this.handleCategory}
              >
                {categories.map((category) => {
                  return (
                    <Option value={`${category.id}`} key={category.id}>
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Radio.Group value={typeValue} onChange={this.handleRadio}>
                {types.map((type) => {
                  return (
                    <Radio value={type.id} key={type.id}>
                      {type.name}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Выделенная сумма">
              {/* {getFieldDecorator("username", {
                rules: [
                  {
                    type: "number",
                    required: true,
                    message: "Please input your username!"
                  }
                ]
              })()} */}
              <Input
                placeholder="Сумма"
                onChange={this.handleValue}
                type={"number"}
              />
            </Form.Item>

            <Form.Item label="Описание">
              <Input placeholder="Описание"></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </div>
    );
  }
}

const WrapperRecordComponent = Form.create({ name: "record" })(Record);

export default WrapperRecordComponent;
