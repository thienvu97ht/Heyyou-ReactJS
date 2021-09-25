import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

AccountAddress.propTypes = {};

function AccountAddress(props) {
  const classes = useStyles();

  return <Box className={classes.root}>AccountAddress</Box>;
}

export default AccountAddress;
