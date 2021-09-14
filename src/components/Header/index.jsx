import {
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const StyleMenus = withStyles(() => ({
  paper: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
}))(Menu);

function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Box className={classes.root}>
        <Container className={classes.header}>
          <img
            src="https://theme.hstatic.net/200000031420/1000719377/14/logo.png?v=154"
            alt="Dương Vũ"
          />
          <Box component="ul">
            <Box component="li">
              <Link to="/">TRANG CHỦ</Link>
            </Box>
            <Box component="li" className={classes.subMenu}>
              <Link to="/products">SẢN PHẨM</Link>
              <Box component="ul" className={classes.menuProducts}>
                <Box component="li">
                  <Typography>TEE</Typography>
                </Box>
                <Box component="li">
                  <Typography>JACKET</Typography>
                </Box>
                <Box component="li">
                  <Typography>VARSITY</Typography>
                </Box>
                <Box component="li">
                  <Typography>HOODIE</Typography>
                </Box>
                <Box component="li">
                  <Typography>PANTS</Typography>
                </Box>
              </Box>
            </Box>
            <Box component="li">
              <Link to="/abouts">GIỚI THIỆU</Link>
            </Box>
            <Box component="li">
              <Link to="/auth">ĐĂNG NHẬP / ĐĂNG KÝ</Link>
            </Box>
            <Box component="li" style={{ marginLeft: 0 }}>
              <IconButton color="inherit" onClick={handleSearchClick}>
                <Search />
              </IconButton>
            </Box>
            <Box component="li" style={{ marginLeft: 0 }}>
              <IconButton color="inherit">
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCart />
                </StyledBadge>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <StyleMenus
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}>
        <MenuItem>
          <Box className={classes.searchBox}>
            <TextField placeholder="Tìm kiếm..." />
            <IconButton color="inherit">
              <Search />
            </IconButton>
          </Box>
        </MenuItem>
      </StyleMenus>
    </>
  );
}

export default Header;
