import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "utils";
import { useStyles } from "./style";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.img}>
        <img src={product.images} alt={product.nameProduct} />
      </Box>
      <Box className={classes.content}>
        <Typography className={classes.nameProduct}>
          {product.nameProduct}
        </Typography>
        <Typography className={classes.price}>
          {formatPrice(product.price)}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
