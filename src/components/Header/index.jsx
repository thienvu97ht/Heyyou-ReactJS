import {
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  withStyles,
} from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import categoryApi from "api/categoryApi";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
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
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const categories = await categoryApi.getAll();
        setCategories(categories);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    })();
  }, []);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClick = (category) => {
    const filters = {
      category: category.name,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });

    console.log(queryString.stringify(filters));
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
              <Link to="/collections/allitems">SẢN PHẨM</Link>
              <Box component="ul" className={classes.menuProducts}>
                {categories.map((category) => (
                  <Box component="li" key={category.id}>
                    <Link to={`/collections/${category.name}`}>
                      {category.name.toUpperCase()}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="li">
              <Link to="/abouts">GIỚI THIỆU</Link>
            </Box>
            <Box component="li">
              {!isLoggedIn && <Link to="/auth">ĐĂNG NHẬP / ĐĂNG KÝ</Link>}

              {isLoggedIn && (
                <Link to="/account">{loggedInUser.fullname.toUpperCase()}</Link>
              )}
            </Box>
            <Box component="li" style={{ marginLeft: "10px" }}>
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
