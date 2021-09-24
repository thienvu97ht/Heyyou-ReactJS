import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import PropTypes from "prop-types";
import { formatPrice } from "utils";

CartTotal.propTypes = {
  total: PropTypes.number,
};

function CartTotal({ total = 0 }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>{formatPrice(total)}</Typography>
    </Box>
  );
}

export default CartTotal;
