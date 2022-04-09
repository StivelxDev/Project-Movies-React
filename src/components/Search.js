import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.boxSearch}>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            navigate(`/?search=${value}`);
          }}
        />
        <button type="submit" className={styles.searchButton}>
          <span>
            <FaSearch size={25} />
          </span>
        </button>
      </div>
    </form>
  );
};
