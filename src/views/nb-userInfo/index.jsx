import React, { useState } from "react";
import { Form, Steps } from "antd";

import BaseInfo from "./component/base-info";
import Contact from "./component/contact";
import CompanyInfo from "./component/company-info";
import Submit from "./component/submit";

import style from "./index.module.scss";

const { Step } = Steps;

const steps = [
  {
    title: "基本信息",
    content: "First-content"
  },
  {
    title: "联系方式",
    content: "Second-content"
  },
  {
    title: "公司简历",
    content: "Second-content"
  },
  {
    title: "完成",
    content: "Second-content"
  }
];

const NbUserInfo = props => {
  const { form } = props;
  const [current, setCurrent] = useState(0);

  const renderType = () => {
    switch (current) {
      case 0:
        return <BaseInfo form={form} />;
      case 1:
        return <Contact form={form} />;
      case 2:
        return <CompanyInfo form={form} />;
      case 3:
        return <Submit form={form} />;
    }
  };

  return (
    <div className={style.main}>
      <header>
        <Steps
          size="small"
          current={current}
          style={{ width: 400, marginLeft: -22, padding: "15px 0 30px 0" }}
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
  onFieldsChange: (props, changedValues, allValues) => {}
})(NbUserInfo);
