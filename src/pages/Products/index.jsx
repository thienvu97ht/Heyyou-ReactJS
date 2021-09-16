import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductSkeletonList from "./components/ProductSkeletonList";
import { useStyles } from "./style";

ProductsPage.propTypes = {};

function ProductsPage(props) {
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
    <Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={3}></Grid>
      </Grid> */}

      {loading ? <ProductSkeletonList /> : <Typography>productList</Typography>}
    </Box>
  );
}

export default ProductsPage;
