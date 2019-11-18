import React from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

import Finance from "./component/finance";
import Percentage from "./component/percentage";
import SaleTotal from "./component/sale-total";
import { makeStyles } from "@material-ui/core";

import style from "./index.module.scss";

const useStyles = makeStyles(theme => ({
  textPrimary: {
    color: theme.palette.primary.main
  }
}));

const NbOverview = () => {
  const classes = useStyles();

  const renderNewList = () => {
    let arr = [];
    [1, 2, 3].forEach(data => {
      arr.push(
        <Grid key={data} xs={4}>
          <Typography variant="h4">12</Typography>
          <Typography variant="caption">
            {moment().format("YYYY-MM-DD HH:mm")}
          </Typography>
        </Grid>
      );
    });
    return arr;
  };

  const renderEventList = () => {
    let arr = [];
    [1, 2, 3].forEach(data => {
      arr.push(
        <Grid key={data} className={style.event_list}>
          <Typography variant="body1" style={{ paddingBottom: 10 }}>
            Global Leadership & Program
          </Typography>
          <Typography variant="body2" style={{ paddingBottom: 10 }}>
            Your project has a new order
          </Typography>
          <Typography variant="caption">
            {moment().format("YYYY-MM-DD HH:mm")}
          </Typography>
        </Grid>
      );
    });
    return arr;
  };

  return (
    <>
      <ul className={style.main_header}>
        <li>
          <Typography variant="h5" display="inline">
            OVERVIEW
          </Typography>
          <Typography variant="caption" display="inline">
            {moment().format("YYYY-MM-DD HH:mm")}
          </Typography>
        </li>
        <li>
          <Link to="/nb-home/create">
            <Fab
              color="primary"
              variant="extended"
              aria-label="delete"
              className={classes.fab}
            >
              Extended
              <AddIcon className={style.add_icon} />
            </Fab>
          </Link>
        </li>
      </ul>
      <Grid container>
        <Grid item xs={8} style={{ paddingRight: 24 }}>
          <Card className={style.card}>
            <CardContent>
              <Typography variant="subtitle1">
                GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)
              </Typography>
              <div className={style.sub}>
                <span>current</span>
                <Typography>time</Typography>
              </div>
              <Grid container className={style.content}>
                {renderNewList()}
              </Grid>
              <footer className={style.footer}>
                Your project has a new order
              </footer>
            </CardContent>
          </Card>
          <Card className={style.card}>
            <CardContent>
              <Typography variant="subtitle1">
                GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)
              </Typography>
              <div className={style.sub}>
                <span>current</span>
                <Typography>time</Typography>
              </div>
              <Grid container className={style.content}>
                {renderNewList()}
              </Grid>
              <footer className={style.footer}>
                Your project has a new order
              </footer>
            </CardContent>
          </Card>
          <Card className={style.card}>
            <CardContent>
              <Typography variant="subtitle1">
                GLOBAL LEADERSHIP & TALENT PROGRAM PROGRAM(SUMMER)
              </Typography>
              <div className={style.sub}>
                <span>current</span>
                <Typography>time</Typography>
              </div>
              <div className={style.content}>123</div>
              <footer className={style.footer}>
                Your project has a new order
              </footer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={style.card} style={{ height: 470 }}>
            <CardHeader
              className={style.event_header}
              title={
                <Typography variant="subtitle1">APPROVED EVENTS</Typography>
              }
            />
            <CardContent>{renderEventList()}</CardContent>
          </Card>
          <Finance />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} style={{ paddingRight: 24 }}>
          <Percentage />
        </Grid>
        <Grid item xs={8}>
          <SaleTotal />
        </Grid>
      </Grid>
    </>
  );
};

export default NbOverview;
