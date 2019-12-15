import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DatePicker,
  Select,
  Typography,
  Form,
  Input,
  Row,
  Col,
  InputNumber,
  Radio,
  Button
} from "antd";
import moment from "moment";

import { roomTypeList } from "../stay/index";
import { setProgram } from "../../../../store/program";

import style from "../program-type/index.module.scss";

const { Title, Text } = Typography;
const dateFormat = "YYYY/MM/DD";

const applyList = [
  {
    label:
      "No. Participants can register and pay only when successful in their application.",
    value: "1"
  },
  {
    label:
      "Yes. This Application Fee is non-refundable. This is also separate from the deposit and full payment amount.",
    value: "2"
  }
];

const cannelList = [
  {
    label: "Full refund. Transaction cost will be covered by participants",
    value: "1"
  },
  {
    label:
      "Not refundable. Participants can however transfer their slots to others",
    value: "2"
  }
];

const payCannelList = [
  {
    label: "Full Refund. Transaction cost will be covered by participants.",
    value: "1"
  },
  {
    label: "75% Refund. Transaction cost will be covered by participants.",
    value: "2"
  },
  {
    label: "50% Refund. Transaction cost will be covered by participants.",
    value: "3"
  },
  {
    label:
      "Not refundable. Participants can however transfer their slots to others.",
    value: "4"
  }
];

