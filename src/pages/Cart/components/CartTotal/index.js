import { Box, Typography, Button, TextareaAutosize } from "@material-ui/core";
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
      <Box className={classes.totalCart}>
        <Box className={classes.subTotal}>
          <Typography>Tổng tiền</Typography>
          <Typography>{formatPrice(total)}</Typography>
        </Box>
        <Box className={classes.finalTotal}>
          <Button>THANH TOÁN</Button>
        </Box>
      </Box>

      <Box className={classes.note}>
        <Typography>Ghi chú</Typography>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Bạn muốn mô tả rõ hơn về đơn hàng"
          minRows={5}
        />
      </Box>
    </Box>
  );
}

export default CartTotal;
