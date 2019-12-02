import React from "react";
import { Button, Form, Typography } from "antd";

const { Title, Text } = Typography;

const Submit = props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <Title level={3}>补充资料完成!</Title>
      <Text type="secondary">
        You’ve successful completed all the required information!
      </Text>
      <div>
        <Button type="primary">提交</Button>
      </div>
    </Form>
  );
};

export default Submit;
