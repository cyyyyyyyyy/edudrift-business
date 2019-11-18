import React, { useState } from "react";
import { Checkbox, Typography, Form, Input, Button, Radio } from "antd";
import style from "../program-type/index.module.scss";

const { Title, Text } = Typography;

const liveList = [
  {
    label: "是的，住宿包含在项目套餐中。",
    value: "1"
  },
  {
    label: "不，套餐中不提供住宿服务。",
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
      <Title level={3}>住宿</Title>
      <Text type="secondary">
        Participants traveling abroad for overseas program are most concerned
        about the accommodation arrangements. Do input the information for the
        length of their stay in the program.
      </Text>
      <Title level={4}>一 您是否在项目中计划提供住宿?</Title>
      <Text type="secondary">
        Select up to 3 most relevant profile that best fits the program. Note
        that if you select multiple groups, there is a very high likelyhood that
        these participant from different academic profiles will register and be
        in the same program.
      </Text>
      <div>
        {getFieldDecorator("has_live", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Radio.Group style={{ width: "100% " }}>
            {renderOutlineRadio(liveList)}
          </Radio.Group>
        )}
      </div>
      <Title level={4}>二 住宿详情</Title>
      <Text type="secondary">In English language</Text>
      {getFieldDecorator("english_language", {
        rules: [{ required: true, message: "Please input your username!" }]
      })(<Input style={{ marginTop: 10 }} />)}
      <Text type="secondary" style={{ marginTop: 10 }}>
        In Local language
      </Text>
      {getFieldDecorator("local_language", {
        rules: [{ required: true, message: "Please input your username!" }]
      })(<Input style={{ marginTop: 10 }} />)}
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
      <Title level={4}>住宿星级</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("star", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(starList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>是否提供机场接送服务？</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("arrive", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Checkbox.Group>{renderCheck(arriveList)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>房型选择(多选)</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("roomType", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(roomTypeList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>上传图片</Title>
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
