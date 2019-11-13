import React, { useState } from "react";
import {
  DatePicker,
  Checkbox,
  Select,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button,
  Radio
} from "antd";
import moment from "moment";
import style from "../program-type/index.module.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";

const list = [
  { label: "最少学生", value: "Apple" },
  { label: "最大学生", value: "Pear" },
  { label: "最少教员", value: "Orange" },
  { label: "最大教员", value: "Apple1" },
  { label: "最少观摩", value: "Pear2" },
  { label: "最大观摩", value: "Orange3" }
];

const data = [
  {
    label: "No Additional Age Restrictions",
    value: "1",
    content:
      "As long as participants are within the suggested Education Level/Academic Profile, they are allowed to participate in this program. If they have recently graduated from their respective academic institutions, they will still be able to participate."
  },
  {
    label: "Restricted Age Group",
    value: "2",
    content:
      "As part of the program policy, there are age restrictions. Participants whose individual profiles do not meet these requirements will not be able to successful register for the program. The maximum and/or minimum age requirements are as follow:"
  }
];

const Requirement = props => {
  const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;

  const renderRadio = data => {
    const arr = [];
    data.forEach(item => {
      arr.push(
        <div className={style.radio}>
          <Radio value={item.value}>{item.label}</Radio>
          <div className={style.radio_content}>{item.content}</div>
        </div>
      );
    });
    return arr;
  };

  const renderCheck = data => {
    const arr = [];
    data.forEach(value => {
      arr.push(
        <Col span={8}>
          <Checkbox value={value.value}>{value.label}</Checkbox>
        </Col>
      );
    });
    return arr;
  };

  return (
    <Form>
      <Title level={3}>资格要求</Title>
      <Text type="secondary">
        Having a finalised schedule allows for participants to search and pick
        programs that fits. It also helps with the planning of flights, travel
        and other arrangements to allow faster decisions on participation.
      </Text>
      <Title level={4}>学历</Title>
      <Text type="secondary">
        Select up to 3 most relevant profile that best fits the program. Note
        that if you select multiple groups, there is a very high likelyhood that
        these participant from different academic profiles will register and be
        in the same program.
      </Text>
      <div style={{ paddingTop: 10 }}>
        <Form.Item>
          {getFieldDecorator("tags", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Checkbox.Group style={{ width: "80%" }}>
              {renderCheck(list)}
            </Checkbox.Group>
          )}
        </Form.Item>
      </div>
      <Title level={4}>年龄</Title>
      <div>
        {getFieldDecorator("age", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Radio.Group>{renderRadio(data)}</Radio.Group>)}
      </div>
      <Row>
        <Col span={5} style={{ marginRight: 40 }}>
          <Form.Item label="Minimum age">
            {getFieldDecorator("mini_age", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input format={dateFormat} />)}
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Maximum age">
            {getFieldDecorator("max_age", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<Input format={dateFormat} />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>其他信息</Title>
      <Text type="secondary">
        Information of the participants that you may require for successful
        registration.
      </Text>
      <Title level={4}>是否需要额外的报名信息？e</Title>
    </Form>
  );
};

export default Form.create({ name: "plan" })(Requirement);
