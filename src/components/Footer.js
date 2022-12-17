import { Col, Container, Row } from "react-bootstrap";
import { Github, Instagram, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="text-white pb-2 pt-4" style={{ background: "tomato" }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12} sm={4} xxl={2} md="auto">
            <a href="https://www.instagram.com/ramaandka_" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
              <Instagram size={30} /> &nbsp;@ramaandka_
            </a>
          </Col>
          <Col xs={12} sm={4} xxl={2} md="auto" className="contact">
            <a href="https://wa.me/qr/GRDQL4PR3XBMC1" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
              <Whatsapp size={30} /> &nbsp;082235301519
            </a>
          </Col>
          <Col xs={12} sm={4} xxl={2} md="auto" className="contact">
            <a href="https://github.com/Rama-Andika" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
              <Github size={30} /> &nbsp;Rama-Andika
            </a>
          </Col>
        </Row>
       
        <p className="text-center ">Rama-Films @2022 All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
