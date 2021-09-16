import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import ProductList from "../ProductList";
import ProductSkeletonList from "../ProductSkeletonList/ProductSkeletonList";
import { useStyles } from "./style";

function NewProducts({ className }) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      //   setLoading(false)
    })();
  }, []);

  return (
    <Box className={className}>
      <Container className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography>SẢN PHẨM MỚI!</Typography>
        </Box>
        {loading ? (
          <ProductSkeletonList length={15} />
        ) : (
          <ProductList data={productList} />
        )}
      </Container>
    </Box>
  );
}

export default NewProducts;
