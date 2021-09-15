import { Container, Grid } from "@material-ui/core";
import { logout } from "app/userSlice";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useStyles } from "./style";

AccountPage.propTypes = {};

function AccountPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  useEffect(() => {
    !isLoggedIn && history.push("/auth");
  }, [isLoggedIn, history]);

  const handleLogout = () => {
    const action = logout();
    dispatch(action);

    history.push("/");
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          123
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <button onClick={handleLogout}>Đăng xuất</button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccountPage;
