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
  Button
} from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";

const data = [
  { label: "Day01", value: "1", date: "2019-10-10" },
  { label: "Day02", value: "2", date: "2019-10-11" },
  { label: "Day03", value: "3", date: "2019-10-12" },
  { label: "Day04", value: "4", date: "2019-10-13" },
  { label: "Day05", value: "5", date: "2019-10-14" },
  { label: "Day06", value: "6", date: "2019-10-15" },
  { label: "Day07", value: "7", date: "2019-10-16" },
  { label: "Day08", value: "8", date: "2019-10-17" }
];

const dayEvent = [
  { value: "morning", label: " Morning(0900H-1200H)", type: "text" },
  { value: "morning-1", label: "Airport Arrival" },
  { value: "morning-2", label: "Registration and Hotel Check-In" },
  { value: "morning-3", label: "Airport Arrival" },
  { value: "afternoon", label: "Afternoon (1400H - 1700H)", type: "text" },
  { value: "afternoon-1", label: "Airport Arrival" },
  { value: "afternoon-2", label: "Registration and Hotel Check-In" },
  { value: "afternoon-3", label: "Airport Arrival" },
  { value: "evening", label: "Evening (1800H onwards)", type: "text" },
  { value: "evening-1", label: "Airport Arrival" },
  { value: "evening-2", label: "Registration and Hotel Check-In" },
  { value: "evening-3", label: "Airport Arrival" }
];

const Plan = props => {
  const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;
  const [selectDay, setSelectDay] = useState("");

  const handleSelect = value => {
    setSelectDay(value);
  };

  const renderPlanList = data => {
    const arr = [];
    data.forEach(item => {
      arr.push(
        <Col span={2} key={item.value}>
          <Button onClick={() => handleSelect(item.value)}>{item.label}</Button>
        </Col>
      );
    });
    return arr;
  };

  const dayEventList = data => {
    const arr = [];
    data.forEach(item => {
      arr.push(
        <Row key={item.value}>
          <Col span={6}>
            {item.type !== "text" ? (
              <Form.Item>
                {getFieldDecorator(`${selectDay}[${item.value}]`, {
                  rules: [],
                  preserve: true
                })(<Input placeholder={item.label} />)}
              </Form.Item>
            ) : (
              <div>{item.label}</div>
            )}
          </Col>
        </Row>
      );
    });
    return arr;
  };

  const selectData = data.find(item => item.value === selectDay) || {};
  return (
    <Form>
      <Title level={3}>项目计划</Title>
      <Text type="secondary">
        Having a finalised schedule allows for participants to search and pick
        programs that fits. It also helps with the planning of flights, travel
        and other arrangements to allow faster decisions on participation.
      </Text>
      <Row>
        <Col span={6} style={{ paddingRight: 40 }}>
          <Form.Item label="项目开始时间">
            {getFieldDecorator("project_name", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="项目结束时间">
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>日常安排</Title>
      <Row>{renderPlanList(data)}</Row>
      {selectDay ? (
        <div>
          <Form.Item label={<spa>{selectData.label}</spa>}>
            {getFieldDecorator(`${selectDay}[arrival]`, {
              preserve: true,
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
          {dayEventList(dayEvent)}
        </div>
      ) : null}
      <div style={{ paddingTop: 30 }}>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default Plan;
