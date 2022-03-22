import { Paper } from "@mui/material";
import React from "react";
import "./Article.scss";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ArticleCarouselItem() {
  return (
    <div className="article-item">
      <Paper className="img"></Paper>
      <p>Chainwhiz - A new bounty marketplace for Web3 projects</p>
    </div>
  );
}
