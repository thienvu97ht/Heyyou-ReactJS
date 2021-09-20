import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

AddToCartForm.propTypes = {};

function AddToCartForm() {
  const classes = useStyles();

  return <Box className={classes.root}></Box>;
}

export default AddToCartForm;
