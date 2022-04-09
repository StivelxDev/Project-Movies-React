import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <h1 className={styles.title}>Movies</h1>
      </Link>
    </header>
  );
};

export default Header;
