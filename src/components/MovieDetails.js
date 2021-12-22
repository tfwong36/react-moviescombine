import { Rate } from "antd-mobile";
import { NavBar } from "antd-mobile";
import { Button } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";
import { useEffect } from "react";
import { Dialog } from "antd-mobile-icons";
import "../style/MovieDetails.css";
import { useHistory, useLocation } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
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
  } = location.state;
  const sectionStyle = {
    background:
      " linear-gradient(to top, rgba(0, 0, 0, 255) 35%, rgb(0, 0, 0,0) ),url(" +
      location.state.posterSource +
      ")",
    borderRadius: "50px",
    backgroundSize: "contain",
    backgroundRepeat  : "no-repeat",
  };

  return (
    <>
      <div onClick={() => history.goBack()}>
        <NavBar className="backText">Movie Details</NavBar>
      </div>
      <div style={sectionStyle}>
        <div className="container">
          <div className="emptyDiv" />
          <div className="movieName">{location.state.title}</div>
          <div className="ratingGenreFlex">
            <span className="genre">{location.state.genre}</span>
            <Rate
              className="star"
              allowHalf
              readOnly
              value={location.state.rating}
            />
          </div>
          <div className="otherDetailsFlex">
            <div className="otherDetails">
              <div className="otherDetailsTitle">Duration</div>
              <div className="otherDetailsValue">148 mins</div>
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
          <YoutubeEmbed embedId={location.state.trailerSource} />
        </div>
        <div>
          <Button color="warning" onClick={() => history.push("/Showtime", id)}>
            Showtime
          </Button>
        </div>
      </div>
    </>
  );
}
export default MovieDetails;
