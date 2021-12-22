import "../../style/MainPage.css";
import { useState } from "react";
import { SearchOutline } from "antd-mobile-icons";
import { useSelector } from "react-redux";

function SearchBar() {
  const [searchMovie, setSearchMovie] = useState([]);
  const movieDropDownList = useSelector((state) => state.movieList);

  function onChangeSearchMovie(event) {
    setSearchMovie(event.target.value);
  }

  function submitSearchMovie() {
    if (!(searchMovie.trim() === "")) {
    }
    setSearchMovie("");
  }

  function getDropDownItem() {
    return movieDropDownList.map((movie, index) => (
      <option key={index} value={movie.title} />
    ));
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
      <datalist id="movies">{getDropDownItem()}</datalist>

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
