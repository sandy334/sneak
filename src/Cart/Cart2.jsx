import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  IconButton,
  Input,
  Icon,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useData } from "../contexts/DataProvider";

export default function ProductCards({ item, check, setCheck }) {
  const [local, setLocal] = useState([]);
  const { flag } = useData();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("cart_data"));
    setLocal(localData);
  }, []);

  const removeFromCartHandler = (id) => {
    const index = local.indexOf(id);
    console.log(index, "index");
    if (index > -1) {
      local.splice(index, 1);
      setLocal(local);
      localStorage.setItem("cart_data", JSON.stringify(local));
      setCheck(!check);
    }
  };
  console.log(item, "kk");
  return (
    <section
      style={{
        backgroundColor: "#eee",
        height: "fit-content",
        position: "relative",
        zIndex: 9999,
      }}
    >
      <Container sx={{ py: 2 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item md={10}>
            <Card
              sx={{
                borderRadius: "0.3rem",
                //mb: 4,
              }}
            >
              <CardContent>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item md={2} lg={2} xl={2}>
                    <CardMedia
                      sx={{ borderRadius: "0.3rem" }}
                      component="img"
                      src={item?.img}
                      alt={item?.name}
                    />
                  </Grid>
                  <Grid item md={2} lg={2} xl={3} my={2}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ fontWeight: "normal", mb: 2 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ color: "secondary" }}
                    >
                      <span style={{ color: "disabled" }}>Size: </span>
                      {item.size}{" "}
                    </Typography>
                  </Grid>
                  <Grid item md={1} lg={1} xl={1}>
                    <IconButton color="error" href="#!">
                      <DeleteIcon
                        fontSize="large"
                        onClick={() => {
                          removeFromCartHandler(item._id);
                          flag();
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    lg={2}
                    xl={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // my: 4,
                    }}
                  >
                    <IconButton color="primary" size="small">
                      <RemoveIcon />
                    </IconButton>
                    <Input
                      type="number"
                      inputProps={{ min: 0, max: 6 }}
                      defaultValue={1}
                      size="small"
                    />
                    <IconButton color="primary" size="small">
                      <AddIcon />
                    </IconButton>
                  </Grid>
                  <Grid item md={3} lg={3} xl={3} sx={{ offsetLg: 1 }}>
                    <Typography>
                      <span>Original Price: ₹ {item?.original_price}</span>
                    </Typography>
                    <Typography>
                      Discounted Price: ₹ {item?.original_price - "2480"}
                      <br />
                      <span style={{ color: "#398614", fontSize: 15 }}>
                        You saved ₹ 2480 🎉
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
