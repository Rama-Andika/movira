import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavigationBar from "../components/NavigationBar";

const MovieLayout = ({ children }) => {
  return (
    <>
      <div className="holder">
        <div className="background-image">
          <NavigationBar variant="dark" />

          <Intro />
        </div>

        {children}

        <Footer />
      </div>
    </>
  );
};

export default MovieLayout;
