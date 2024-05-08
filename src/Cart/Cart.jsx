import { useEffect, useState } from "react";
import "./Cart.css";
import { products } from "../backend/db/products";
import { useData } from "../contexts/DataProvider";
import { useNavigate } from "react-router-dom";
import ProductCards from "./Cart2";
import { Button, Card, CardContent, Typography } from "@mui/material";
import AnimationComponent from "./EmptyCart Animation";

export const Cart = () => {
  const { loading } = useData();
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const local = JSON.parse(localStorage?.getItem("cart_data"));
    const data = products?.filter((product) => local?.includes(product?._id));
    console.log(products);

    setItem(data);

    const totalAmount = data.reduce(
      (sum, item) => sum + (item?.original_price - 2480),
      0
    );
    setTotal(totalAmount);
  }, [check]);

  return (
    !loading && (
      <div
        style={{ backgroundColor: "#EEEEEE", width: "100vw", height: "100vh" }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: "bold",
            mb: 0,
            color: "primary",
            textAlign: "center",
          }}
        >
          Shopping Cart
        </Typography>
        {item?.length > 0 ? (
          <div>
            {item.map((it) => (
              <>
                <div key={it.id}>
                  <ProductCards item={it} setCheck={setCheck} check={check} />
                </div>
              </>
            ))}
            <div
              style={{
                fontWeight: 700,
                fontSize: "35px",
                color: "black",
                height: "fit-content",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1rem 1rem 0rem 1rem",
              }}
            >
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography variant="h5" color={"rgba(0, 0, 0, 0.87)"}>
                    Total : <span>₹ {total}</span>{" "}
                  </Typography>

                  <Button
                    color="warning"
                    variant="outlined"
                    onClick={() => navigate("/checkout")}
                    sx={{ ml: 2 }}
                    size="small"
                  >
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <AnimationComponent />
        )}
      </div>
    )
  );
};
