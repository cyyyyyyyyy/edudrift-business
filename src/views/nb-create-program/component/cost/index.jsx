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
  InputNumber,
  Radio
} from "antd";
import moment from "moment";
import style from "../program-type/index.module.scss";

const { Title, Text } = Typography;
const dateFormat = "YYYY/MM/DD";

const applyList = [
  {
    label: "是的，住宿包含在项目套餐中。",
    value: "1"
  },
  {
    label: "不，套餐中不提供住宿服务。",
    value: "2"
  }
];

const typeList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t"
];

const cannelList = [
  { label: "全额退款，参加者承担手续费", value: "1" },
  { label: "不退款，参加者可转让参赛资格给其他人", value: "2" }
];

const payCannelList = [
  { label: "全额退款，参加者承担手续费", value: "1" },
  { label: "退款75%，参加者承担手续费", value: "2" },
  { label: "退款50%，参加者承担手续费", value: "3" },
  { label: "不退款，参与者可转让参赛资格给其他人", value: "4" }
];

const Cost = props => {
  const { getFieldDecorator, setFieldsValue, getFieldValue } = props.form;
  getFieldDecorator("keys", { initialValue: ["a", "b", "c"] });

  const addMore = value => {
    const keys = getFieldValue("keys");
    const nextKeys = keys.concat(typeList[keys.length]);
    setFieldsValue({
      keys: nextKeys
    });
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

  const renderGroup = () => {
    const keys = getFieldValue("keys");
    const arr = [];
    keys.forEach(item => {
      arr.push(
        <li key={item}>
          <Title level={4}>套餐{item}</Title>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Form.Item label="参与者类型">
                {getFieldDecorator("add_type", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Select />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="房间型号">
                {getFieldDecorator("add_room_type", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Select />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="学费">
                {getFieldDecorator("add_tuition_fee", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="住宿费">
                {getFieldDecorator("hotel_fee", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </li>
      );
    });
    return <ul>{arr}</ul>;
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
        <Form.Item label="货币选择">
          {getFieldDecorator("cost_type", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Select />)}
        </Form.Item>
      </div>
      <Title level={4}>一 申请费</Title>
      <Text type="secondary">
        The amount that each participant to pay to secure their spot in the
        program. This fee is non-refundable and should be calculated in as the
        processing fee for the participation. In case of a dispute due to
        miscommunications or an approved exception, our team will be able to
        facilitate the refund.
      </Text>
      <Title level={4}>您是否需要收取申请费？</Title>
      <div>
        {getFieldDecorator("apply", {
          rules: []
        })(
          <Radio.Group style={{ width: "100% " }}>
            {renderOutlineRadio(applyList)}
          </Radio.Group>
        )}
      </div>
      <Title level={4}>您要收取多少申请费用(每人)</Title>
      <div>
        <Form.Item label="Additional fee">
          {getFieldDecorator("additional_fee", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input />)}
        </Form.Item>
      </div>
      <Title level={4}>二 套餐费用</Title>
      <Text type="secondary">
        The total program fee to be charged for your program excluding the
        Application Fee. If your program includes accommodation, this should be
        inclusive of the accommodation fees. You can choose to collect a partial
        amount (Deposit Fee) before the final balance amount.
      </Text>
      <Title level={4}>早鸟优惠套餐(可选)</Title>
      <Text type="secondary">在指定时间内报名，可享受的优惠套餐</Text>
      <div>
        <Form.Item label="持续时间">
          {getFieldDecorator("start", {})(
            <DatePicker.RangePicker format={dateFormat} />
          )}
        </Form.Item>
        <Form.Item label="优惠金额">
          {getFieldDecorator("end", {})(<InputNumber />)}
        </Form.Item>
      </div>
      {renderGroup()}
      <a onClick={addMore}>增加套餐类型</a>
      <Title level={4}>三 取消和退款政策</Title>
      <Title level={4} style={{ fontSize: "18px" }}>
        1 付完订金后，参加者要求取消订单
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("cannel", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(cannelList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4} style={{ fontSize: "18px" }}>
        2 参与者付订金之后7天内须将余额全部支付，逾期视为自动放弃，不会退还订金
      </Title>
      <Title level={4} style={{ fontSize: "18px" }}>
        3 参与者付完全款后，要求取消订单
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("pay_cannel", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(payCannelList)}</Radio.Group>)}
        </Form.Item>
      </div>
    </Form>
  );
};

export default Cost;
