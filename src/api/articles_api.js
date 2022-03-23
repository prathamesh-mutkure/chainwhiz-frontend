import parse from "rss-to-json";

const parseItem = (item) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(item.content, "text/html");

  const title = doc.querySelector("h3").innerText;
  const img = doc.querySelector("img").src;

  return { link: item.link, title, img };
};

export const getAllArticles = async () => {
  return parse("http://localhost:5000/medium")
    .then((rss) => {
      const items = rss.items.map(parseItem);

      return items;
    })
    .catch(console.error);
};
