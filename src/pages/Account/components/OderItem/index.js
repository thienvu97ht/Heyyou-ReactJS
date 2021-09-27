import { TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "utils";
import { useStyles } from "./style";

OderItem.propTypes = {
  bill: PropTypes.object,
};

function OderItem({ bill = {} }) {
  const classes = useStyles();
  console.log(bill);

  return (
    <TableRow className={classes.root}>
      <TableCell>{`#${bill.id}`}</TableCell>
      <TableCell>{bill.created_at}</TableCell>
      <TableCell>Sản phẩm</TableCell>
      <TableCell>{formatPrice(bill.total)}</TableCell>
      <TableCell>Đang xử lý</TableCell>
    </TableRow>
  );
}

export default OderItem;
