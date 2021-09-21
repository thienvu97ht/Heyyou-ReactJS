import { Box, Container, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import AddToCartForm from "./components/AddToCartForm";
import ProductInfo from "./components/ProductInfo";
import ProductMenu from "./components/ProductMenu";
import ProductShare from "./components/ProductShare";
import ProductsRelated from "./components/ProductsRelated";
import ProductThumbnail from "./components/ProductThumbnail";
import useProductDetail from "./hooks/useProductDetail";
import { useStyles } from "./style";

DetailPage.propTypes = {};

function DetailPage() {
  const classes = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();

  const [currentTab, setCurrentTab] = useState(0);

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <CircularProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    console.log("Form submit:", quantity);
    // const action = addToCart({
    //   id: product.id,
    //   product,
    //   quantity,
    // });
    // dispatch(action);
  };

  const handleTabsChange = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProductThumbnail product={product} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProductInfo product={product} />
            <AddToCartForm onSubmit={handleAddToCartSubmit} />
            <ProductShare product={product} />
          </Grid>
        </Grid>

        <ProductMenu
          product={product}
          value={currentTab}
          onChange={handleTabsChange}
        />

        <ProductsRelated category={product.nameCategory} />
      </Container>
    </Box>
  );
}

export default DetailPage;
