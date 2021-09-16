import { Box, Container, Typography } from "@material-ui/core";
import ProductsPage from "pages/Products";
import React from "react";
import { useStyles } from "./style";

function NewProductsFature({ className }) {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Container className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography>SẢN PHẨM MỚI!</Typography>
        </Box>
        <ProductsPage />
      </Container>
    </Box>
  );
}

export default NewProductsFature;
