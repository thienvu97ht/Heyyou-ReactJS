import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import CheckoutItem from "../CheckoutItem";

CheckoutList.propTypes = {
  cartItems: PropTypes.array,
};

function CheckoutList({ cartItems = [] }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {cartItems?.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
    </Box>
  );
}

export default CheckoutList;
