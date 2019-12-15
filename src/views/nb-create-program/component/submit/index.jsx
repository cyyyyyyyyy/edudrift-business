import React, { useState } from "react";
import { Typography, Button } from "antd";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetProgram } from "../../../../store/program";

const { Title, Text } = Typography;

const Submit = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(resetProgram());
    history.push("/home/overview");
  };

  return (
    <div>
      <Title level={3}>Your Listing is ready to be submitted!</Title>
      <Text type="secondary">
        Choose the program type that best represents the nature of your study
        program. [Important note] An accurate representation of the program
        provides tailored areas of input for your content.
      </Text>
      <footer style={{ paddingTop: 20 }}>
        <Button
          onClick={handleSubmit}
          type="primary"
          style={{ marginRight: 20 }}
        >
          Submit Listing
        </Button>
        <Button>Save to Draft First</Button>
      </footer>
    </div>
  );
};

export default withRouter(Submit);
