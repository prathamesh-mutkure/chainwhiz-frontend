import { Avatar } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Article.scss";

export function NextButton() {
  return (
    <Avatar className="carousel-button">
      <ArrowForwardIcon />
    </Avatar>
  );
}

export function PrevioustButton() {
  return (
    <Avatar className="carousel-button prev-button">
      <ArrowBackIcon fontSize="3rem" />
    </Avatar>
  );
}
