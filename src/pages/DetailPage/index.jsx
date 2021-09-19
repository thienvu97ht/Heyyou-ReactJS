import { Box, Container, Grid, LinearProgress, Paper } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ProductDescription from "./components/ProductDescriptom";
import ProductReview from "./components/ProductReview";
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

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item className={classes.left} xs={12} sm={12} md={6} lg={6}>
            {/* <ProductThumbnail product={product} /> */}
            126
          </Grid>
          <Grid item className={classes.right} xs={12} sm={12} md={6} lg={6}>
            {/* <ProductInfo product={product} />
          <AddToCartForm onSubmit={handleAddToCartSubmit} /> */}
            123
          </Grid>
        </Grid>

        {/* <ProductMenu /> */}

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route exact path={`${url}/review`} component={ProductReview} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
