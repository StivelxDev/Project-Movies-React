import broke from "../images/broke.jpg";

export function getImageMovie(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : broke;
}
