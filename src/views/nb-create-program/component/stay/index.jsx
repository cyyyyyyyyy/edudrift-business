import React, { useState } from "react";
import { Checkbox, Typography, Form, Input, Button, Radio } from "antd";
import style from "../program-type/index.module.scss";

const { Title, Text } = Typography;

const liveList = [
  {
    label: "Yes, accommodation is included in the registration packages.",
    value: "1"
  },
  {
    label: "No, accommodation is not provided at the program.",
    value: "2"
  }
];

const starList = [
  { label: "Hotel (5 Star Hotel)", value: "1" },
  { label: "Hotel (4 Star Hotel)", value: "2" },
  { label: "Hotel (4 Star Hotel)", value: "3" },
  { label: "Student Dormitory/Hostel ", value: "4" },
  { label: "Student Dormitory/Hostel ", value: "5" },
  { label: "Serviced Apartment/Condominium", value: "6" }
];

const arriveList = [
  { label: "Yes, Both ways. (Scheduled)", value: "1" },
  { label: "Only for arrival. (Scheduled)", value: "2" },
  { label: "Only for departure. (Scheduled)", value: "3" },
  {
    label:
      "No, airport transfers will not be provided. Participants will have to find their own way to the accommodation.",
    value: "4"
  }
];

const roomTypeList = [
  { label: "Single Room (Not shared)", value: "1" },
  { label: "Double/Twin Rooms", value: "2" },
  { label: "Triple Rooms", value: "3" },
  { label: "Mix of Double/Twin/Triple Rooms", value: "4" },
  { label: "Three or more roommates in one room ", value: "5" }
];

const Stay = props => {
  const { getFieldDecorator, getFieldsValue, setFieldsValue } = props.form;
  const [selectDay, setSelectDay] = useState("");

  const renderOutlineRadio = data => {
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
        <div style={{ paddingTop: 18 }}>
          <Checkbox value={value.value}>{value.label}</Checkbox>
        </div>
      );
    });
    return arr;
  };
  const renderRadio = data => {
    const arr = [];
    data.forEach(value => {
      arr.push(
        <div>
          <Radio value={value.value}>{value.label}</Radio>
        </div>
      );
    });
    return arr;
  };

  return (
    <Form>
      <Title level={3}>Accommodation</Title>
      <Text type="secondary">
        Participants traveling abroad for overseas program are most concerned
        about the accommodation arrangements. Do input the information for the
        length of their stay in the program.
      </Text>
      <Title level={4}>
        Is Accommodation Included in the Registration Packages?
      </Title>
      <Text type="secondary">
        Select up to 3 most relevant profile that best fits the program. Note
        that if you select multiple groups, there is a very high likelyhood that
        these participant from different academic profiles will register and be
        in the same program.
      </Text>
      <div>
        <Form.Item>
          {getFieldDecorator("need_accommodation", {
            rules: [{ required: true, message: "Please select!" }]
          })(
            <Radio.Group style={{ width: "100% " }}>
              {renderOutlineRadio(liveList)}
            </Radio.Group>
          )}
        </Form.Item>
      </div>
      <Title level={4}>Details of Accommodation</Title>
      <Text type="secondary">In English language</Text>
      <Form.Item>
        {getFieldDecorator("english_language", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
      </Form.Item>
      <Text type="secondary" style={{ marginTop: 10 }}>
        In Local language
      </Text>
      <Form.Item>
        {getFieldDecorator("local_language", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
      </Form.Item>
      <Title level={4}>Address of Accommodation</Title>
      <Text type="secondary">In English language</Text>
      <div style={{ width: 300 }}>
        {getFieldDecorator("eg_line1", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
        {getFieldDecorator("eg_line2", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
        {getFieldDecorator("eg_place_code", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
      </div>
      <Text type="secondary">In Local language</Text>
      <div style={{ width: 300 }}>
        {getFieldDecorator("local_line1", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
        {getFieldDecorator("local_line2", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
        {getFieldDecorator("local_place_code", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input style={{ marginTop: 10 }} />)}
      </div>
      <Title level={4}>Accommodation Type</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("star", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(starList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>
        Will Airport Transfer on arrival and departure day be provided?
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("arrive", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Checkbox.Group>{renderCheck(arriveList)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>Room Types Available</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("roomType", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(roomTypeList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>Upload Photos</Title>
      <Text type="secondary">
        Upload photos of the designated accommodation so as to give participants
        a better idea of where they will be staying at and what to expect in the
        accommodation!
      </Text>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default Stay;
