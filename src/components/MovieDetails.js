import { Rate, Space } from "antd-mobile";
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
    const sectionStyle = {
        margin: "20px",
        background: " no-repeat center center linear-gradient(to top, rgba(0, 0, 0, 255) 25%, rgb(0, 0, 0,0) ),url(https://pro2-bar-s3-cdn-cf2.myportfolio.com/f44a6a86-6cdb-4ac5-b205-003353cc5a9c/3297b6ad-5b32-4e86-96c5-f82c5275fbe8_rw_1200.jpg?h=4fb0a82075181bfcbafbadfe3291acec)",
        borderradius : "50px",
      }
      
  return (
    <div style={ sectionStyle }>
        <div className="container">
        {/* <div className="movieDetailsText">MOVIE DETAILS</div> */}
        <div className="emptyDiv"></div>
        <div className="movieName">Spider-Man: No Way Home</div>
        <Rate className="star" allowHalf readOnly value={3.5} />
        <Space style={{ "--gap": "24px" }}>
            <div className="otherDetails">
            </div>
            <div className="otherDetails">
            </div>
            <div className="otherDetails">TEST</div>
        </Space>
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
        <YoutubeEmbed embedId="dQw4w9WgXcQ"/>
        </div>        
    </div>

  );
}
export default MovieDetails;
