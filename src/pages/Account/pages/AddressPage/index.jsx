import { Box, Typography, Button, Grid } from "@material-ui/core";
import AddressItem from "pages/Account/components/AddressItem";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useStyles } from "./style";

AddressPage.propTypes = {};

function AddressPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const { addresses } = useSelector((state) => state.user.current);

  const handleShowAddress = () => {
    history.push("/account/address");
  };

  const handleAddAddress = () => {};

  if (addresses.length <= 0) {
    return (
      <Box>
        <Box className={classes.header}>
          <Typography>Sổ địa chỉ</Typography>
          <Button onClick={handleAddAddress}>Thêm địa chỉ mới</Button>
        </Box>
        <Box className={classes.addressEmpty}>
          <Typography>Bạn chưa có địa chỉ nào</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>Sổ địa chỉ</Typography>
        <Button onClick={handleShowAddress}>Xem tất cả</Button>
      </Box>
      <Grid container spacing={2}>
        {addresses.map((item) => (
          <Grid key={item.id} item xs={12} sm={12} md={6} lg={6}>
            <AddressItem address={item} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.addAddress}>
          <Button onClick={handleAddAddress}>Thêm địa chỉ mới</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddressPage;
