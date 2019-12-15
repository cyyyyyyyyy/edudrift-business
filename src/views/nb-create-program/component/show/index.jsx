import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button,
  Upload,
  Icon,
  Radio
} from "antd";
import { setProgram } from "../../../../store/program";
import AliyunOSSUpload from "../base/oss-upload";

const { Title, Text } = Typography;

const { TextArea } = Input;

const playList = [
  {
    label: "Visits to Local Attractions are not included in the program",
    value: "1"
  },
  { label: "Organized by the Main Program Organizer", value: "2" },
  { label: "Organized by another Organizing Partner", value: "3" }
];

const Show = props => {
  const { setCurrent } = props;
  const {
    getFieldDecorator,
    getFieldValue,
    setFieldsValue,
    validateFields,
    getFieldsValue
  } = props.form;
  const stepData1 = useSelector(state => state.program.step3);
  const dispatch = useDispatch();

  const {
    program_highlight,
    local_attractions_type,
    program_organiser,
    editions_photo_list,
    organising_team_photo_list
  } = stepData1;

  getFieldDecorator("programKeys", {
    initialValue: program_highlight
      ? program_highlight.map((val, index) => index)
      : [0, 1, 2]
  });

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        const programKeys = getFieldValue("programKeys");
        const program_highlight = programKeys.map(
          val => formValue[`program_highlight_${val}`]
        );
        console.log(program_highlight);
        const { local_attractions_type, program_organiser } = formValue;
        dispatch(
          setProgram({
            type: "step3",
            data: {
              program_highlight,
              local_attractions_type,
              program_organiser
            }
          })
        );
        setCurrent(4);
      }
    });
  };

  const addMore = () => {
    const keys = getFieldValue("programKeys");
    const nextKeys = keys.concat(keys.length);
    setFieldsValue({
      programKeys: nextKeys
    });
  };

  const renderShowList = () => {
    const keys = getFieldValue("programKeys");

    const arr = [];
    if (keys) {
      keys.forEach((k, index) => {
        arr.push(
          <li key={`program${index}`}>
            <Form.Item>
              {getFieldDecorator(`program_highlight_${k}`, {
                initialValue: program_highlight ? program_highlight[k] : "",
                rules: [{ required: true, message: "Please input!" }]
              })(<Input />)}
            </Form.Item>
          </li>
        );
      });
    }
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

  const renderProjectImage = () => {
    return <AliyunOSSUpload />;
  };

  return (
    <Form>
      <Title level={3}>Program Highlight</Title>
      <Text type="secondary">
        Are the lectures discussion based? Are there guest lectures from
        esteemed speakers? How are courses evaluated? List the strengths and
        highlights of your program.
      </Text>
      <ul style={{ width: 500, overflow: "hidden" }}>
        {renderShowList()}
        <li style={{ fontSize: "16px" }}>
          <a onClick={addMore}>
            <Icon type="plus-circle" style={{ paddingRight: 4 }} />
            more
          </a>
        </li>
      </ul>
      <Text type="secondary">
        Upload photos of the previous editions of the course or other relevant
        photos (E.g. lecture session)
      </Text>
      <div style={{ overflow: "hidden", paddingTop: 20 }}>
        {renderProjectImage()}
      </div>
      <Title level={4}>Visiting Local Attractions</Title>
      <Text type="secondary" style={{ margin: "8px 0" }}>
        Let us know a little more about the team behind the non-curriculum
        aspects of the program.
      </Text>
      <Form.Item>
        {getFieldDecorator("local_attractions_type", {
          initialValue: local_attractions_type,
          rules: [{ required: true, message: "Please select!" }]
        })(<Radio.Group>{renderRadio(playList)}</Radio.Group>)}
      </Form.Item>
      <Text type="secondary">Introduction to the Program Organiser</Text>
      <div style={{ paddingTop: 8 }}>
        <Form.Item>
          {getFieldDecorator("program_organiser", {
            initialValue: program_organiser,
            rules: [{ required: true, message: "Please input!" }]
          })(
            <TextArea
              rows={6}
              placeholder="A write-up about the history of the program, its unique selling point, the objectives and aims of the the program that are valuable for the
development of the participants taking part in it. [Max 1000 characters]"
            />
          )}
        </Form.Item>
      </div>
      <Text type="secondary">
        Upload photos of the organising team and/or photos of previous programs
      </Text>
      <div style={{ overflow: "hidden", paddingTop: 20 }}>
        {renderProjectImage()}
      </div>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </Form>
  );
};

export default Show;
