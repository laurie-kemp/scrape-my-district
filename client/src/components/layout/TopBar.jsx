import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { userId } from "../../jwt";
import { connect } from "react-redux";
import AccountIcon from "@material-ui/icons/AccountBox";
import "../../App.css";

const TopBar = props => {
  const { location, history, user } = props;
  
  return (
    <AppBar className='AppBar'position="absolute" style={{ zIndex: 10 }}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          <img src='scaleupnation-logo.png' className = 'logo'/>
        </Typography>
        {user && (
          <Button color="inherit">
            <AccountIcon />
          </Button>
        )}

        {location.pathname === "/homepage" && (
          <Button  onClick={() => history.push("/logout")}>
            Log out
          </Button>
        )}

        {location.pathname === "/list" && (
          <Button  onClick={() => history.push("/logout")}>
            Log out
          </Button>
        )}

        {location.pathname === "/reports" && (
          <Button onClick={() => history.push("/logout")}>
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  user: state.currentUser
   &&
  state.users &&
  state.users[userId(state.currentUser.jwt)]
});

export default withRouter(connect(mapStateToProps)(TopBar));

