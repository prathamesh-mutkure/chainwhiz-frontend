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

  useEffect(() => {
    (async () => {
      const articles = await getAllArticles();
      setArticles(articles);
    })();
  }, []);

  return (
    <div>
      <TextHeading text="For You From Chainwhiz" />
      <AliceCarousel
        autoWidth
        mouseTracking
        touchTracking
        disableDotsControls={true}
        renderNextButton={(_) => <NextButton />}
        renderPrevButton={(_) => <PrevioustButton />}
        paddingLeft={16}
        paddingRight={208}
        children={articles.map((article, index) => {
          return (
            <ArticleCarouselItem
              key={`article${index}`}
              title={article.title}
              img={article.img}
              link={article.link}
            />
          );
        })}
      />
    </div>
  );
}
