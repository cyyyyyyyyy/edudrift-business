import React, { useEffect, useRef } from "react";
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";

import style from "./index.module.scss";

const data = [
  {
    month: "Jan",
    Tokyo: 7.0
  },
  {
    month: "Feb",
    Tokyo: 6.9
  },
  {
    month: "Mar",
    Tokyo: 9.5
  },
  {
    month: "Apr",
    Tokyo: 14.5
  },
  {
    month: "May",
    Tokyo: 18.4
  },
  {
    month: "Jun",
    Tokyo: 21.5
  },
  {
    month: "Jul",
    Tokyo: 25.2
  },
  {
    month: "Aug",
    Tokyo: 26.5
  },
  {
    month: "Sep",
    Tokyo: 23.3
  },
  {
    month: "Oct",
    Tokyo: 18.3
  },
  {
    month: "Nov",
    Tokyo: 13.9
  },
  {
    month: "Dec",
    Tokyo: 9.6
  }
];

const Chart = () => {
  const ref = useRef("");

  useEffect(() => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo"], // 展开字段集
      key: "city", // key字段
      value: "temperature" // value字段
    });
    const chart = new G2.Chart({
      container: ref.current,
      forceFit: true,
      animate: true,
      height: 60,
      padding: [0, 0, 0, 0]
    });
    chart.source(dv, {
      temperature: {
        min: 0,
        max: 30
      }
    });
    chart.tooltip(false);
    chart.axis("temperature", false);
    chart.axis("month", false);
    chart.legend(false);
    chart
      .line()
      .position("month*temperature")
      .color("city")
      .shape("smooth");
    chart
      .point()
      .position("month*temperature")
      .color("city")
      .size(4)
      .shape("circle")
      .style({
        stroke: "#fff",
        lineWidth: 1
      });
    chart.render();
  });

  return <div ref={ref} className={style.chart} />;
};

export default Chart;
