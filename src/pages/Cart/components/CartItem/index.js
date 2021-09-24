import {
  TableCell,
  TableRow,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
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

  return (
    <TableRow className={classes.root}>
      <TableCell className={classes.product}>
        <img src={product.thumbnail} alt={product.nameProduct} />
        <Box>
          <Typography className={classes.nameProduct}>
            {product.nameProduct}
          </Typography>
          {isSale ? (
            <Box className={classes.priceBox}>
              <Typography className={classes.salePrice}>
                {formatPrice(product.salePrice)}
              </Typography>
              <Typography className={classes.originPrice}>
                {formatPrice(product.originPrice)}
              </Typography>
            </Box>
          ) : (
            <Box className={classes.priceBox}>
              <Typography className={classes.salePrice}>
                {formatPrice(product.originPrice)}
              </Typography>
            </Box>
          )}
        </Box>
      </TableCell>
      <TableCell align="center">{cartItem.quantity}</TableCell>
      {isSale ? (
        <TableCell align="center">
          {formatPrice(product.salePrice * cartItem.quantity)}
        </TableCell>
      ) : (
        <TableCell align="center">
          {formatPrice(product.originPrice * cartItem.quantity)}
        </TableCell>
      )}
      <TableCell align="right">
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
