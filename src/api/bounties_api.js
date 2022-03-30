export const getAllBounties = async () => {
  const API_URL = "https://backend-app.chainwhiz.app/question/fetchall";

  return fetch(API_URL)
    .then((response) => response.json())
    .catch(console.error);
};
