import { Rate } from "antd-mobile";
import { NavBar } from 'antd-mobile'
import { Button } from 'antd-mobile'
import { LeftOutline } from "antd-mobile-icons";
import "../style/MovieDetails.css";
import { useHistory, useLocation } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
function MovieDetails() {
  const location = useLocation();
  const history = useHistory();
  const {
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
      " linear-gradient(to top, rgba(0, 0, 0, 255) 25%, rgb(0, 0, 0,0) ),url(" +
      posterSource +
      "})",
    borderRadius: "50px",
    backgroundSize: "contain",
  };

  return (
    <>
      <div><NavBar className="backText" onClick={() => history.goBack()}>Movie Details</NavBar></div>
      <div style={sectionStyle}>
        <div className="container">
          <div className="emptyDiv" />
          <div className="movieName">{title}</div>
          <div className="ratingGenreFlex">
            <spam className="genre">{genre}</spam>
            <Rate className="star" allowHalf readOnly value={rating} />
          </div>
          <div className="otherDetailsFlex">
            <div className="otherDetails">
              <div className="otherDetailsTitle">Duration</div>
              <div className="otherDetailsValue">148 mins</div>
            </div>
            <div className="otherDetails">
              <div className="otherDetailsTitle">Release</div>
              <div className="otherDetailsValue">{releaseDate}</div>
            </div>
            <div className="otherDetails">
              <div className="otherDetailsTitle">Category</div>
              <div className="otherDetailsValue">{category}</div>
            </div>
          </div>
          <div id="movieDescription">
            <p>{description}</p>
          </div>
          <div className="trailer">Trailer</div>
          <YoutubeEmbed embedId={trailerSource} />
        </div>
        <div><Button color='warning' onClick={() => history.push("/Showtime")}>Showtime</Button></div>
      </div>
    </>
  );
}
export default MovieDetails;
