import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";
import ProductSkeletonList from "../ProductSkeletonList/ProductSkeletonList";
import { useStyles } from "./style";

function BestSeller({ className }) {
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
          <Typography>NHỮNG SẢN PHẨM BÁN CHẠY NHẤT</Typography>
        </Box>
        {loading ? (
          <ProductSkeletonList length={3} />
        ) : (
          <ProductList data={productList} />
        )}
      </Container>
    </Box>
  );
}

export default BestSeller;
