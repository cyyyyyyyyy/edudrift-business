import React from "react";
import { Col, Form, Input, Row, Typography, Upload, Icon } from "antd";

const { Title, Text } = Typography;

const CompanyInfo = props => {
  const { getFieldDecorator } = props.form;

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <Form>
      <Title level={3}>公司简介</Title>
      <Text type="secondary">
        Whether the program is going to take place for the first time or have
        had multiple editions over the years, participants will be keen to know
        more about it!
      </Text>
      <Form.Item label="Introduction to the Company">
        {getFieldDecorator("project_name", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input.TextArea
            rows={5}
            placeholder="A write-up about the program organiser’s previous experience, the years in the industry, the range of other programs offered and information that may contribute to the reliability of the program and the fulfiling of promises made in the program details offered."
          />
        )}
      </Form.Item>
      <div>
        <Form.Item label="Company Logo">
          {getFieldDecorator("project_name", {})(
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
            >
              {uploadButton}
            </Upload>
          )}
        </Form.Item>
      </div>
      <div>
        <Form.Item label="Upload photos of the organising team and/or photos of previous programs">
          {getFieldDecorator("project_name", {})(
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
            >
              {uploadButton}
            </Upload>
          )}
        </Form.Item>
      </div>
    </Form>
  );
};

export default CompanyInfo;
