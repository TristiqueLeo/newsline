import React from "react";
import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import { useNavigate } from "react-router-dom";

const NewsBanner = ({ item }) => {
  const navigate = useNavigate();

  const goToNewsDetails = () => {
    navigate(`/news/`);
  };

  // const goToNewsDetails = () => {
  //   navigate(`/news/${item.id}`);
  // };

  return (
    <header className={styles.banner} onClick={goToNewsDetails}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </header>
  );
};

export default NewsBanner;
