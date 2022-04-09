import React from "react";
import { Link } from "react-router-dom";
import style from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={style.styleError}>
      <Link to="/">
        <h1 className={style.titleError}>Error 404</h1>
      </Link>
    </div>
  );
};

export default Error404;
