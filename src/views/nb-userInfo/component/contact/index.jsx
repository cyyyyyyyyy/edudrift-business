import React from "react";
import { Col, Form, Input, Row, Typography } from "antd";

const { Title, Text } = Typography;

const Contact = props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <Title level={3}>联系方式</Title>
      <Text type="secondary">请提供公司和管理员的联系方式和地址信息</Text>
      <Row>
        <Col span={10} style={{ paddingRight: 40 }}>
          <Form.Item label="公司地址line1">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="公司地址line1" />)}
          </Form.Item>
          <Form.Item label="公司地址line2">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="公司地址line2" />)}
          </Form.Item>
          <Form.Item label="Post code">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="Post code" />)}
          </Form.Item>
          <Form.Item label="辅助邮箱">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="辅助邮箱" />)}
          </Form.Item>
          <Form.Item label="Whats App">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="Whats App" />)}
          </Form.Item>
          <Form.Item label="WeChat">
            {getFieldDecorator("country", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="WeChat" />)}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="联系电话">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="联系电话" />)}
          </Form.Item>
          <Form.Item label="联系电话2">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="联系电话2" />)}
          </Form.Item>
          <Form.Item label="Kakao Talk">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="Kakao Talk" />)}
          </Form.Item>
          <Form.Item label="LINE">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input placeholder="LINE" />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default Contact;
