import React, { useEffect, useState } from "react";
import "./Articles.scss";
import { getAllArticles } from "../api/articles_api";
import TextHeading from "../components/misc/TextHeading";
import ArticleCarouselItem from "../components/articles/ArticleCarouselItem";
import AliceCarousel from "react-alice-carousel";
import {
  NextButton,
  PrevioustButton,
} from "../components/articles/CarouselButtons";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const articles = await getAllArticles();
    // setArticles(articles);

    console.log(articles);
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    1200: {
      items: 3,
    },
    1920: {
      items: 3,
    },
    2560: {
      items: 4,
    },
  };

  return (
    <div>
      <TextHeading text="For You From Chainwhiz" />
      <AliceCarousel
        autoWidth
        autoHeight
        mouseTracking
        disableDotsControls={true}
        renderNextButton={(_) => <NextButton />}
        renderPrevButton={(_) => <PrevioustButton />}
        // responsive={responsive}
        children={[
          <ArticleCarouselItem />,
          <ArticleCarouselItem />,
          <ArticleCarouselItem />,
          <ArticleCarouselItem />,
          <ArticleCarouselItem />,
        ]}
      />
    </div>
  );
}
