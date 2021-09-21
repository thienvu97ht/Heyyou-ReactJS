import { Box, Container, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import { useRouteMatch } from "react-router";
import AddToCartForm from "./components/AddToCartForm";
import ProductInfo from "./components/ProductInfo";
import ProductThumbnail from "./components/ProductThumbnail";
import useProductDetail from "./hooks/useProductDetail";
import { useStyles } from "./style";

DetailPage.propTypes = {};

function DetailPage() {
  const classes = useStyles();
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
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
          </Grid>
        </Grid>

        {/* <ProductMenu /> */}

        {/* <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route exact path={`${url}/review`} component={ProductReview} />
        </Switch> */}
      </Container>
    </Box>
  );
}

export default DetailPage;
