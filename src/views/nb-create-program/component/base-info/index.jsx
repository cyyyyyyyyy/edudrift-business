import React from "react";
import {
  DatePicker,
  Checkbox,
  Select,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button
} from "antd";

import style from "./index.module.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];

const list = [
  { label: "最少学生", value: "Apple" },
  { label: "最大学生", value: "Pear" },
  { label: "最少教员", value: "Orange" },
  { label: "最大教员", value: "Apple1" },
  { label: "最少观摩", value: "Pear2" },
  { label: "最大观摩", value: "Orange3" }
];

const BaseInfo = props => {
  const { getFieldDecorator } = props.form;

  const renderCheck = data => {
    const arr = [];
    data.forEach(value => {
      arr.push(
        <Col span={6}>
          <Checkbox value={value.value}>{value.label}</Checkbox>
        </Col>
      );
    });
    return arr;
  };

  const renderList = data => {
    const arr = [];
    data.forEach(value => {
      console.log(value.value);
      arr.push(
        <Col span={8} style={{ paddingRight: 40 }}>
          <Form.Item label={value.label}>
            {getFieldDecorator(value.value, {
              rules: []
            })(<Input />)}
          </Form.Item>
        </Col>
      );
    });
    return arr;
  };

  return (
    <Form>
      <Title level={3}>基本信息</Title>
      <Text type="secondary">
        Lets begin with the basic introduction to what you’re about to offer.
      </Text>
      <Row>
        <Col span={10} style={{ paddingRight: 40 }}>
          <Form.Item label="项目名称">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="项目名称" />)}
          </Form.Item>
          <Form.Item label="国家">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Select placeholder="国家" />)}
          </Form.Item>
          <Form.Item label="项目主页">
            {getFieldDecorator("project_home", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="项目主页" />)}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="组织机构名称">
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="组织机构名称" />)}
          </Form.Item>
          <Form.Item label="城市/地区">
            {getFieldDecorator("city", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Select placeholder="城市/地区" />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>项目描述</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("describe", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<TextArea />)}
        </Form.Item>
      </div>
      <Title level={4}>添加项目标签</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("tags", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Checkbox.Group>{renderCheck(options)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>项目时间</Title>
      <Text type="secondary">
        Let us know when is the last day that participants can register for your
        program!
      </Text>
      <Row>
        <Col span={5} style={{ paddingRight: 40 }}>
          <Form.Item label="项目开始时间">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
          <Form.Item label="报名截止时间">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="项目结束时间">
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>项目成员分类</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Checkbox.Group>{renderCheck(options)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>项目成型要求</Title>
      <Row>{renderList(list)}</Row>
      <div>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default Form.create({ name: "base_info" })(BaseInfo);
