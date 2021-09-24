import { TableCell, TableRow, IconButton } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "utils";
import { useStyles } from "./style";

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

function CartItem({ cartItem = {} }) {
  const classes = useStyles();

  const { product } = cartItem;
  const isSale = !!product.salePrice;

  console.log(product);

  return (
    <TableRow className={classes.root}>
      <TableCell>{product.nameProduct}</TableCell>
      <TableCell>{cartItem.quantity}</TableCell>
      {isSale ? (
        <TableCell>
          {formatPrice(product.salePrice * cartItem.quantity)}
        </TableCell>
      ) : (
        <TableCell>
          {formatPrice(product.originPrice * cartItem.quantity)}
        </TableCell>
      )}
      <TableCell>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
