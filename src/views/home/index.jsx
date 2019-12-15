import React from "react";
import Badge from "@material-ui/core/Badge/Badge";
import NotificationsIcon from "@material-ui/icons/NotificationImportant";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";

import Nav from "./component/nav";
import MainRoute from "routes/nb-home-route";

import style from "./index.module.scss";
import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
  "/home": "home",
  "/home/overview": "overview",
  "/home/program": "program",
  "/home/user-info": "user-info",
  "/home/create": "create-program"
};

const Home = props => {
  const { history } = props;
  const handleChange = data => {
    history.push(data.path);
  };

  const { location } = props;
  const pathSnippets = location.pathname.split("/").filter(i => i);


  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

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
        <div className={style.breadcrumb}>
          <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
        </div>
        <div className={style.main}>
          <MainRoute />
        </div>
      </section>
    </div>
  );
};

export default withRouter(Home);
