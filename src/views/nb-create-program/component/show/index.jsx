import React, { useState } from "react";
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

const { Title, Text } = Typography;

const { TextArea } = Input;

const playList = [
  { label: "与项目主办机构相同", value: "1" },
  { label: "不，有其他组织负责", value: "2" }
];

const Show = props => {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;
  getFieldDecorator("projectKeys", { initialValue: [1, 2, 3] });
  getFieldDecorator("projectImageKeys", {
    initialValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });

  const addMore = () => {
    const keys = getFieldValue("projectKeys");
    const nextKeys = keys.concat(keys.length++);
    setFieldsValue({
      projectKeys: nextKeys
    });
  };

  const renderShowList = () => {
    const keys = getFieldValue("projectKeys");

    const arr = [];
    if (keys) {
      keys.forEach((k, index) => {
        arr.push(
          <li key={`project${index}`} style={{ paddingTop: 10 }}>
            {getFieldDecorator(`project_show[${k}]`, {})(<Input />)}
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
    const keys = getFieldValue("projectImageKeys");

    const arr = [];
    if (keys) {
      keys.forEach((k, index) => {
        arr.push(
          <li
            style={{ float: "left", paddingRight: 12 }}
            key={`projectImage${index}`}
          >
            {getFieldDecorator(`project_image[${k}]`, {})(
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={true}
              >
                <div>
                  <Icon type="plus" />
                  <div className="ant-upload-text">Upload</div>
                </div>
              </Upload>
            )}
          </li>
        );
      });
    }
    return arr;
  };

  return (
    <Form>
      <Title level={3}>项目展示</Title>
      <Text type="secondary">
        Are the lectures discussion based? Are there guest lectures from
        esteemed speakers? How are courses evaluated? List the strengths and
        highlights of your program.
      </Text>
      <ul style={{ width: 500, overflow: "hidden" }}>
        {renderShowList()}
        <li>
          <a onClick={addMore}>add</a>
        </li>
      </ul>
      <Text type="secondary">
        Upload photos of the previous editions of the course or other relevant
        photos (E.g. lecture session)
      </Text>
      <ul style={{ overflow: "hidden", paddingTop: 20 }}>
        {renderProjectImage()}
      </ul>
      <Title level={4}>组织游玩(可选)</Title>
      <Text type="secondary" style={{ marginTop: 14 }}>
        Let us know a little more about the team behind the non-curriculum
        aspects of the program.
      </Text>
      <div style={{ marginBottom: 14 }}>
        {getFieldDecorator("cannel", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Radio.Group>{renderRadio(playList)}</Radio.Group>)}
      </div>
      <Text type="secondary" s>
        Introduction to the Program Organiser
      </Text>
      <div>
        <Form.Item>
          {getFieldDecorator("organiser", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <TextArea
              rows={6}
              placeholder="A write-up about the history of the program, its unique selling point, the objectives and aims of the the program that are valuable for the
development of the participants taking part in it. [Max 1000 characters]"
            />
          )}
        </Form.Item>
      </div>
      <ul style={{ overflow: "hidden", paddingTop: 20 }}>
        {renderProjectImage()}
      </ul>
      <div style={{ paddingTop: 30 }}>
        <Button type="primary">NEXT STEP</Button>
      </div>
    </Form>
  );
};

export default Show;
