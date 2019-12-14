import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button,
  Radio,
  Icon
} from "antd";
import style from "../program-type/index.module.scss";
import { setProgram } from "../../../../store/program";

const { Title, Text } = Typography;
const dateFormat = "YYYY/MM/DD";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

const list = [
  { label: "Adult/Post-Graduate", value: "Adult/Post-Graduate" },
  { label: "Undergraduate", value: "Undergraduate" },
  { label: "High School/Pre-University", value: "High School/Pre-University" }
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
  const { setCurrent } = props;
  const {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue,
    getFieldValue,
    validateFields
  } = props.form;

  const stepData = useSelector(state => state.program.step4);
  const {
    stage_of_education,
    age_restrictions,
    restrictions_mini_age,
    restrictions_max_age,
    need_other_registration,
    other_registration_info
  } = stepData;

  getFieldDecorator("keys", {
    initialValue: other_registration_info
      ? other_registration_info.map((val, index) => index)
      : [0, 1, 2]
  });

  const dispatch = useDispatch();

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        const programKeys = getFieldValue("keys");
        const other_registration_info = programKeys.map(
          val => formValue[`moreInfo_${val}`]
        );

        const {
          stage_of_education,
          age_restrictions,
          restrictions_mini_age,
          restrictions_max_age,
          need_other_registration
        } = formValue;

        dispatch(
          setProgram({
            type: "step4",
            data: {
              stage_of_education,
              age_restrictions,
              restrictions_mini_age,
              restrictions_max_age,
              need_other_registration,
              other_registration_info
            }
          })
        );

        setCurrent(5);
      }
    });
  };

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

  const addMore = () => {
    const keys = getFieldValue("keys");
    const nextKeys = keys.concat(keys.length++);
    setFieldsValue({
      keys: nextKeys
    });
  };

  const renderMore = () => {
    const keys = getFieldValue("keys");

    const arr = [];
    if (keys) {
      keys.forEach((k, index) => {
        arr.push(
          <li key={index} style={{ paddingTop: 10 }}>
            {getFieldDecorator(`moreInfo_${k}`, {
              initialValue: other_registration_info
                ? other_registration_info[k]
                : ""
            })(<Input />)}
          </li>
        );
      });
    }
    return arr;
  };

  return (
    <Form>
      <Title level={3}>Eligibility</Title>
      <Text type="secondary">
        Having a finalised schedule allows for participants to search and pick
        programs that fits. It also helps with the planning of flights, travel
        and other arrangements to allow faster decisions on participation.
      </Text>
      <Title level={4}>Student Profile (Current Stage of Education)</Title>
      <Text type="secondary">
        Select up to 3 most relevant profile that best fits the program. Note
        that if you select multiple groups, there is a very high likelyhood that
        these participant from different academic profiles will register and be
        in the same program.
      </Text>
      <div style={{ paddingTop: 10 }}>
        <Form.Item>
          {getFieldDecorator("stage_of_education", {
            initialValue: stage_of_education,
            rules: [{ required: true, message: "Please select!" }]
          })(
            <Checkbox.Group style={{ width: "80%" }}>
              {renderCheck(list)}
            </Checkbox.Group>
          )}
        </Form.Item>
      </div>
      <Title level={4}>Age Restrictions</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("age_restrictions", {
            initialValue: age_restrictions,
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Radio.Group>{renderRadio(data)}</Radio.Group>)}
        </Form.Item>
      </div>
      {getFieldValue("age_restrictions") === "2" ? (
        <Row>
          <Col span={5} style={{ marginRight: 40 }}>
            <Form.Item label="Minimum age">
              {getFieldDecorator("restrictions_mini_age", {
                initialValue: restrictions_mini_age,
                rules: [{ required: true, message: "Please input!" }]
              })(<Input format={dateFormat} />)}
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="Maximum age">
              {getFieldDecorator("restrictions_max_age", {
                initialValue: restrictions_max_age,
                rules: [{ required: true, message: "Please input!" }]
              })(<Input format={dateFormat} />)}
            </Form.Item>
          </Col>
        </Row>
      ) : null}
      <Title level={4}>Other Eligibility Requirements</Title>
      <Text type="secondary">
        Information of the participants that you may require for successful
        registration.
      </Text>
      <Title level={4}>是否需要额外的报名信息？</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("need_other_registration", {
            initialValue: need_other_registration,
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Radio.Group>
              <Radio style={radioStyle} value={"1"}>
                No. The above information is sufficient.
              </Radio>
              <Radio style={radioStyle} value={"2"}>
                Yes. The program requires the following additional information:
              </Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </div>
      {getFieldValue("need_other_registration") === "2" ? (
        <div>
          <ul style={{ paddingTop: 10, width: 500 }}>{renderMore()}</ul>
          <a onClick={addMore}>
            <Icon type="plus" style={{ paddingRight: 6 }} />
            more
          </a>
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

export default Requirement;
