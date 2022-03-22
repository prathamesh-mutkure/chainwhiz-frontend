export const getAllArticles = async () => {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://medium.com/feed/articles-more-every-week"
  )
    .then((res) => res.text())
    .then((data) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");

      console.log("DATA");
      return xml;
    })
    .catch(console.error);
};
