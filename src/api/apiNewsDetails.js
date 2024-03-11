import { getNews } from "./apiNews";

export const getNewsDetails = async (id) => {
  try {
    const allNews = await getNews();
    const newsItem = allNews.find((news) => news.id.toString() === id);
    return newsItem;
  } catch (error) {
    console.error("Ошибка при получении деталей новости:", error);
    throw error;
  }
};
