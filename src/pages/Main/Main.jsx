import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import useNewsStore from "../../store/newsStore";
import LatestNews from "../../components/LatestNews/LatestNews";
import usePaginationStore from "../../store/paginationStore";
import Header from "../../components/Header/Header";

const Main = () => {
  const { news, isLoading, keywords, setKeywords, fetchNews } = useNewsStore();
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    nextPage,
    prevPage,
    pageSize,
  } = usePaginationStore();

  const debouncedKeywords = useDebounce(keywords, 1500);

  useEffect(() => {
    fetchNews(currentPage, pageSize, debouncedKeywords);
  }, [currentPage, debouncedKeywords, fetchNews]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Search keywords={keywords} setKeywords={setKeywords} />
        <LatestNews isLoading={isLoading} banners={news} />

        <Pagination
          handleNextPage={nextPage}
          handlePreviousPage={prevPage}
          handlePageClick={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </main>
    </div>
  );
};

export default Main;
