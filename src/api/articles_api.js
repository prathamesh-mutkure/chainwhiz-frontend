import parse from "rss-to-json";

export const getAllArticles = async () => {
  const URL = "https://medium.com/feed/articles-more-every-week";

  const CORS_URL = "https://cors-anywhere.herokuapp.com/" + URL;

  return parse(URL)
    .then((rss) => {
      console.log(rss);
      return rss;
    })
    .catch(console.error);

  // return fetch(
  //   "https://cors-anywhere.herokuapp.com/https://medium.com/feed/articles-more-every-week"
  // )
  //   .then((res) => res.text())
  //   .then((data) => {
  //     const parser = new DOMParser();
  //     const xml = parser.parseFromString(data, "application/xml");
  //     console.log(xml);
  //     return xml;
  //   })
  //   .catch(console.error);
};
