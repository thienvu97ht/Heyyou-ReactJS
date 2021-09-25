import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import { Box, Typography, Button } from "@material-ui/core";

AddressItem.propTypes = {
  address: PropTypes.object,
};

function AddressItem({ address = {} }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography>{address.fullname}</Typography>
        <Typography>Địa chỉ: {address.address}</Typography>
        <Typography>Điện thoại: {address.phone}</Typography>
        <Box className={classes.addressAction}>
          <Button>Sửa</Button>
          <Button>Xóa</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddressItem;
