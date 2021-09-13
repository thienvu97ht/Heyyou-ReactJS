import { Box } from "@material-ui/core";
import React from "react";
import { bannerImg, brandImg, sliderImg } from "../../constants";
import Banner from "./components/Banner";
import BestSellerFeature from "./components/BestSeller";
import Brand from "./components/Brand";
import NewProductsFature from "./components/NewProducts";
import SliderBanner from "./components/SliderBanner";

import { useStyles } from "./style";

function HomePage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SliderBanner imgs={sliderImg} className={classes.mb4} />
      <Banner imgs={bannerImg} className={classes.mb4} />
      <NewProductsFature className={classes.mb4} />
      <BestSellerFeature className={classes.mb4} />
      <Brand imgs={brandImg} className={classes.mb8} />
    </Box>
  );
}

export default HomePage;
