import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getImageMovie } from "../utils/getImageMovie";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;

  const imageUrl = getImageMovie(poster_path, 300);

  /* const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : broke; */

  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${id}`}>
        <img
          width={300}
          height={450}
          className={styles.imgCard}
          src={imageUrl}
          alt={title}
        />
        <div className={styles.titleCard}>
          <h3>{title}</h3>
        </div>
      </Link>
    </li>
  );
};

export default MovieCard;
