import create from "zustand";
import { getNews } from "../api/apiNews";

const useNewsStore = create((set) => ({
  news: [],
  isLoading: true,
  keywords: "",
  setKeywords: (keywords) => set({ keywords }),
  fetchNews: async (currentPage, pageSize, keywords) => {
    set({ isLoading: true });
    try {
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        keywords: keywords,
      });
      set({ news: response.news, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
}));

export default useNewsStore;
