import "../../style/MainPage.css";
import { useState } from "react";
import { SearchOutline } from "antd-mobile-icons";

function SearchBar() {
  const [searchMovie, setSearchMovie] = useState([]);

  function onChangeSearchMovie(event) {
    console.log(event.target.value);
    setSearchMovie(event.target.value);
  }

  function submitSearchMovie() {
    setSearchMovie("");
  }

  return (
    <div>
      <input
        className="search-bar"
        placeholder="Search Movie"
        list="movies"
        name="movie"
        id="movie"
        onChange={onChangeSearchMovie}
        value={searchMovie}
      />
      <datalist id="movies">
        <option value="Spider-Man: Work From Home" />
        <option value="Spider-Man: Not Coming Home" />
        <option value="Spider-Man: Home Sweet Home" />
      </datalist>

      <button
        type="submit"
        className="search-submit"
        onClick={submitSearchMovie}
      >
        <SearchOutline color="white" fontSize={24} />
      </button>
    </div>
  );
}
export default SearchBar;
