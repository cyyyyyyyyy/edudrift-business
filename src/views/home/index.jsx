import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";

const Home = () => {
  const renderNav = () => {
    return (
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail">12312</ListItemText>
        </ListItem>
      </List>
    );
  };

  return <div />;
};

export default Home;
