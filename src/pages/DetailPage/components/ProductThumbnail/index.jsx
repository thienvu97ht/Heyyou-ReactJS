import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.scss";

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product }) {
  const images = product.images;

  const settings = {
    customPaging: function (i) {
      return (
        <a href="!#">
          <img src={images[i].url} alt={images[i].id_product} height="70px" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots-xw1q21 slick-thumb-312s",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div key={img.id}>
          <img src={img.url} alt={img.id_product} width="100%" />
        </div>
      ))}
    </Slider>
  );
}

export default ProductThumbnail;
