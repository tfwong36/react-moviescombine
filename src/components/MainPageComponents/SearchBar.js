import "../../style/MainPage.css";
import { useState } from "react";
import { SearchOutline } from "antd-mobile-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [searchMovieTitle, setSearchMovieTitle] = useState([]);
  const movieDropDownList = useSelector((state) => state.movieList);
  const history = useHistory();

  function onChangeSearchMovie(event) {
    setSearchMovieTitle(event.target.value);
  }

  function submitSearchMovie(event) {
    let targetMovie = movieDropDownList.filter(
      (movie) => movie.title === searchMovieTitle
    )[0];
    if (targetMovie !== undefined) {
      history.push("/MovieDetails", targetMovie);
    }
    setSearchMovieTitle("");
  }

  function getDropDownItem() {
    // history.push("/MovieDetails");
    return movieDropDownList.map((movie, index) => (
      <>
        {/* <script>history.push("/MovieDetails", movie)</script> */}
        <option
          key={index}
          value={movie.title}
          // onClick={() => history.push("/MovieDetails", movie)}
        />
      </>
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
        value={searchMovieTitle}
      />
      <datalist id="movies">{getDropDownItem()}</datalist>
      <button
        type="submit"
        className="search-submit"
        onClick={submitSearchMovie}
      >
        <SearchOutline fontSize={26} color="white" />
      </button>
    </div>
  );
}
export default SearchBar;
