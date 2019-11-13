import React, { useState } from "react";
import { Form, Steps } from "antd";

import ProgramType from "./component/program-type";
import BaseInfo from "./component/base-info";
import Plan from "./component/plan";
import Show from "./component/show";
import Requirement from "./component/requirement";
import Stay from "./component/stay";
import Cost from "./component/cost";

import style from "./index.module.scss";

const { Step } = Steps;

const steps = [
  {
    title: "项目类型",
    content: "First-content"
  },
  {
    title: "基本信息",
    content: "Second-content"
  },
  {
    title: "项目计划",
    content: "Last-content"
  },
  {
    title: "项目展示",
    content: "Last-content"
  },
  {
    title: "资格要求",
    content: "Last-content"
  },
  {
    title: "住宿",
    content: "Last-content"
  },
  {
    title: "费用",
    content: "Last-content"
  }
];

const NbCreateProgram = () => {
  const [current, setCurrent] = useState(4);

  const renderType = () => {
    switch (current) {
      case 0:
        return <ProgramType />;
      case 1:
        return <BaseInfo />;
      case 2:
        return <Plan />;
      case 3:
        return <Show />;
      case 4:
        return <Requirement />;
      case 5:
        return <Stay />;
      case 6:
        return <Cost />;
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
          style={{ width: 800, marginLeft: -22, padding: "15px 0 30px 0" }}
          labelPlacement="vertical"
          onChange={data => setCurrent(data)}
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

export default NbCreateProgram;
