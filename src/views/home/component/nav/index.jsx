import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";

import logo from "static/images/logo.png";

const navData = [
  { label: "home", value: "home", path: "/" },
  { label: "program", value: "program", path: "/nb-program" },
  { label: "finance", value: "finance" },
  { label: "analytics", value: "analytics" },
  { label: "promotion", value: "promotion" },
  { label: "user profile", value: "profile" },
  { label: "help center", value: "center" }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  header: {
    height: 90
  },
  logo: {
    width: 150,
    display: "block",
    paddingTop: 13,
    margin: "0 auto"
  },
  text: {
    fontSize: "18px"
  }
}));

const Item = withStyles(theme => ({
  selected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "#fff",
    boxShadow: "none"
  },
  "selected:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  }
}))(ListItem);

export default function Nav(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event, index, data) => {
    setSelectedIndex(index);
    props.onChange(data);
  };

  const renderList = navData => {
    const arr = [];
    navData.forEach(data => {
      arr.push(
        <Item
          key={data.value}
          button
          selected={selectedIndex === data.value}
          onClick={event => handleListItemClick(event, data.value, data)}
        >
          <ListItemIcon>
            <InboxIcon
              color={selectedIndex === data.value ? "#fff" : "primary"}
            />
          </ListItemIcon>
          <ListItemText>{data.label.toLocaleUpperCase()}</ListItemText>
        </Item>
      );
    });
    return arr;
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={logo} className={classes.logo} />
      </div>
      <List component="nav" aria-label="main mailbox folders">
        {renderList(navData)}
      </List>
    </div>
  );
}

Nav.defaultProps = {
  onChange: () => {}
};
