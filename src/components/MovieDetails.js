import { Rate } from "antd-mobile";
import "../css/MovieDetails.css";
import YoutubeEmbed from "./YoutubeEmbed";
function MovieDetails({
  title,
  trailerSource,
  description,
  genre,
  category,
  rating,
}) {
    const imgurl = "https://pro2-bar-s3-cdn-cf2.myportfolio.com/f44a6a86-6cdb-4ac5-b205-003353cc5a9c/3297b6ad-5b32-4e86-96c5-f82c5275fbe8_rw_1200.jpg?h=4fb0a82075181bfcbafbadfe3291acec"
    const sectionStyle = {
        background: " linear-gradient(to top, rgba(0, 0, 0, 255) 25%, rgb(0, 0, 0,0) ),url("+imgurl+"})",
        borderRadius : "50px",
        backgroundSize: "contain",
      }
      
  return (
    <div style={ sectionStyle }>
        <div className="container">
        <div className="emptyDiv"/>
        <div className="movieName">Spider-Man: No Way Home</div>
        <div className="ratingGenreFlex">
            <spam className="genre">Drama</spam>
            <Rate className="star" allowHalf readOnly value={4.5} />
        </div>
        <div className="otherDetailsFlex">
            <div className="otherDetails">
                <div className="otherDetailsTitle">Duration</div>
                <div className="otherDetailsValue">148 mins</div>
            </div>
            <div className="otherDetails">
                <div className="otherDetailsTitle">Release</div>
                <div className="otherDetailsValue">15 Dec 2021</div>
            </div>
            <div className="otherDetails">
                <div className="otherDetailsTitle">Category</div>
                <div className="otherDetailsValue">IIB</div>
            </div>
        </div>
        <div id="movieDescription">
            <p>
            For the first time in the cinematic history of Spider-Man, our
            friendly neighborhood hero is unmasked and no longer able to separate
            his normal life from the high-stakes of being a Super Hero. When he
            asks for help from Doctor Strange the stakes become even more
            dangerous, forcing him to discover what it truly means to be
            Spider-Man.
            </p>
        </div>
        <div className="trailer">Trailer</div>
        <YoutubeEmbed embedId="rt-2cxAiPJk"/>
        </div>        
    </div>

  );
}
export default MovieDetails;
