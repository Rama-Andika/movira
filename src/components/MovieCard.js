import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col sm={6} md={6} lg={4} xl={4} xxl={3} className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} target="_blank">
        <Card className="bg-dark text-white" data-aos="flip-up" data-aos-once="true" style={{ width: "100%", height: "100%" }}>
          <Card.Img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} style={{ width: "100%", height: "100%" }} />
          <Card.Body className="card-body-movie">
            <Card.Title>
              {movie.Title} ({movie.Year})
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;
