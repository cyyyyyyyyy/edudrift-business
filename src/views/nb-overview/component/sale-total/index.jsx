import React, { useEffect, useRef } from "react";
import G2 from "@antv/g2";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import style from "../../index.module.scss";

const useStyles = makeStyles(theme => ({
  textPrimary: {
    color: theme.palette.primary.main
  }
}));

const SaleTotal = () => {
  const classes = useStyles();
  const ref = useRef("");

  useEffect(() => {
    const colorMap = {
      Asia: G2.Global.colors[0],
      Americas: G2.Global.colors[1],
      Europe: G2.Global.colors[2],
      Oceania: G2.Global.colors[3]
    };
    axios
      .get("https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json")
      .then(({ data }) => {
        console.log(data);
        const chart = new G2.Chart({
          container: ref.current,
          forceFit: true,
          height: 450,
          animate: true
        });
        chart.source(data);
        // 为各个字段设置别名
        chart.scale({
          LifeExpectancy: {
            alias: "人均寿命（年）"
          },
          Population: {
            type: "pow",
            alias: "人口总数"
          },
          GDP: {
            alias: "人均国内生产总值($)"
          },
          Country: {
            alias: "国家/地区"
          }
        });
        chart.axis("GDP", {
          label: {
            formatter: function formatter(value) {
              return (value / 1000).toFixed(0) + "k";
            } // 格式化坐标轴的显示
          }
        });
        chart.tooltip({
          showTitle: false // 不显示默认标题
        });
        chart.legend("Population", false); // 该图表默认会生成多个图例，设置不展示 Population 和 Country 两个维度的图例
        chart
          .point()
          .position("GDP*LifeExpectancy")
          .size("Population", [4, 65])
          .color("continent", function(val) {
            return colorMap[val];
          })
          .shape("circle")
          .tooltip("Country*Population*GDP*LifeExpectancy")
          .style("continent", {
            lineWidth: 1,
            strokeOpacity: 1,
            fillOpacity: 0.3,
            opacity: 0.65,
            stroke: function stroke(val) {
              return colorMap[val];
            }
          });
        chart.render();
      });
  });

  return (
    <Card className={style.card} style={{ height: 550 }}>
      <CardContent>
        <Typography variant="subtitle1" className={classes.textPrimary}>
          ANALYTICS
        </Typography>
        <Typography variant="subtitle1">TOTAO PROGRAMS SALE</Typography>
        <div ref={ref} />
      </CardContent>
    </Card>
  );
};

export default SaleTotal;
