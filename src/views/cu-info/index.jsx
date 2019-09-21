import React from "react";
import { withTranslation } from "react-i18next";
import cookie from "js-cookie";
import { Link } from "react-router-dom";

import countries from "utils/countries";
import { infoMenu } from "utils/select-options";

import InfoRoute from "routes/info-route";
import { getClientsById } from "request/accounts";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

import style from "./index.module.scss";

const EdListItem = withStyles({
  root: {
    backgroundColor: "#2C3250",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottom: "2px solid #eee",
    color: "#fff",
    "&$selected, &$selected:hover, &$selected:focus": {
      backgroundColor: "#fff",
      color: "#2C3250"
    }
  },
  button: {
    "&:hover": {
      backgroundColor: "#2C3250"
    },
    "&:focus": {
      backgroundColor: "#2C3250"
    }
  },
  selected: {
    backgroundColor: "#fff"
  }
})(ListItem);

@withTranslation()
class CuInfo extends React.Component {
  state = {};

  componentWillMount() {
    let userId = cookie.get("userId");
    getClientsById(userId).then(({ data }) => {
      this.setState(data);
    });
  }

  renderMenus = t => {
    let arr = [];
    infoMenu(t).forEach(val =>
      arr.push(
        <Link key={val.value} to={`/client/info/${val.value}`}>
          <EdListItem button>{val.label}</EdListItem>
        </Link>
      )
    );
    return arr;
  };

  render() {
    const { t } = this.props;
    const { nickname, nationality } = this.state;
    let country = "";
    if (nationality) {
      country = countries.find(val => val.value === nationality).label;
    }
    return (
      <section className={style.warp}>
        <header className={style.header}>
          <img className={style.photo} />
          <ul className={style.info}>
            <li>
              <h2>{`${nickname}`} </h2>
            </li>
            <li>
              <p>{country}</p>
            </li>
            <li>
              <span>Manage Profile</span>
            </li>
          </ul>
        </header>
        <div className={style.main}>
          <aside className={style.aside}>
            <List>{this.renderMenus(t)}</List>
          </aside>
          <div className={style.content}>
            <InfoRoute />
          </div>
        </div>
      </section>
    );
  }
}

export default CuInfo;
