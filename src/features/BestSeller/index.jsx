import { Box, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

function BestSellerFeature({ className }) {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Container className={classes.root}>BestSellerFeature</Container>
    </Box>
  );
}

export default BestSellerFeature;
