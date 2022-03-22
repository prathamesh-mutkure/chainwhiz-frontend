import React, { useEffect, useState } from "react";
import "./Articles.scss";
import { getAllArticles } from "../api/articles_api";
import Carousel from "react-material-ui-carousel";
import TextHeading from "../components/misc/TextHeading";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const articles = await getAllArticles();
    // setArticles(articles);

    console.log(articles);
  }, []);

  return (
    <div>
      <TextHeading text="For You From Chainwhiz" />
      <Carousel></Carousel>
    </div>
  );
}
