import "./WishlistDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataProvider";
import { WishlistDescription } from "./components/WishlistDescription/WishlistDescription";
import { products } from "../backend/db/products";
import ImageGallery from "./Trending/Carousel";
import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const WishlistDetails = () => {
  const { state } = useData();
  const { productId } = useParams();
  const { loading } = useData();
  const navigate = useNavigate();

  const selectedProduct = state.allProductsFromApi?.find(
    ({ id }) => Number(id) === Number(productId)
  );

  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const local = JSON?.parse(localStorage?.getItem("wishlist"));
    console.log(products);
    const data = products?.filter((id) => local?.includes(id._id));
    setItem(data);

    const totalAmount = data.reduce(
      (sum, item) => sum + (item?.original_price - 2480),
      0
    );
    setTotal(totalAmount);
  }, [check]);
  return (
    !loading && (
      <>
        <Typography variant="h2" className="page-heading">
          Wishlist ♡
        </Typography>
        {item?.length > 0 ? (
          <div className="wishlist-products-container">
            {item?.map((it) => (
              <WishlistDescription
                selectedProduct={it}
                check={check}
                setCheck={setCheck}
                key={it._id}
              />
            ))}
          </div>
        ) : (
          <div
            className="wishlist-empty-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="page-heading">Your wishlist is Empty 😔</h2>{" "}
            <div style={{ marginBottom: 10 }}>
              <h3 className="page-heading">
                Add item that you would like to save for later to your wishlist.
              </h3>
              <button
                onClick={() => navigate("/product-listing")}
                style={{ cursor: "pointer" }}
              >
                {" "}
                EXPLORE
              </button>
            </div>
            <Paper sx={{ mt: 2 }}>
              {" "}
              <Typography variant="h3" mt={4}>
                Trending🔥{" "}
              </Typography>{" "}
              <ImageGallery />
            </Paper>
          </div>
        )}
      </>
    )
  );
};
