import MoviesList from "../components/MoviesList";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

const LandingPage = () => {
  const query = useQuery();

  let search = query.get("search");

  // console.log(search);

  const debouncedSearch = useDebounce(search, 300);

  return (
    <>
      <Search />
      <MoviesList key={debouncedSearch} search={debouncedSearch} />
    </>
  );
};

export default LandingPage;
