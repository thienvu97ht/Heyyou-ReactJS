import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { formatPrice } from "utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const isSale = !!product.salePrice;

  console.log(isSale);

  return (
    <Box className={classes.root}>
      <Typography component="h2">{product.nameProduct}</Typography>
      <span></span>
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
      <Typography className={classes.cate}></Typography>
      <Typography className={classes.shortDesc}></Typography>
    </Box>
  );
}

export default ProductInfo;
