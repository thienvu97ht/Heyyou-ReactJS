import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import { Box, Typography, Button } from "@material-ui/core";

AddressItem.propTypes = {
  address: PropTypes.object,
  onRemove: PropTypes.func,
};

function AddressItem({ address = {}, onRemove }) {
  const classes = useStyles();

  const handleRemoveAddress = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Typography>{address.fullname}</Typography>
        <Typography>Địa chỉ: {address.address}</Typography>
        <Typography>Điện thoại: {address.phone}</Typography>
        <Box className={classes.addressAction}>
          <Button>Sửa</Button>
          <Button onClick={() => handleRemoveAddress(address.id)}>Xóa</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddressItem;
