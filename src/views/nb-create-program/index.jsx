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

import { setProgram } from "../../store/program";

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
  },
  {
    title: "提交",
    content: "Last-content"
  }
];

const NbCreateProgram = props => {
  const { form } = props;
  const [current, setCurrent] = useState(0);
  const programData = useSelector(state => state.program);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProgram({
        project_type: Form.createFormField({
          name: "project_type",
          value: "1"
        })
      })
    );
  }, []);

  const onChange = value => {
    dispatch(setProgram({ ...programData, ...value }));
  };

  const renderType = () => {
    switch (current) {
      case 0:
        return <ProgramType form={form} />;
      case 1:
        return <BaseInfo form={form} />;
      case 2:
        return <Plan form={form} />;
      case 3:
        return <Show form={form} />;
      case 4:
        return <Requirement form={form} />;
      case 5:
        return <Stay form={form} />;
      case 6:
        return <Cost form={form} />;
      case 7:
        return <Submit form={form} />;
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

export default Form.create({
  name: "base",
  onFieldsChange: (props, changedValues, allValues) => {
    console.log(changedValues);
    // const { onChange } = props;
    // const dispatch = useDispatch();
    // dispatch(setProgram(allValues));
    // onChange(allValues);
  }
})(NbCreateProgram);
