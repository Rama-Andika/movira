import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const MovieDetail = () => {
  const API_URL = "https://www.omdbapi.com/?apikey=d9126512";

  const { imdbID } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}&i=${imdbID}`);
    const data = await response.json();
    document.title = data.Title;
    if (response) {
      setIsLoading(false);
    }

    setMovieDetail(data);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="holder">
        <div className="movie-detail">
          <Container>
            <Row className="mt-4">
              <Col xs={12} md={5} lg={4} xl={4} className="mt-3">
                <Card className="text-white movie-card-detail" data-aos="flip-up" data-aos-once="true">
                  {isLoading ? (
                    <Skeleton height="100%" containerClassName="card-skeleton" />
                  ) : (
                    <Card.Img src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : "https://via.placeholder.com/400"} alt={movieDetail.Title} style={{ width: "100%", height: "100%" }} />
                  )}
                </Card>
              </Col>
              <Col xs={12} md={7} lg={8} xl={8} className="mt-3">
                <Card className="bg-dark text-white" style={{ width: "100%", height: "100%" }}>
                  <Card.Header className="fs-2">{movieDetail.Title}</Card.Header>
                  <Card.Body className="">
                    <Card.Text>{movieDetail.Plot}</Card.Text>
                  </Card.Body>
                  <Card.Body className="card-body-movie-detail">
                    <Card.Text>
                      <p className="d-inline" style={{ color: "white" }}>
                        Genre
                      </p>{" "}
                      : <p className="d-inline">{movieDetail.Genre}</p>
                    </Card.Text>
                    <Card.Text>
                      <p className="d-inline" style={{ color: "white" }}>
                        Actors
                      </p>{" "}
                      : <p className="d-inline">{movieDetail.Actors}</p>
                    </Card.Text>
                    <Card.Text>
                      <p className="d-inline" style={{ color: "white" }}>
                        Director
                      </p>{" "}
                      : <p className="d-inline">{movieDetail.Director}</p>
                    </Card.Text>
                    <Card.Text>
                      <p className="d-inline" style={{ color: "white" }}>
                        Writers
                      </p>{" "}
                      : <p className="d-inline">{movieDetail.Writer}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* <Row className="mt-5 text-start">
        <Col lg={4} xl={4}>
          <p>Genre : {movieDetail.Genre}</p>
        </Col>
        <Col lg={8} xl={8}>
          <p>Actors : {movieDetail.Actors}</p>
        </Col>
      </Row>
      <Row className="mt-0 text-start">
        <Col lg={4} xl={4}>
          <p>Director : {movieDetail.Director}</p>
        </Col>
        <Col lg={8} xl={8}>
          <p>Writers : {movieDetail.Writer}</p>
        </Col>
      </Row> */}
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MovieDetail;
