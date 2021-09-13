import { Box } from "@material-ui/core";
import React from "react";
import Footer from "../../../../components/Footer";
import NewLetter from "../../../../components/NewLetter";
import { bannerImg, brandImg, sliderImg } from "../../../../constants";
import BestSellerFeature from "../../../BestSeller";
import NewProductsFature from "../../../NewProducts";
import Banner from "../../components/Banner";
import Brand from "../../components/Brand";
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
      <Brand imgs={brandImg} className={classes.mb8} />
      <NewLetter className={classes.mb8} />
      <Footer />
    </Box>
  );
}

export default HomePage;
