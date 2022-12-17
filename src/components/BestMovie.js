import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pagination from "react-js-pagination";
import MovieLayout from "../layouts/MovieLayout";

const BestMovie = () => {
  const [search, setSearch] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const API_URL = "https://www.omdbapi.com/?apikey=d9126512";

  const searchMovie = async (title, pageNumber) => {
    const searchQuery = title ? title : search;
    const page = pageNumber ? pageNumber : currentPage;
    const response = await fetch(`${API_URL}&s=${searchQuery}&page=${page}`);
    const data = await response.json();
    setMovies(data.Search);
    setTotal(parseInt(data.totalResults));
    setCurrentPage(page);
    
  };

  useEffect(() => {
    searchMovie(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <MovieLayout>
      <div className="bestMovie">
        <Container className="pt-5">
          <h3 id="bestMovies" className="text-white" style={{ borderLeft: "4px solid tomato" }}>
            &nbsp; Film-film terbaik
          </h3>
          <Row className="g-3 justify-content-center pb-4 text-center mt-2 ">
            <Col xs={12} className="mb-5 mt-5">
              <Form.Group className="d-flex">
                <Form.Control type="search" name="search-form" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search movie by title..." className="form-search" />
                <i className="fa-solid fa-magnifying-glass fa-lg icon" onClick={() => searchMovie(search, 1)}></i>
              </Form.Group>
            </Col>
            {movies?.length > 0 ? (
              <>
                {movies.map((movie, index) => (
                  <MovieCard movie={movie} key={index} />
                ))}
              </>
            ) : (
              <Col xs={12}>
                <h2>Movie not found</h2>
              </Col>
            )}
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={10}
              totalItemsCount={total}
              onChange={(pageNumber) => searchMovie(search, pageNumber)}
              itemClasss="page-item"
              linkClass="page-link"
              innerClass="pagination justify-content-end"
            />
          </Row>
        </Container>
      </div>
    </MovieLayout>
  );
};

export default BestMovie;
