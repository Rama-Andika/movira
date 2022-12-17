import { Nav, Navbar , Container } from "react-bootstrap";

const NavigationBar = ({variant, bg}) => {
  return (
    <Navbar expand="md" variant={variant} bg={bg}>
      <Container>
        <Navbar.Brand href="/" >MOVIRA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#bestMovies" >Film terbaik</Nav.Link>        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
