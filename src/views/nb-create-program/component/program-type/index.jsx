import React from "react";
import { Radio, Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setProgram } from "../../../../store/program";

import style from "./index.module.scss";

const data = [
  {
    label: "Summer/Winter School Program",
    value: "1",
    content:
      "Official accredited/non-accredited university programs conducted in the summer or winter school breaks. These programs usually last between 3-12 weeks with a variety of courses \n" +
      "for students to choose from."
  },
  {
    label: "Short Study Tour",
    value: "2",
    content:
      "Reputable programs conducted in collaboration with institutions and/or universities. These programs are usually theme-based, and also provide a cultural-immersion experience for visiting students. Length of programs vary from 3 days to 2 weeks."
  },
  {
    label: "Overseas Internship",
    value: "3",
    content:
      "Arranged internships in various countries done in partnership with start-ups, SMEs, NGOs, and other partnering organisations. These program may involve participants receiving an internship allowance/stipend. Length of programs vary from 3 weeks to 6 months."
  },
  {
    label: "Competition",
    value: "4",
    content:
      "Tournaments, competitions and other international events for both international and local student participants. These programs include, but not limited to, debate competitions, mooting competitions, robotics, public speaking, tech exhibitions, etc."
  }
];

const ProgramType = props => {
  const { setCurrent } = props;
  const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
  const stepData = useSelector(state => state.program.step0);
  const { program_type = "1" } = stepData;
  const dispatch = useDispatch();

  const handleNext = () => {
    validateFields(error => {
      if (!error) {
        const formValue = getFieldsValue();
        setCurrent(1);
        dispatch(
          setProgram({
            type: "step0",
            data: formValue
          })
        );
      }
    });
  };

  const renderRadio = () => {
    const arr = [];
    data.forEach(item => {
      arr.push(
        <div className={style.radio} key={item.value}>
          <Radio value={item.value}>{item.label}</Radio>
          <div className={style.radio_content}>{item.content}</div>
        </div>
      );
    });
    return arr;
  };

  return (
    <div>
      {getFieldDecorator("program_type", {
        initialValue: program_type,
        rules: [{ required: true, message: "Please select!" }]
      })(<Radio.Group>{renderRadio()}</Radio.Group>)}

      <div style={{ paddingTop: 30 }}>
        <Button type="primary" onClick={handleNext}>
          NEXT STEP
        </Button>
      </div>
    </div>
  );
};

export default Form.create()(ProgramType);
