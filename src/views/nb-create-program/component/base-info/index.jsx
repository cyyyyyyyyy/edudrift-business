import React from "react";
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

import { CITY, COUNTRY } from "../../../../constant/city";

import style from "./index.module.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";

const options = [
  { label: "Accounting", value: "Accounting" },
  { label: "Advertising", value: "Advertising" },
  { label: "Architecture", value: "Architecture" },
  { label: "Arts", value: "Arts" },
  { label: "Biology", value: "Biology" },
  { label: "Business", value: "Business" },
  { label: "Communications", value: "Communications" },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Design", value: "Design" },
  { label: "Ecology", value: "Ecology" },
  { label: "Economics", value: "Economics" },
  { label: "Education", value: "Education" },
  { label: "Engineering", value: "Engineering" },
  { label: "Fashion", value: "Fashion" },
  { label: "Film", value: "Film" },
  { label: "Finance", value: "Finance" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Hospitality", value: "Hospitality" },
  { label: "Humanities", value: "Humanities" },
  { label: "International Business", value: "International Business" },
  { label: "International Relations", value: "International Relations" },
  { label: "Journalism", value: "Journalism" },
  { label: "Law", value: "Law" },
  { label: "Life Sciences", value: "Life Sciences" },
  { label: "Marketing", value: "Marketing" },
  { label: "Media Relations", value: "Media Relations" },
  { label: "Medicine", value: "Medicine" },
  { label: "Music", value: "Music" },
  { label: "Natural Sciences", value: "Natural Sciences" },
  { label: "Nursing", value: "Nursing" },
  { label: "Performing Arts", value: "Performing Arts" },
  { label: "Philosophy", value: "Philosophy" },
  { label: "Photography", value: "Photography" },
  { label: "Political Science", value: "Political Science" },
  { label: "Psychology", value: "Psychology" },
  { label: "Public Policy", value: "Public Policy" },
  { label: "Public Relations", value: "Public Relations" }
];

const fieldOptions = [
  { label: "Debate and Public Speaking", value: "Debate and Public Speaking" },
  { label: "Robotics", value: "Robotics" },
  { label: "Creative Writing", value: "Creative Writing" },
  { label: "Critical Thinking", value: "Critical Thinking" },
  { label: "English Language", value: "English Language" },
  { label: "Foreign Language", value: "Foreign Language" },
  { label: "Case Competition", value: "Case Competition" },
  { label: "MUN", value: "MUN" },
  { label: "Math", value: "Math" },
  { label: "Physics", value: "Physics" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Moot Court", value: "Moot Court" },
  { label: "Information Technology", value: "Information Technology" },
  { label: "Model ASEAN", value: "Model ASEAN" },
  { label: "Hackathon", value: "Hackathon" },
  { label: "Startup Challenge", value: "Startup Challenge" }
];

const list = [
  { label: "minStudent", value: "Apple" },
  { label: "最大学生", value: "Pear" },
  { label: "最少教员", value: "Orange" },
  { label: "最大教员", value: "Apple1" },
  { label: "最少观摩", value: "Pear2" },
  { label: "最大观摩", value: "Orange3" }
];

const BaseInfo = props => {
  const { getFieldDecorator, getFieldValue } = props.form;

  const renderCheck = data => {
    const arr = [];
    data.forEach(value => {
      arr.push(
        <Col span={6} style={{ paddingBottom: 8 }}>
          <Checkbox value={value.value}>{value.label}</Checkbox>
        </Col>
      );
    });
    return arr;
  };

  const renderList = data => {
    const arr = [];
    data.forEach(value => {
      console.log(value.value);
      arr.push(
        <Col span={8} style={{ paddingRight: 40 }}>
          <Form.Item label={value.label}>
            {getFieldDecorator(value.value, {
              rules: []
            })(<Input />)}
          </Form.Item>
        </Col>
      );
    });
    return arr;
  };

  const renderSelect = data => {
    const arr = [];
    data.forEach(data => {
      arr.push(<Select.Option value={data.value}>{data.label}</Select.Option>);
    });
    return arr;
  };

  const programCountry = getFieldValue("program_country");
  const selectCity = CITY[programCountry] || [];
  return (
    <Form>
      <Title level={3}>Basic Program Information</Title>
      <Text type="secondary">
        Lets begin with the basic introduction to what you’re about to offer.
      </Text>
      <Row>
        <Col span={10} style={{ paddingRight: 40 }}>
          <Form.Item label="Name of the Program">
            {getFieldDecorator("program_name", {
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Name of the Program" />)}
          </Form.Item>
          <Form.Item label="Country/Region">
            {getFieldDecorator("program_country", {
              rules: [{ required: true, message: "Please input!" }]
            })(
              <Select placeholder="Country/Region">
                {renderSelect(COUNTRY)}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Program Official Site">
            {getFieldDecorator("program_site", {
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Program Official Site" />)}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Name of the Organizing Entity">
            {getFieldDecorator("organizing_entity", {
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Name of the Organizing Entity" />)}
          </Form.Item>
          <Form.Item label="City">
            {getFieldDecorator("city", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Select placeholder="City">
                {renderSelect(selectCity)}
              </Select>
            )}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Program Description</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("describe", {
            rules: [{ required: true, message: "Please input!" }]
          })(<TextArea rows={4} placeholder="Program Description" />)}
        </Form.Item>
      </div>
      <Title level={4}>Relevant Fields of Interest</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("tags", {
            rules: [{ required: true, message: "Please select!" }]
          })(<Checkbox.Group>{renderCheck(options)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>Dates and Duration</Title>
      <Text type="secondary">
        Let us know when is the last day that participants can register for your
        program!
      </Text>
      <Row>
        <Col span={5} style={{ paddingRight: 40 }}>
          <Form.Item label="Program Start Day">
            {getFieldDecorator("program_start_day", {
              rules: [{ required: true, message: "Please select!" }]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
          <Form.Item label="Registration Deadline">
            {getFieldDecorator("deadline", {
              rules: [{ required: true, message: "Please select!" }]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Program End Day">
            {getFieldDecorator("program_end_day", {
              rules: [{ required: true, message: "Please select!" }]
            })(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Types of Participants</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("type", {
            rules: [{ required: true, message: "Please select!" }]
          })(<Checkbox.Group>{renderCheck(fieldOptions)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>
        Registration Cap and Prerequisite for Program Confirmation
      </Title>
      <Row>{renderList(list)}</Row>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default BaseInfo;
