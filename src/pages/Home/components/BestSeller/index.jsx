import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

function BestSellerFeature({ className }) {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Container className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography>NHỮNG SẢN PHẨM BÁN CHẠY NHẤT</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default BestSellerFeature;
