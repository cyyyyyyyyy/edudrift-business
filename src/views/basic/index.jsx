import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainRoute from "routes/main-route";
import Button from "components/EdButton";

import style from "./index.module.scss";

import logo from "../../static/images/logo.png";

const Basic = props => {
    const { t } = useTranslation();
    const { history } = props;
    let pathName = history.location.pathname.slice(1);
    pathName = pathName.split("/");
    pathName = pathName[0];
    return (
        <React.Fragment>
            <header className={style.header}>
                <div className={style.inner}>
                    <div className={style.logo}>
                        <img src={logo} />
                    </div>
                    <div className={style.user}>
                        <Link to={`/${pathName}/sign-in`}>
                            <Button
                                variant="outlined"
                                style={{ marginRight: 40, width: 100 }}
                            >
                                {t("SIGN IN")}
                            </Button>
                        </Link>
                        <Link to={`/${pathName}/sign-up`}>
                            <Button style={{ width: 100 }}>
                                {t("SIGN UP")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <section className={style.main}>
                <div className={style.inner}>
                    <MainRoute />
                </div>
            </section>
            <footer className={style.footer}>
                <div className={style.footLine}>
                    <ul>
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>
                <div className={style.footContent} />
            </footer>
        </React.Fragment>
    );
};

export default withRouter(Basic);
