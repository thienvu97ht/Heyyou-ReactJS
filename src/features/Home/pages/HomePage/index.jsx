import { Box } from "@material-ui/core";
import React from "react";
import { bannerImg, sliderImg } from "../../../../constants";
import Banner from "../../components/Banner";
import SliderBanner from "../../components/SliderBanner/index";
import { useStyles } from "./style";

function HomePage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SliderBanner imgs={sliderImg} className={classes.slider} />
      <Banner imgs={bannerImg} className={classes.banner} />
    </Box>
  );
}

export default HomePage;
