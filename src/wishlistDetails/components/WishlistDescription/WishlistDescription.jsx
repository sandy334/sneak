import "./WishlistDescription.css";
import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../contexts/DataProvider";

export const WishlistDescription = ({ selectedProduct, setCheck, check }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  let email = localStorage.getItem("user_email");
  const [local, setLocal] = useState([]);
  const { flag } = useData();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("wishlist"));
    setLocal(localData);
  }, []);
  const { loading } = useData();
  const removeFromCartHandler = (id) => {
    const index = local.indexOf(id);
    console.log(index, "index");
    if (index > -1) {
      local.splice(index, 1);
      setLocal(local);
      localStorage.setItem("wishlist", JSON.stringify(local));
      setCheck(!check);
    }
  };

  useEffect(() => {
    if (email) {
      setLogin(true);
    }
  }, []);
  console.log(!selectedProduct, "true1");
  return (
    !loading &&
    (login ? (
      selectedProduct === null || selectedProduct === 0 ? (
        <div className="wishlist-empty-container">
          <h2 className="page-heading">Wishlist is Empty</h2>
          <button onClick={() => navigate("/product-listing")}>Explore</button>
        </div>
      ) : (
        <div>
          <div className="wishlist-products-container">
            <div className="wishlist-card" key={selectedProduct?.name}>
              <div>
                <img
                  className="img-container"
                  src={selectedProduct?.img}
                  alt="drip"
                />
              </div>

              <div className="product-card-details">
                <h3>{selectedProduct?.name}</h3>
                <p className="ratings">
                  {selectedProduct?.rating}
                  <BsFillStarFill color="orange" /> ({selectedProduct?.reviews}{" "}
                  reviews){" "}
                </p>
                <div className="price-container">
                  <p className="original-price">
                    ₹{selectedProduct?.original_price}
                  </p>
                  <p className="discount-price">
                    ₹{selectedProduct?.discounted_price}
                  </p>
                </div>

                <p>Gender: {selectedProduct?.category_name}</p>
                <div className="info">
                  {!selectedProduct?.is_stock && (
                    <p className="out-of-stock">Out of stock</p>
                  )}
                  {selectedProduct?.trending && (
                    <p className="trending">Trending</p>
                  )}
                </div>
              </div>

              <div className="wishlist-btn-container">
                <button className="cart-wishlist-btn">Add to Cart</button>

                <button
                  className="remove-from-wishlist-btn"
                  onClick={() => {
                    removeFromCartHandler(selectedProduct?._id);
                    flag();
                  }}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    ) : (
      <></>
    ))
  );
};
