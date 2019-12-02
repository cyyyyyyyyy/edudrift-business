import React from "react";
import { Col, Form, Input, Row, Select, Typography } from "antd";

const { Title, Text } = Typography;

const BaseInfo = props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <Title level={3}>基本信息</Title>
      <Text type="secondary">
        Lets begin with the basic introduction to what you’re about to offer.
      </Text>
      <Row>
        <Col span={10} style={{ paddingRight: 40 }}>
          <Form.Item label="公司/组织 名称">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="公司/组织 名称" />)}
          </Form.Item>
          <Form.Item label="管理员名称">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="管理员名称" />)}
          </Form.Item>
          <Form.Item label="公司网站">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="公司网站" />)}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="公司邮箱">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="公司邮箱" />)}
          </Form.Item>
          <Form.Item label="管理员职位">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="管理员职位" />)}
          </Form.Item>
          <Form.Item label="城市/地区">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="城市/地区" />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default BaseInfo;
