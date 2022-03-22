import React, { useEffect, useState } from "react";
import { getAllArticles } from "../api/articles_api";
import TextHeading from "../components/misc/TextHeading";
import ArticleCarouselItem from "../components/articles/ArticleCarouselItem";
import AliceCarousel from "react-alice-carousel";
import {
  NextButton,
  PrevioustButton,
} from "../components/articles/CarouselButtons";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Articles.scss";

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
        mouseTracking
        touchTracking
        disableDotsControls={true}
        renderNextButton={(_) => <NextButton />}
        renderPrevButton={(_) => (true ? null : <PrevioustButton />)}
        // responsive={responsive}
        paddingLeft={16}
        paddingRight={176}
        // swipeExtraPadding={160}
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
