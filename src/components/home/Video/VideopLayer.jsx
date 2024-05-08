import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const HeroText = styled("div")({
  position: "absolute",
  color: "white",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
});

const HeroTitle = styled("h1")({
  fontSize: "3.5em",
  marginBottom: "1rem", // Adjust spacing between title and subtitle
});

const HeroSubtitle = styled("h2")({
  fontSize: "1.2em",
  opacity: 0.8,
  marginBottom: "2rem", // Adjust spacing between subtitle and button
});

const ShopNowButton = styled("button")({
  opacity: 0.9,
  fontWeight: "bolder",
  fontSize: "1.5rem", // Adjust button font size
  padding: "1rem 3rem", // Adjust button padding
  borderRadius: "40px",
  color: "rgb(0, 0, 0)",
  backgroundColor: "rgb(217, 217, 217)",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.3s, background-color 0.3s",
  "&:hover": {
    opacity: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
});

export default function BasicCard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          padding: 0,
          margin: 0,
          height: "100%",
          width: "100%",
          background: "#000000",
          borderRadius: 0,
        }}
      >
        <video
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
          autoPlay
          loop
          muted
          poster="/assets/bg2.jpg"
        >
          <source
            src="https://res.cloudinary.com/drinpsneak/video/upload/v1688393540/production_nmcrex.mp4"
            type="video/mp4"
          />
        </video>
        <HeroText>
          <HeroTitle>Sneak into Extraordinary</HeroTitle>
          <HeroSubtitle>
            Where Adventure Meets Style in Quirky Sneaker Bliss
          </HeroSubtitle>
          <ShopNowButton
            onClick={() => {
              scrollTo(0, 0);
              navigate("product-listing");
            }}
          >
            Shop Now
          </ShopNowButton>
        </HeroText>
      </Card>
    </Box>
  );
}
