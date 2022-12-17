import "./style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import BestMovie from "./components/BestMovie";
AOS.init();

function App() {
  return (
    <Routes>
      <Route path="/" element={<BestMovie />} />
      <Route path="movie/:imdbID" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