const Cost = props => {
  const { setCurrent } = props;
  const {
    getFieldDecorator,
    setFieldsValue,
    getFieldValue,
    validateFields,
    getFieldsValue
  } = props.form;
  getFieldDecorator("keys", { initialValue: [0, 1, 2] });

  const stepData = useSelector(state => state.program.step6);
  const dispatch = useDispatch();
  const stepData5 = useSelector(state => state.program.step5);

  const {
    cost_type,
    need_additional_fee,
    additional_fee,
    early_bird_period,
    amount_of_discount,
    after_paying_deposit,
    after_full_payment,
    package_list
  } = stepData;

  const { room_type } = stepData5;

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        const {
          cost_type,
          need_additional_fee,
          additional_fee,
          early_bird_period,
          amount_of_discount,
          after_paying_deposit,
          after_full_payment
        } = formValue;
        const keys = getFieldValue("keys");
        const package_list = keys.map(val => formValue[`package_${val}`]);
        dispatch(
          setProgram({
            type: "step6",
            data: {
              cost_type,
              need_additional_fee,
              additional_fee,
              early_bird_period,
              amount_of_discount,
              after_paying_deposit,
              after_full_payment,
              package_list
            }
          })
        );
        setCurrent(7);
      }
    });
  };

  const addMore = value => {
    const keys = getFieldValue("keys");
    const nextKeys = keys.concat(keys.length);
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

  const renderSelect = (data, select) => {
    let arr = [];
    if (select && Array.isArray(select)) {
      select.forEach(val1 => {
        arr.push(
          <Select.Option value={val1}>
            {data.find(val2 => val2.value === val1).label}
          </Select.Option>
        );
      });
    }
    return arr;
  };

  const renderGroup = () => {
    const keys = getFieldValue("keys");
    const arr = [];
    keys.forEach(item => {
      arr.push(
        <li key={item}>
          <Title level={4}>package {item}</Title>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Form.Item label="参与者类型">
                {getFieldDecorator(`package_${item}[add_type]`, {
                  initialValue:
                    package_list && package_list[item]
                      ? package_list[item].add_type
                      : ""
                })(<Select />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="room type">
                {getFieldDecorator(`package_${item}[add_room_type]`, {
                  initialValue:
                    package_list && package_list[item]
                      ? package_list[item].add_room_type
                      : ""
                })(<Select>{renderSelect(roomTypeList, room_type)}</Select>)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="学费">
                {getFieldDecorator(`package_${item}[add_tuition_fee]`, {
                  initialValue:
                    package_list && package_list[item]
                      ? package_list[item].add_tuition_fee
                      : ""
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="住宿费">
                {getFieldDecorator(`package_${item}[hotel_fee]`, {
                  initialValue:
                    package_list && package_list[item]
                      ? package_list[item].hotel_fee
                      : ""
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
      <Title level={3}>Pricing</Title>
      <Text type="secondary">
        Participants traveling abroad for overseas program are most concerned
        about the accommodation arrangements. Do input the information for the
        length of their stay in the program.
      </Text>
      <div>
        <Form.Item label="货币选择">
          {getFieldDecorator("cost_type", {
            initialValue: cost_type,
            rules: [{ required: true, message: "Please select!" }]
          })(
            <Select style={{ width: 200 }}>
              <Select.Option value="SGD">SGD</Select.Option>
            </Select>
          )}
        </Form.Item>
      </div>
      <Title level={4}>Application Fee</Title>
      <Text type="secondary">
        The amount that each participant to pay to secure their spot in the
        program. This fee is non-refundable and should be calculated in as the
        processing fee for the participation. In case of a dispute due to
        miscommunications or an approved exception, our team will be able to
        facilitate the refund.
      </Text>
      <Title level={4}>The Amount of Application Fee per Applicant？</Title>
      <Form.Item>
        {getFieldDecorator("need_additional_fee", {
          initialValue: need_additional_fee,
          rules: []
        })(
          <Radio.Group style={{ width: "100% " }}>
            {renderOutlineRadio(applyList)}
          </Radio.Group>
        )}
      </Form.Item>
      <Title level={4}>您要收取多少申请费用(每人)</Title>
      <div>
        <Form.Item label="Additional fee">
          {getFieldDecorator("additional_fee", {
            initialValue: additional_fee,
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input style={{ width: 330 }} />)}
          <span style={{ paddingLeft: 10 }}>SGD</span>
        </Form.Item>
      </div>
      <Title level={4}>Program Fees</Title>
      <Text type="secondary">
        The total program fee to be charged for your program excluding the
        Application Fee. If your program includes accommodation, this should be
        inclusive of the accommodation fees. You can choose to collect a partial
        amount (Deposit Fee) before the final balance amount.
      </Text>
      <Title level={4}>Early Bird Discount</Title>
      <Text type="secondary">在指定时间内报名，可享受的优惠套餐</Text>
      <div>
        <Form.Item label="Early Bird Period">
          {getFieldDecorator("early_bird_period", {
            initialValue: early_bird_period
          })(
            <DatePicker.RangePicker
              format={dateFormat}
              style={{ width: 330 }}
            />
          )}
        </Form.Item>
        <Form.Item label="Amount of Discount">
          {getFieldDecorator("amount_of_discount", {
            initialValue: amount_of_discount
          })(<InputNumber style={{ width: 330 }} />)}
          <span style={{ paddingLeft: 10 }}>SGD</span>
        </Form.Item>
      </div>
      {renderGroup()}
      <a onClick={addMore}>增加套餐类型</a>
      <Title level={4}>Cancellation and Refund Policies</Title>
      <Title level={4} style={{ fontSize: "18px" }}>
        Participant requesting refund after paying deposit
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("after_paying_deposit", {
            initialValue: after_paying_deposit,
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(cannelList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <Title level={4} style={{ fontSize: "18px" }}>
        Participants need to make the full payment within 7 days from the
        deposit payment. Failure to do so would lead to their application being
        dropped and deposit payment would not be refunded.
      </Title>
      <Title level={4} style={{ fontSize: "18px" }}>
        Participants requesting cancellation after full payment
      </Title>
      <div>
        <Form.Item>
          {getFieldDecorator("after_full_payment", {
            initialValue: after_full_payment,
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(payCannelList)}</Radio.Group>)}
        </Form.Item>
      </div>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </Form>
  );
};

export default Cost;
