import React from "react";
import "./Cart2.css";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  return (
    <div id="container">
      <button
        class="learn-more"
        onClick={() => {
          scrollTo(0, 0);
          navigate("/product-listing");
        }}
      >
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Continue shopping</span>
      </button>
    </div>
  );
}

export default Button;
