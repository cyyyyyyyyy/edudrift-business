import React from "react";
import { SideNav, Nav } from "react-sidenav";

import MainRoute from "../routes/main-route";
import EdButton from "../components/EdButton";

import style from "./basic.module.scss";

import logo from "../static/images/logo.png";

const theme = {
  selectionBgColor: 'rgba(242, 153, 74, 0.2)',
};

const menus = [
  {
    key: "user",
    name: "User",
    child: [
      { key: "user-account", name: "User Accounts and Status" },
      { key: "client", name: "Client End Users" },
      { key: "institutional", name: "Institutional Partners" },
      { key: "travel-partners", name: "Travel Partner" },
      { key: "competition", name: "Competition Organisers" }
    ]
  },
  {
    key: "programs",
    name: "Programs"
  },
  {
    key: "bookings",
    name: "Bookings"
  },
  {
    key: "finance",
    name: "Finance"
  }
];

const renderNav = () => {
  let arr = [];
  menus.forEach(menu => {
    let chidArr = [];

    if (menu.child) {
      menu.child.forEach(val => {
        chidArr.push(
          <Nav id={val.key}>
            <a>{val.name}</a>
          </Nav>
        );
      });
    }
    arr.push(
      <Nav id={menu.key}>
        <a style={{fontWeight:'bold'}}>{menu.name}</a>
        {chidArr}
      </Nav>
    );
  });
  return arr;
};

const Basic = () => {
  const handleSelect = (val) => {
    console.log(val)
  };
  return (
    <React.Fragment>
      <header className={style.header}>
        <div className={style.inner}>
          <div className={style.logo}>
            <img src={logo} />
          </div>
          <div className={style.user}>
            <EdButton>112312</EdButton>
          </div>
        </div>
      </header>
      <section className={style.main} >
        <div className={style.inner}>
          <aside className={style.aside}>
            <SideNav selectedPath="" theme={theme} onItemSelection={handleSelect}>
              <ul className={style['aside-top']}>
                <li>Admin Home</li>
                <li>View Site</li>
              </ul>
              <div className={style["aside-nav"]}>
                {renderNav()}
              </div>
            </SideNav>
          </aside>
          <div className={style.content}>
            <MainRoute />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Basic;
