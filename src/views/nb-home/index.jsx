import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

import HomeRoute from "../../routes/nb-home-route";

import style from "./index.module.scss";

const breadcrumbNameMap = {
  "/nb-home": "overview",
  "/nb-home/create": "create-program"
};

const NbHome = props => {
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
    <>
      <div className={style.breadcrumb}>
        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
      </div>
      <HomeRoute />
    </>
  );
};

export default withRouter(NbHome);
