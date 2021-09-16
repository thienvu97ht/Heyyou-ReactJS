import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Product from "../Product/Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
