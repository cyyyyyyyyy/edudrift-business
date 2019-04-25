import React from "react";
import { Link } from "react-router-dom";
import { SideNav, Nav } from "react-sidenav";

import MainRoute from "../routes/main-route";
import EdButton from "../components/EdButton";

import style from "./basic.module.scss";

import logo from "../static/images/logo.png";

const theme = {
    selectionBgColor: "rgba(242, 153, 74, 0.2)"
};

const menus = [
    {
        key: "user",
        name: "User",
        child: [
            { key: "user-accounts", name: "User Accounts and Status" },
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
                        <Link to={`/${val.key}`}>
                            <a>{val.name}</a>
                        </Link>
                    </Nav>
                );
            });
        }
        arr.push(
            <Nav id={menu.key}>
                <a style={{ fontWeight: "bold" }}>{menu.name}</a>
                {chidArr}
            </Nav>
        );
    });
    return arr;
};

const Basic = () => {
    console.log(window.history);
    const handleSelect = val => {
        console.log(val);
    };
    return (
        <React.Fragment>
            <header className={style.header}>
                <div className={style.inner}>
                    <div className={style.logo}>
                        <img src={logo} />
                    </div>
                    <div className={style.user}>
                        <EdButton style={{ width: 120 }} size="large">
                            112312
                        </EdButton>
                    </div>
                </div>
            </header>
            <section className={style.main}>
                <div className={style.inner}>
                    <aside className={style.aside}>
                        <div className={style["aside-top"]}>
                            <SideNav theme={theme}>
                                <Nav id="home">
                                    <a style={{ fontWeight: "bold" }}>
                                        Admin Home
                                    </a>
                                </Nav>
                                <Nav id="view">
                                    <a style={{ fontWeight: "bold" }}>
                                        View Site
                                    </a>
                                </Nav>
                            </SideNav>
                        </div>
                        <div className={style["aside-nav"]}>
                            <SideNav
                                theme={theme}
                            >
                                {renderNav()}
                            </SideNav>
                        </div>
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