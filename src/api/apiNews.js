import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getNewsDetails = async (id) => {
//   try {
//     const allNews = await getNews();
//     const newsItem = allNews.find((news) => news.id.toString() === id);
//     return newsItem;
//   } catch (error) {
//     console.error("Ошибка при получении деталей новости:", error);
//     throw error;
//   }
// };
