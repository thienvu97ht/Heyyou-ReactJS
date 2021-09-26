import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

CheckoutInfo.propTypes = {
  user: PropTypes.object,
};

function CheckoutInfo({ user, onChange, address }) {
  const classes = useStyles();
  const history = useHistory();

  const handleSortChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  const handleAddAddress = () => {
    history.push("/account/address/add");
  };

  return (
    <Box>
      <Box className={classes.sections}>
        <Typography component="h3">Thông tin giao hàng</Typography>
        <Box className={classes.customer}>
          <img src={user?.avatar} alt="avatar" />
          <Box className={classes.infoUser}>
            <Typography>
              {user?.fullname} ({user?.email})
            </Typography>
            <Button>Đăng xuất</Button>
          </Box>
        </Box>
        <Typography>Chọn địa chỉ giao hàng:</Typography>
        {!!address ? (
          <Box className={classes.selectBox}>
            <FormControl fullWidth size="small">
              <Select
                className={classes.select}
                id="demo-simple-select"
                variant="outlined"
                value={address}
                onChange={handleSortChange}
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}>
                {user?.addresses.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.fullname} - {item.phone} - {item.address}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button onClick={handleAddAddress}>Thêm địa chỉ giao hàng</Button>
          </Box>
        ) : (
          <Box className={classes.emptyAddress}>
            <Typography>Bạn chưa có địa chỉ giao hàng nào</Typography>
            <Button onClick={handleAddAddress}>Thêm địa chỉ giao hàng</Button>
          </Box>
        )}
      </Box>
      <Box className={classes.footer}>
        <Link to="/cart">Giỏ hàng</Link>
        <Button>Hoàn tất đặt hàng</Button>
      </Box>
    </Box>
  );
}

export default CheckoutInfo;
