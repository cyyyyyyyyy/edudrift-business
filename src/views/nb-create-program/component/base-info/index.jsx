import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
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

import { setProgram } from "../../../../store/program";
import { CITY, COUNTRY } from "../../../../constant/city";

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
  { label: "Minimum Amount of Students", value: "minimum_students" },
  {
    label: "Registration Cap for Students",
    value: "registration_students"
  },
  {
    label: "Minimum Amount of Teaching Staff",
    value: "minimum_teaching_staff"
  },
  {
    label: "Registration Cap for Teaching Staff",
    value: "registration_teaching_staff"
  },
  {
    label: "Minimum Amount of Observers",
    value: "minimum_observers"
  },
  {
    label: "Registration Cap for Observers",
    value: "registration_observers"
  }
];

const BaseInfo = props => {
  const { setCurrent } = props;
  const {
    getFieldDecorator,
    getFieldValue,
    validateFields,
    getFieldsValue
  } = props.form;
  const stepData = useSelector(state => state.program.step1);
  const {
    program_name,
    program_country,
    program_site,
    organizing_entity,
    city,
    program_describe,
    fields_interest,
    program_start_day,
    deadline,
    program_end_day,
    type_participants,
    minimum_students,
    registration_students,
    minimum_teaching_staff,
    registration_teaching_staff,
    minimum_observers,
    registration_observers
  } = stepData;

  console.log(stepData);

  const dispatch = useDispatch();

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        const { program_start_day, program_end_day, deadline } = formValue;
        dispatch(
          setProgram({
            type: "step1",
            data: {
              ...formValue,
              program_start_day: program_start_day.format("YYYY-MM-DD") || "",
              program_end_day: program_end_day.format("YYYY-MM-DD") || "",
              deadline: deadline.format("YYYY-MM-DD") || ""
            }
          })
        );
        setCurrent(2);
      }
    });
  };

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
              initialValue: stepData[value.value],
              rules: [{ required: true, message: "Please input!" }]
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
  const programStartDay = getFieldValue("program_start_day");
  const programEndDay = getFieldValue("program_end_day");
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
              initialValue: program_name,
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Name of the Program" />)}
          </Form.Item>
          <Form.Item label="Country/Region">
            {getFieldDecorator("program_country", {
              initialValue: program_country,
              rules: [{ required: true, message: "Please input!" }]
            })(
              <Select placeholder="Country/Region">
                {renderSelect(COUNTRY)}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Program Official Site">
            {getFieldDecorator("program_site", {
              initialValue: program_site,
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Program Official Site" />)}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Name of the Organizing Entity">
            {getFieldDecorator("organizing_entity", {
              initialValue: organizing_entity,
              rules: [{ required: true, message: "Please input!" }]
            })(<Input placeholder="Name of the Organizing Entity" />)}
          </Form.Item>
          <Form.Item label="City">
            {getFieldDecorator("city", {
              initialValue: city,
              rules: [{ required: true, message: "Please input!" }]
            })(<Select placeholder="City">{renderSelect(selectCity)}</Select>)}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Program Description</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("program_describe", {
            initialValue: program_describe,
            rules: [{ required: true, message: "Please input!" }]
          })(<TextArea rows={4} placeholder="Program Description" />)}
        </Form.Item>
      </div>
      <Title level={4}>Relevant Fields of Interest</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("fields_interest", {
            initialValue: fields_interest,
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
              initialValue: program_start_day ? moment(program_start_day) : "",
              rules: [{ required: true, message: "Please select!" }]
            })(
              <DatePicker
                format={dateFormat}
                disabledDate={startValue => {
                  console.log(startValue);
                  if (!startValue || !programEndDay) {
                    return false;
                  }
                  return startValue.valueOf() > programEndDay.valueOf();
                }}
              />
            )}
          </Form.Item>
          <Form.Item label="Registration Deadline">
            {getFieldDecorator("deadline", {
              initialValue: deadline ? moment(deadline) : "",
              rules: [{ required: true, message: "Please select!" }]
            })(
              <DatePicker
                format={dateFormat}
                disabledDate={endValue => {
                  if (!programStartDay) {
                    return true;
                  }
                  return programStartDay.valueOf() <= endValue.valueOf();
                }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Program End Day">
            {getFieldDecorator("program_end_day", {
              initialValue: program_end_day ? moment(program_end_day) : "",
              rules: [{ required: true, message: "Please select!" }]
            })(
              <DatePicker
                format={dateFormat}
                disabledDate={endValue => {
                  if (!endValue || !programStartDay) {
                    return false;
                  }
                  return endValue.valueOf() <= programStartDay.valueOf();
                }}
              />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Title level={4}>Types of Participants</Title>
      <div>
        <Form.Item>
          {getFieldDecorator("type_participants", {
            initialValue: type_participants,
            rules: [{ required: true, message: "Please select!" }]
          })(<Checkbox.Group>{renderCheck(fieldOptions)}</Checkbox.Group>)}
        </Form.Item>
      </div>
      <Title level={4}>
        Registration Cap and Prerequisite for Program Confirmation
      </Title>
      <Row>{renderList(list)}</Row>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </Form>
  );
};

export default Form.create()(BaseInfo);
