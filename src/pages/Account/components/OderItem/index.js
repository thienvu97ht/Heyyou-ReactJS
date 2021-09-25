import { TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./style";

OderItem.propTypes = {
  cartItem: PropTypes.object,
};

function OderItem() {
  const classes = useStyles();

  return (
    <TableRow className={classes.root}>
      <TableCell>Mã đơn hàng</TableCell>
      <TableCell>Ngày đặt</TableCell>
      <TableCell>Sản phẩm</TableCell>
      <TableCell>Tổng tiền</TableCell>
      <TableCell>Trạng thái đơn hàng</TableCell>
    </TableRow>
  );
}

export default OderItem;
