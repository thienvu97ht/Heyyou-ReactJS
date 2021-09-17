import { Box, Grid } from "@material-ui/core";
import Product from "components/Product/Product";
import PropTypes from "prop-types";
import React from "react";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data = [] }) {
  return (
    <Box>
      <Grid container spacing={4}>
        {data.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={3} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
