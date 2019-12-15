import React, { useState, useEffect } from "react";
import { Form, Steps } from "antd";
import { useSelector, useDispatch } from "react-redux";

import ProgramType from "./component/program-type";
import BaseInfo from "./component/base-info";
import Plan from "./component/plan";
import Show from "./component/show";
import Requirement from "./component/requirement";
import Stay from "./component/stay";
import Cost from "./component/cost";
import Submit from "./component/submit";
import AliyunOSSUpload from "./component/base/oss-upload";

import { setProgram } from "../../store/program";

import style from "./index.module.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Program Type",
    content: "First-content"
  },
  {
    title: "Basic Program Information",
    content: "Second-content"
  },
  {
    title: "Schedule",
    content: "Last-content"
  },
  {
    title: "Program Highlights",
    content: "Last-content"
  },
  {
    title: "Eligibility",
    content: "Last-content"
  },
  {
    title: "Accommodation",
    content: "Last-content"
  },
  {
    title: "Pricing",
    content: "Last-content"
  },
  {
    title: "Submit Listing",
    content: "Last-content"
  }
];

const NbCreateProgram = props => {
  const { form } = props;
  const [current, setCurrent] = useState(0);
  const programData = useSelector(state => state.program);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onChange = value => {
    dispatch(setProgram({ ...programData, ...value }));
  };

  const typeProps = {
    setCurrent,
    form
  };

  const renderType = () => {
    switch (current) {
      case 0:
        return <ProgramType {...typeProps} />;
      case 1:
        return <BaseInfo {...typeProps} />;
      case 2:
        return <Plan {...typeProps} />;
      case 3:
        return <Show {...typeProps} />;
      case 4:
        return <Requirement {...typeProps} />;
      case 5:
        return <Stay {...typeProps} />;
      case 6:
        return <Cost {...typeProps} />;
      case 7:
        return <Submit {...typeProps} />;
      default:
        return null;
    }
  };

  return (
    <div className={style.main}>
      <header>
        <Steps
          size="small"
          current={current}
          style={{ width: 900, marginLeft: -22, padding: "15px 0 30px 0" }}
          labelPlacement="vertical"
          onChange={data => {
            if (data < current) {
              setCurrent(data);
            }
          }}
        >
          {steps.map((item, index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps>
      </header>
      <div className={style.content}>{renderType()}</div>
    </div>
  );
};

export default Form.create({
  name: "base"
})(NbCreateProgram);
