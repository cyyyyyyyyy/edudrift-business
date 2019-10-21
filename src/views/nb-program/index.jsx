import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import { Input, Table } from "antd";

import style from "./index.module.scss";
import { makeStyles } from "@material-ui/core";

const columns = [
  {
    title: "Title",
    dataIndex: "name"
  },
  {
    title: "State",
    dataIndex: "age"
  },
  {
    title: "Place",
    dataIndex: "address"
  },
  {
    title: "Event time",
    dataIndex: "address"
  },
  {
    title: "Creation time",
    dataIndex: "address"
  },
  {
    title: "action",
    render: () => <a>Detail</a>
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const useStyles = makeStyles(theme => ({
  tabs: {
    minHeight: 52
  }
}));

const NbProgram = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.main}>
      <Paper className={style.header}>
        <div className={style.bar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
        <div className={style.search}>
          <Input.Search />
        </div>
        <div className={style.event}>
          <Fab color="primary" variant="extended" size="small">
            NEW EVENT
          </Fab>
        </div>
      </Paper>
      <Paper className={style.table}>
        <Table dataSource={data} columns={columns} />
      </Paper>
    </div>
  );
};

export default NbProgram;
