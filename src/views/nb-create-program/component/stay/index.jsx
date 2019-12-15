import React, { useState } from "react";
import { Checkbox, Typography, Form, Input, Button, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "../program-type/index.module.scss";
import { setProgram } from "../../../../store/program";

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

export const roomTypeList = [
  { label: "Single Room (Not shared)", value: "1" },
  { label: "Double/Twin Rooms", value: "2" },
  { label: "Triple Rooms", value: "3" },
  { label: "Mix of Double/Twin/Triple Rooms", value: "4" },
  { label: "Three or more roommates in one room ", value: "5" }
];

const Stay = props => {
  const {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
    getFieldValue,
    validateFields
  } = props.form;
  const { setCurrent } = props;

  const stepData = useSelector(state => state.program.step5);
  const dispatch = useDispatch();

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        dispatch(
          setProgram({
            type: "step5",
            data: {
              ...formValue
            }
          })
        );
        setCurrent(6);
      }
    });
  };

  const {
    need_accommodation,
    english_language_details,
    local_language_details,
    english_address,
    local_address,
    accommodation_type,
    airport_transfer,
    room_type
  } = stepData;

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
        that if you select multiple groups, there is a very high likelyhood
        that these participant from different academic profiles will register
        and be in the same program.
      </Text>
      <div>
        <Form.Item>
          {getFieldDecorator("need_accommodation", {
            initialValue: need_accommodation,
            rules: [{ required: true, message: "Please select!" }]
          })(
            <Radio.Group style={{ width: "100% " }}>
              {renderOutlineRadio(liveList)}
            </Radio.Group>
          )}
        </Form.Item>
      </div>
      <Title level={4}>Details of Accommodation</Title>
      <Form.Item label="In English language">
        {getFieldDecorator("english_language_details", {
          initialValue: english_language_details,
          rules: [{ required: true, message: "Please input!" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="In Local language">
        {getFieldDecorator("local_language_details", {
          initialValue: local_language_details,
          rules: [{ required: true, message: "Please input!" }]
        })(<Input />)}
      </Form.Item>
      <Title level={4}>Address of Accommodation</Title>
      <div style={{ width: 300 }}>
        <Form.Item label="In English language">
          {getFieldDecorator("english_address", {
            initialValue: english_address,
            rules: [{ required: true, message: "Please input!" }]
          })(<Input />)}
        </Form.Item>
      </div>
      <div style={{ width: 300 }}>
        <Form.Item label="In Local language">
          {getFieldDecorator("local_address", {
            initialValue: local_address,
            rules: [{ required: true, message: "Please input!" }]
          })(<Input style={{ marginTop: 10 }} />)}
        </Form.Item>
      </div>
      <Title level={4}>Accommodation Type</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("accommodation_type", {
            initialValue: accommodation_type,
            rules: [{ required: true, message: "Please select!" }]
          })(<Radio.Group>{renderRadio(starList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>
        Will Airport Transfer on arrival and departure day be provided?
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("airport_transfer", {
            initialValue: airport_transfer,
            rules: [{ required: true, message: "Please select!" }]
          })(<Checkbox.Group>{renderCheck(arriveList)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>Room Types Available</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("room_type", {
            initialValue: room_type,
            rules: [{ required: true, message: "Please select!" }]
          })(<Checkbox.Group>{renderCheck(roomTypeList)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>Upload Photos</Title>
      <Text type="secondary">
        Upload photos of the designated accommodation so as to give
        participants a better idea of where they will be staying at and what
        to expect in the accommodation!
      </Text>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </Form>
  );
};

export default Stay;
