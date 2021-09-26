import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CheckoutInfo from "./components/CheckoutInfo";
import { useStyles } from "./style";

function Checkouts() {
  const classes = useStyles();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const [address, setAddress] = useState(loggedInUser.addresses[0].id || null);

  useEffect(() => {
    !isLoggedIn && history.push("/auth");
  }, [isLoggedIn, history]);

  const handleAddressChange = (values) => {
    setAddress(values);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CheckoutInfo
            user={loggedInUser}
            onChange={handleAddressChange}
            address={address}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
      </Grid>
    </Container>
  );
}

export default Checkouts;
