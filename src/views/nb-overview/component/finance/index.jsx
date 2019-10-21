import React, { useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Chart from "./chart";

import style from "./index.module.scss";

const Finance = () => {
  const renderList = () => {
    const arr = [];
    [1, 2, 3].forEach(data => {
      arr.push(
        <li className={style.list} key={data}>
          <div className={style.line} />
          <div className={style.text}>
            <Typography variant="h6">123,123</Typography>
            <Typography variant="overline">Total Amount</Typography>
          </div>
          <Chart />
        </li>
      );
    });
    return arr;
  };

  return (
    <Card className={style.card} style={{ height: 334 }}>
      <CardContent>
        <Typography variant="subtitle1">FINANCE</Typography>
        <ul>{renderList()}</ul>
      </CardContent>
    </Card>
  );
};

export default Finance;
