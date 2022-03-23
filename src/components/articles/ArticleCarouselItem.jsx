import { Paper } from "@mui/material";
import React from "react";
import "./ArticleComponents.scss";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ArticleCarouselItem({ title, img, link }) {
  const onItemClicked = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div className="article-item">
      {img !== undefined ? (
        <img className="img nodrag" src={img} />
      ) : (
        <Paper className="img nodrag" square />
      )}

      <p onClick={onItemClicked}>{title}</p>
    </div>
  );
}
