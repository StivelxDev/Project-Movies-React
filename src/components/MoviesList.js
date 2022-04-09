import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import Results from "./Results";
import ScrollToTop from "./ScrollToTop";

const MoviesList = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoader(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie/?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovie) => prevMovie.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoader(false);
    });
  }, [search, page]);

  if (!isLoader && movies.length === 0) {
    return <Results />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <ul className={styles.gridMovies}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <ScrollToTop showBelow={600} />
    </InfiniteScroll>
  );
};

export default MoviesList;
