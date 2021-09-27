import { TableCell, TableRow, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "utils";
import { useStyles } from "./style";
import * as dayjs from "dayjs";

OderItem.propTypes = {
  bill: PropTypes.object,
};

function OderItem({ bill = {} }) {
  const classes = useStyles();

  return (
    <TableRow className={classes.root}>
      <TableCell>{`#${bill.id}`}</TableCell>
      <TableCell>{dayjs(bill.created_at).format("DD/MM/YYYY")}</TableCell>
      <TableCell>
        {bill.products?.map((item) => (
          <Box key={item.id_product} className={classes.productBox}>
            <Typography>{item.name}</Typography>
            <Typography>SL: {item.quantity}</Typography>
          </Box>
        ))}
      </TableCell>
      <TableCell>{formatPrice(bill.total)}</TableCell>
      <TableCell>Đang xử lý</TableCell>
    </TableRow>
  );
}

export default OderItem;
