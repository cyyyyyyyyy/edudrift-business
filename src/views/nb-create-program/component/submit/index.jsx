import React, { useState } from "react";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;

const Submit = () => {
  return (
    <div>
      <Title level={3}>项目新建完成!</Title>
      <Text type="secondary">
        Choose the program type that best represents the nature of your study
        program. [Important note] An accurate representation of the program
        provides tailored areas of input for your content.
      </Text>
      <footer style={{ paddingTop: 20 }}>
        <Button type="primary" style={{ marginRight: 20 }}>
          提交项目
        </Button>
        <Button>仅保存</Button>
      </footer>
    </div>
  );
};

export default Submit;
