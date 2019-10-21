import React from "react";
import Badge from "@material-ui/core/Badge/Badge";
import NotificationsIcon from "@material-ui/icons/NotificationImportant";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

import Nav from "./component/nav";
import HomeRoute from "routes/home-route";

import style from "./index.module.scss";

const Home = props => {
  const { history } = props;
  const handleChange = data => {
    history.push(data.path);
  };

  return (
    <div className={style.root}>
      <aside className={style.aside}>
        <Nav onChange={handleChange} />
      </aside>
      <section className={style.content}>
        <header className={style.header}>
          <Badge badgeContent={12} color="primary">
            <NotificationsIcon style={{ fontSize: 28 }} />
          </Badge>
          <Avatar className={style.avatar} />
          <div className={style.name}>
            <Typography variant="subtitle1" display="block">
              overline text
            </Typography>
            <Typography variant="caption" display="block">
              caption text
            </Typography>
          </div>
        </header>
        <div className={style.main}>
          <HomeRoute />
        </div>
      </section>
    </div>
  );
};

export default withRouter(Home);
