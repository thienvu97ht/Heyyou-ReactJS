import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useStyles } from "./style";

SliderBanner.propTypes = {
  imgs: PropTypes.array,
};

function SliderBanner({ imgs = [], className }) {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={className}>
      {imgs.map((img, index) => (
        <Box key={index}>
          <img src={img} alt="" className={classes.img} />
        </Box>
      ))}
    </Slider>
  );
}

export default SliderBanner;
