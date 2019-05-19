import React from "react";
import { withRouter, Link } from "react-router-dom";
import { withI18n } from "react-i18next";
import tokenHelper from "utils/tokenHelper";

import MainRoute from "routes/main-route";
import EdButton from "components/EdButton";

import style from "./basic.module.scss";

import logo from "../static/images/logo.png";

@withI18n()
class Basic extends React.Component {
    componentWillMount() {
        const { history } = this.props;
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <header className={style.header}>
                    <div className={style.inner}>
                        <div className={style.logo}>
                            <img src={logo} />
                        </div>
                        <div className={style.user}>
                            <Link to="/sign-in">
                                <EdButton
                                    variant="outlined"
                                    style={{ marginRight: 40, width: 100 }}
                                >
                                    {t("SIGN IN")}
                                </EdButton>
                            </Link>
                            <Link to="/sign-up">
                                <EdButton style={{ width: 100 }}>
                                    {t("SIGN UP")}
                                </EdButton>
                            </Link>
                        </div>
                    </div>
                </header>
                <section className={style.main}>
                    <div className={style.inner}>
                        <MainRoute />
                    </div>
                </section>
                <footer>
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
    }
}

export default withRouter(Basic);
