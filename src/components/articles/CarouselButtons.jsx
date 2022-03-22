import { Avatar, SvgIcon } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ArticleComponents.scss";

export function NextButton() {
  return (
    <Avatar className="carousel-button next-button">
      <ArrowForwardIcon className="carousel-icon" />
    </Avatar>
  );
}

export function PrevioustButton() {
  return (
    <Avatar className="carousel-button prev-button">
      <ArrowBackIcon className="carousel-icon" />
    </Avatar>
  );
}
