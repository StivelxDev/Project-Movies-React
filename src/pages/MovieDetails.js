import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { getImageMovie } from "../utils/getImageMovie";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(movieId);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getImageMovie(movie.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        width={500}
        height={750}
        src={imageUrl}
        alt={movie.title}
        className={`${styles.detailsImage} ${styles.col}`}
      />
      <div className={`${styles.detailsInfo} ${styles.col}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
