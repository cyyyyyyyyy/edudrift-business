import React, { useEffect, useRef } from "react";
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import style from "../../index.module.scss";

const data = [
  {
    type: "评估中",
    percent: 0.23
  },
  {
    type: "设计中",
    percent: 0.28
  },
  {
    type: "正在开发",
    percent: 0.3
  },
  {
    type: "已上线",
    percent: 0.19
  }
];

const useStyles = makeStyles(theme => ({
  textPrimary: {
    color: theme.palette.primary.main
  }
}));

const Percentage = () => {
  const classes = useStyles();
  const ref = useRef("");

  useEffect(() => {
    const sum = 500;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "map",
      callback: function callback(row) {
        row.value = parseInt(sum * row.percent);
        return row;
      }
    });
    const chart = new G2.Chart({
      container: ref.current,
      forceFit: true,
      height: 450,
      padding: "auto",
      animate: true
    });
    chart.source(dv);
    chart.tooltip(false);
    chart.coord("theta", {
      radius: 0.82,
      innerRadius: 0.8
    });
    chart
      .intervalStack()
      .position("percent")
      .color("type", ["#0a7aca", "#0a9afe", "#4cb9ff", "#8ed1ff"])
      .opacity(1);
    chart.render();
  });

  return (
    <Card className={style.card} style={{ height: 550 }}>
      <CardContent>
        <Typography variant="subtitle1" className={classes.textPrimary}>
          ANALYTICS
        </Typography>
        <Typography variant="subtitle1">PERCENTAGE OF PARTICIPATION</Typography>
        <div ref={ref} />;
      </CardContent>
    </Card>
  );
};

export default Percentage;
