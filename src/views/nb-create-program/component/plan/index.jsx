import React, { useState } from "react";
import { DatePicker, Typography, Form, Input, Row, Col, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setProgram } from "../../../../store/program";

const { Title, Text } = Typography;
const dateFormat = "YYYY/MM/DD";

const dayEvent = [
  { value: "morning_1", label: " Morning(0900H-1200H)", type: "text" },
  { value: "morning_2", label: "Airport Arrival" },
  { value: "morning_3", label: "Registration and Hotel Check-In" },
  { value: "morning_4", label: "Airport Arrival" },
  { value: "afternoon_1", label: "Afternoon (1400H - 1700H)", type: "text" },
  { value: "afternoon-2", label: "Airport Arrival" },
  { value: "afternoon-3", label: "Registration and Hotel Check-In" },
  { value: "afternoon-4", label: "Airport Arrival" },
  { value: "evening_1", label: "Evening (1800H onwards)", type: "text" },
  { value: "evening-2", label: "Airport Arrival" },
  { value: "evening-3", label: "Registration and Hotel Check-In" },
  { value: "evening-4", label: "Airport Arrival" }
];

const Plan = props => {
  const { setCurrent } = props;
  const {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    getFieldValue
  } = props.form;
  const [selectDay, setSelectDay] = useState("");
  const stepData1 = useSelector(state => state.program.step1);
  const { program_end_day, program_start_day } = stepData1;
  const dispatch = useDispatch();
  const duration = moment(program_end_day).diff(program_start_day, "d");

  const renderArr = duration => {
    const arr = [];
    let i = 0;
    while (i < duration) {
      arr.push(i);
      i++;
    }
    return arr;
  };

  getFieldDecorator("keys", {
    initialValue: duration ? renderArr(duration) : []
  });

  const handleSelect = value => {
    setSelectDay(value);
  };

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        const keys = getFieldValue("keys");
        const schedule_list = keys.map(val => formValue[`day_${val}`]);
        dispatch(
          setProgram({
            type: "step2",
            data: { schedule_list }
          })
        );
        setCurrent(3);
      }
    });
  };

  const renderPlanList = () => {
    const arr = [];
    const keys = getFieldValue("keys");
    if (keys) {
      keys.forEach(i => {
        const formValue = getFieldsValue();
        let flag = true;
        dayEvent.forEach(({ value, type }) => {
          if (!formValue[`day_${i}`]) {
            flag = false;
          }
          if (formValue[`day_${i}`] && type !== "text") {
            if (!formValue[`day_${i}`][value]) {
              flag = false;
            }
          }
        });
        arr.push(
          <Col span={2} key={i}>
            <Button
              type={flag ? "primary" : "default"}
              style={{ width: "80%", marginTop: 16 }}
              onClick={() => handleSelect(`day_${i}`)}
            >{`DAY${i}`}</Button>
          </Col>
        );
      });
    }
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
      <Title level={3}>项目计划</Title>
      <Text type="secondary">
        Having a finalised schedule allows for participants to search and pick
        programs that fits. It also helps with the planning of flights, travel
        and other arrangements to allow faster decisions on participation.
      </Text>
      <Row>
        <Col span={6} style={{ paddingRight: 40 }}>
          <Form.Item label="Program Start Day">
            {getFieldDecorator("program_start_day", {
              initialValue: moment(program_start_day),
              rules: []
            })(<DatePicker format={dateFormat} disabled />)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="项目结束时间">
            {getFieldDecorator("program_end_day", {
              initialValue: moment(program_end_day),
              rules: []
            })(<DatePicker format={dateFormat} disabled />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Daily Schedule</Title>
      <Row>{renderPlanList()}</Row>
      {selectDay ? (
        <div>
          <div style={{ padding: "16px 0" }}>DAY {selectDay}</div>
          {dayEventList(dayEvent)}
        </div>
      ) : null}
      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </Form>
  );
};

export default Form.create()(Plan);
