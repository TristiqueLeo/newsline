import create from "zustand";

const usePaginationStore = create((set) => ({
  currentPage: 1,
  totalPages: 10,
  pageSize: 18,
  setCurrentPage: (page) => set({ currentPage: page }),
  nextPage: () =>
    set((state) => ({
      currentPage:
        state.currentPage < state.totalPages
          ? state.currentPage + 1
          : state.currentPage,
    })),
  prevPage: () =>
    set((state) => ({
      currentPage:
        state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
    })),
  setTotalPages: (total) => set({ totalPages: total }),
}));

export default usePaginationStore;
