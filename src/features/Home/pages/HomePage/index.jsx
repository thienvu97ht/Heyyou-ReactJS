import { Box } from "@material-ui/core";
import React from "react";
import { bannerImg, sliderImg } from "../../../../constants";
import BestSellerFeature from "../../../BestSeller";
import NewProductsFature from "../../../NewProducts";
import Banner from "../../components/Banner";
import SliderBanner from "../../components/SliderBanner/index";
import { useStyles } from "./style";

function HomePage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SliderBanner imgs={sliderImg} className={classes.mb4} />
      <Banner imgs={bannerImg} className={classes.mb4} />
      <NewProductsFature className={classes.mb4} />
      <BestSellerFeature className={classes.mb4} />
    </Box>
  );
}

export default HomePage;
