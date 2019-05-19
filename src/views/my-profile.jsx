import React from "react";
import { withI18n } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import {
    Account,
    UserProfile,
    Contacts,
    OtherInfo
} from "module-components/my-profile/index";

import style from "./my-profile.module.scss";
import cookie from "js-cookie";
import { getClientsById } from "../request/accounts";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

@withI18n()
class MyProfile extends React.Component {
    state = {
        value: 0
    };

    componentWillMount() {
        let userId = cookie.get("userId");
        getClientsById(userId).then(({ data }) => {
            this.setState({ ...this.state, ...data });
        });
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <div>
                <Paper square>
                    <Tabs
                        onChange={this.handleChange}
                        value={value}
                        textColor="#000"
                        indicatorColor="primary"
                    >
                        <Tab label="Account" />
                        <Tab label="User Profile" />
                        <Tab label="Contacts" />
                        <Tab label="Other Info" />
                    </Tabs>
                </Paper>
                <div className={style.main}>
                    {value === 0 && (
                        <TabContainer>
                            <Account {...this.props} />
                        </TabContainer>
                    )}
                    {value === 1 && (
                        <TabContainer>
                            <UserProfile data={this.state} />
                        </TabContainer>
                    )}
                    {value === 2 && (
                        <TabContainer>
                            <Contacts data={this.state} />
                        </TabContainer>
                    )}
                    {value === 3 && (
                        <TabContainer>
                            <OtherInfo data={this.state} />
                        </TabContainer>
                    )}
                </div>
            </div>
        );
    }
}

export default MyProfile;
