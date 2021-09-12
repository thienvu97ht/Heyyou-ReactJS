import { Box, Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

function NewProductsFature({ className }) {
  const classes = useStyles();

  return (
    <Box className={className}>
      <Container className={classes.root}>NewProductsFature</Container>
    </Box>
  );
}

export default NewProductsFature;
