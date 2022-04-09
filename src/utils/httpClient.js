const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(`${API + path}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTA5ZWRlOGFlNWNjZTVlNWNhNzFjYmUxZDU3NzdlMiIsInN1YiI6IjYyMzRmMDU4NTM4NjZlMDA0ODU2YmY2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1LZytrgpRAGYbxv7RSoqRnqa78Qw_xZT9wwT1gQuliw",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json());
}
