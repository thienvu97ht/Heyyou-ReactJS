import { Container, Grid, Box, Typography } from "@material-ui/core";
import { cartTotalSelector } from "pages/Cart/selectors";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { formatPrice } from "utils";
import CheckoutInfo from "./components/CheckoutInfo";
import CheckoutList from "./components/CheckoutList";
import { useStyles } from "./style";

function Checkouts() {
  const classes = useStyles();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(cartTotalSelector);

  const [address, setAddress] = useState(
    loggedInUser?.addresses[0]?.id || null
  );

  useEffect(() => {
    !isLoggedIn && history.push("/auth");

    if (cartItems?.length <= 0) {
      history.push("/cart");
    }
  }, [isLoggedIn, history, cartItems]);

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
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CheckoutList cartItems={cartItems} />
          <Box className={classes.subTotal}>
            <Box className={classes.price}>
              <Typography>Tạm tính</Typography>
              <Typography>{formatPrice(cartTotal)}</Typography>
            </Box>
            <Box className={classes.ship}>
              <Typography>Phí vận chuyển</Typography>
              <Typography>Miễn phí</Typography>
            </Box>
          </Box>
          <Box className={classes.total}>
            <Typography>Tổng cộng</Typography>
            <Typography>{formatPrice(cartTotal)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkouts;
