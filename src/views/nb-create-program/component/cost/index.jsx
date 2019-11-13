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
import moment from "moment";

const { Title, Text } = Typography;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";

const Cost = props => {
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

  return (
    <Form>
      <Title level={3}>费用</Title>
      <Text type="secondary">
        Participants traveling abroad for overseas program are most concerned
        about the accommodation arrangements. Do input the information for the
        length of their stay in the program.
      </Text>
      <div>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default Form.create({ name: "plan" })(Cost);
