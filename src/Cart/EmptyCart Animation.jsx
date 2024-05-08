import React from "react";

import { useNavigate } from "react-router-dom";
import "./emptybtn.scss";
import Button from "./button";
export default function AnimationComponent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "hidden",
      }}
    >
      <img src="/assets/empty.gif" alt="EMPTY" />
      <h2 style={{ textAlign: "center" }}>
        OOPS....! Your cart appears to be empty !{"  "}
      </h2>
      <Button />
    </div>
  );
}
