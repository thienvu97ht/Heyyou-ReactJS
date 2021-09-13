import { Box, Container, Typography } from "@material-ui/core";
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
      </Container>
    </Box>
  );
}

export default NewProductsFature;
