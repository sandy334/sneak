// import React from "react";
// import { useMediaQuery } from "react-responsive";
import "./ProductImage.css";
import Tilt from "react-parallax-tilt";
import PropTypes from "prop-types";

export const ProductImage = ({ selectedProduct }) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 992px)",
  // });

  return (
    <div
      style={{
        // padding: "12px",
        display: "flex",
        justifyContent: "center",
        aspectRatio: "16/9",
      }}
    >
      <Tilt
        tiltEnable={true}
        scale={1.05}
        transitionSpeed={1000}
        className="product-details-image"
      >
        <img src={selectedProduct?.img} alt="drip" />
      </Tilt>
    </div>
  );
};

ProductImage.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
};
