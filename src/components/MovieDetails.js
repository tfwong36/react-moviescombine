import { Rate } from "antd-mobile";
import { NavBar } from "antd-mobile";
import { Button } from "antd-mobile";
import "../style/MovieDetails.css";
import { useHistory, useLocation } from "react-router-dom";
import YoutubeEmbed from "./MovieDetailComponents/YoutubeEmbed";
function MovieDetails() {
  const location = useLocation();
  const history = useHistory();
  const {
    id,
    category,
    description,
    genre,
    posterSource,
    rating,
    title,
    releaseDate,
    trailerSource,
    duration,
  } = location.state;
  const sectionStyle = {
    background:
      " linear-gradient(to top, rgba(0, 0, 0, 255) 35%, rgb(0, 0, 0,0) ),url(" +
      location.state.posterSource +
      ")",
    borderRadius: "45px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    marginTop: "51px",
  };

  return (
    <>
      <div>
        <NavBar onBack={() => history.goBack()} className="backText">
          Movie Details
        </NavBar>
      </div>
      <div style={sectionStyle}>
        <div className="movieDetailsContainer">
          <div className="movie-detail-empty-div" />
          <div className="movieName">{location.state.title}</div>
          <div className="ratingGenreFlex">
            <span className="genre">{location.state.genre}</span>
            <Rate
              className="star"
              allowHalf
              readOnly
              value={location.state.rating}
              style={{
                "--active-color": "#F79E44",
              }}
            />
          </div>
          <div className="otherDetailsFlex">
            <div className="otherDetails">
              <div className="otherDetailsTitle">Duration</div>
              <div className="otherDetailsValue">{location.state.duration}</div>
            </div>
            <div className="otherDetails">
              <div className="otherDetailsTitle">Release</div>
              <div className="otherDetailsValue">
                {location.state.releaseDate}
              </div>
            </div>
            <div className="otherDetails">
              <div className="otherDetailsTitle">Category</div>
              <div className="otherDetailsValue">{location.state.category}</div>
            </div>
          </div>
          <div id="movieDescription">
            <p>{location.state.description}</p>
          </div>
          <div className="trailer">Trailer</div>
          <div className="youtubeVideo">
            <YoutubeEmbed embedId={location.state.trailerSource} />
          </div>
          <div className="buttonContainer">
            <Button
              className="showtimeButton"
              onClick={() => history.push("/Showtime", id)}
            >
              SHOWTIME
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDetails;
