import React, { useState } from "react";
import { Modal, Form, Select, Input, Button } from "antd";

import { register } from "request/accounts";

import style from "./index.module.scss";

import logo from "static/images/logo.png";
import undraw from "static/images/undraw.png";
import showImage1 from "static/images/show-1.png";
import showImage2 from "static/images/show-2.png";
import showImage3 from "static/images/show-3.png";
import showImage4 from "static/images/show-4.png";
import choice1 from "static/images/choice-1.png";
import choice2 from "static/images/choice-2.png";
import choice3 from "static/images/choice-3.png";
import choice4 from "static/images/choice-4.png";
import choice5 from "static/images/choice-5.png";
import nature1 from "static/images/nature-1.png";
import nature2 from "static/images/nature-2.png";
import nature3 from "static/images/nature-3.png";
import nature4 from "static/images/nature-4.png";
import nature5 from "static/images/nature-5.png";
import nature6 from "static/images/nature-6.png";

const NbIndex = props => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("");

  const {
    getFieldDecorator,
    setFieldsValue,
    getFieldValue,
    getFieldsValue
  } = props.form;

  const handleCreate = async () => {
    const { email, password } = getFieldsValue();
    const res = await register({ email, password, role: "organizer" });
    console.log(res);
  };

  const renderLogIn = () => {
    return (
      <div>
        <h5 className={style.modal_title}>SIGN IN</h5>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Password" type="password" />)}
        </Form.Item>
        <p className={style.modal_link}>Forgot you password ?</p>
        <Button type="primary" className={style.modal_btn}>
          SIGN IN
        </Button>
        <p style={{ paddingBottom: 10 }}>No account yet?</p>
        <p className={style.modal_link} onClick={() => setType("create")}>
          CREATE ACCOUNT
        </p>
      </div>
    );
  };

  const renderCreate = () => {
    return (
      <div>
        <h5 className={style.modal_title}>CREATE ACCOUNT</h5>
        <Form.Item>
          {getFieldDecorator("first_name", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="First Name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("last_name", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Last name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input placeholder="Password" />)}
        </Form.Item>
        <Button
          type="primary"
          className={style.modal_btn}
          onClick={handleCreate}
        >
          CREATE ACCOUNT
        </Button>
        <p style={{ paddingBottom: 10 }}>Already have an EduDrift account?</p>
        <p className={style.modal_link} onClick={() => setType("login")}>
          SIGN IN
        </p>
      </div>
    );
  };

  const renderModal = () => {
    let render;
    if (type === "login") {
      render = renderLogIn();
    }
    if (type === "create") {
      render = renderCreate();
    }
    return (
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
      >
        {render}
      </Modal>
    );
  };

  const openModal = type => {
    setVisible(true);
    setType(type);
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.inner}>
          <ul className={style.log_bar}>
            <li>
              <img className={style.log} src={logo} alt="" />
            </li>
            <li className={style.log_btn}>
              <a onClick={() => openModal("login")}>SIGN IN</a>
              <a onClick={() => openModal("create")}>CREATE ACCOUNT</a>
            </li>
          </ul>
          <h3 className={style.header_h3}>List your Event on EduDrift</h3>
          <p className={style.header_p}>
            Expand your admission pool by listing your event for free on
            EduDrift.
          </p>
          <a className={style.header_btn}>LIST YOUR EVENT</a>
        </div>
      </header>
      <section className={style.info}>
        <div className={style.inner}>
          <ul className={style.show}>
            <li className={style.show_left}>
              <h4 className={style.show_left_h4}>
                WHAT IS EDUDRIFT FOR EDUCATION INSTITUTIONS AND STUDENT
                ORGANISATIONS?
              </h4>
              <p>
                EduDrift serves as an education ticketing platform designed for
                organizations to host student events & programs, and to assist
                in the creation of new opportunities for students around the
                world.
              </p>
            </li>
            <li>
              <img className={style.show_right_img} src={undraw} />
            </li>
          </ul>
          <ul className={style.show_list}>
            <li>
              <div>
                <img src={showImage4} alt="" />
              </div>
              <p>Fast enrollment system</p>
            </li>
            <li>
              <div>
                <img src={showImage2} alt="" />
              </div>
              <p>High quality and rich international resources</p>
            </li>
            <li>
              <div>
                <img src={showImage1} alt="" />
              </div>
              <p>Convenient international payment</p>
            </li>
            <li>
              <div>
                <img src={showImage3} alt="" />
              </div>
              <p>Multiple online promotion channels</p>
            </li>
          </ul>
          <ul className={style.show_bottom}>
            <li>
              <h5>SUPPORTED PROGRAMS</h5>
              <ul className={style.show_bottom_list}>
                <li> • Summer/Winter School</li>
                <li> • Overseas Internships</li>
                <li> • Competitions</li>
                <li> • Conferences & Trainings</li>
                <li> • Online Courses (TBC)</li>
                <li> • Internal Unpublished Listings</li>
              </ul>
            </li>
            <li>
              <h5>OFFERED SERVICES</h5>
              <ul className={style.show_bottom_list}>
                <li> • Summer/Winter School</li>
                <li> • Overseas Internships</li>
                <li> • Competitions</li>
                <li> • Conferences & Trainings</li>
                <li> • Online Courses (TBC)</li>
                <li> • Internal Unpublished Listings</li>
              </ul>
            </li>
            <li>
              <h5>PROJECTED OUTCOMES</h5>
              <ul className={style.show_bottom_list}>
                <li> • Summer/Winter School</li>
                <li> • Overseas Internships</li>
                <li> • Competitions</li>
                <li> • Conferences & Trainings</li>
                <li> • Online Courses (TBC)</li>
                <li> • Internal Unpublished Listings</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className={style.center_bar}>
        <div className={style.inner}>
          <h3>List your Event on EduDrift</h3>
          <p>
            Expand your admission pool by listing your event for free on
            EduDrift.
          </p>
        </div>
      </section>
      <section>
        <div className={style.inner}>
          <h3 className={style.choice_title}>
            WHY WOULD STUDENTS CHOOSE EDUDRIFT?
          </h3>
          <p className={style.choice_p}>
            Students and young adults around the world can expect the to find a
            trusted program that fit their needs when making decisions to travel
            and engage with opportunities beyond their borders. EduDrift is the
            global marketplace for learning.
          </p>
          <p className={style.choice_p}>
            With our EduDrift Marketplace of Learning, Customizable Search
            Perimeters and Program Structured Displays, students can better
            identify programs of their needs and venture abroad to pursue these
            opportunities.
          </p>
          <ul className={style.choice_list}>
            <li>
              <div>
                <img alt="" src={choice1} />
              </div>
              <p>Comprehensive range of educational opportunities</p>
            </li>
            <li>
              <div>
                <img alt="" src={choice2} />
              </div>
              <p>
                Top education destinations previously inaccessible due to the
                asymmetry of information available
              </p>
            </li>
            <li>
              <div>
                <img alt="" src={choice3} />
              </div>
              <p>
                Reliable partners (verified) with extensive experience to keep
                up to program promises
              </p>
            </li>
            <li>
              <div>
                <img alt="" src={choice4} />
              </div>
              <p>
                Platform intermediary to communicate and resolve program issues
                by engaging with providers
              </p>
            </li>
            <li>
              <div>
                <img alt="" src={choice5} />
              </div>
              <p>Easy Booking and Tracking of Participation in Programs</p>
            </li>
          </ul>
          <h3 className={style.nature_h3}>
            NATURE OF PROGRAMS AVAILABLE ON EDUDRIFT
          </h3>
          <ul className={style.nature_list}>
            <li>
              <div>
                <img src={nature1} />
              </div>
              <div>
                <h5>Cultural Activities</h5>
                <p>City tours, site visits, local places of interests, etc.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={nature4} />
              </div>
              <div>
                <h5>Airport Transfer</h5>
                <p>
                  Scheduled transport service (chartered bus) for
                  pick-up/send-off
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src={nature2} />
              </div>
              <div>
                <h5>Meal Plans</h5>
                <p>Arrangement of local catered meals as part of program.</p>
              </div>
            </li>
            <li>
              <div>
                <img src={nature5} />
              </div>
              <div>
                <h5>Transportation</h5>
                <p>
                  Ferry service between hotel, restaurants, universities, etc.
                </p>
              </div>
            </li>
            <li>
              <div>
                <img src={nature3} />
              </div>
              <div>
                <h5>Safety & Accountability</h5>
                <p>Chaperones, student ambassadors and on-site service staff</p>
              </div>
            </li>
            <li>
              <div>
                <img src={nature6} />
              </div>
              <div>
                <h5>Accommodation</h5>
                <p>
                  Housing services for the duration of the program (e.g. hotel,
                  hostel, live-in)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer className={style.footer}>
        <p>
          EduDrift Pte. Ltd. (Singapore) Company Registration Number: 201830263E
          Email:partners@edudrift.com
        </p>
      </footer>
      {renderModal()}
    </>
  );
};

export default Form.create()(NbIndex);
