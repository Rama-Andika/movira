import { Button, Col, Container, Row } from "react-bootstrap"

const Intro = () => {
    const myFunction = () => {
        window.location.href='#bestMovies';
    }
    
    return (
        <section className="section-header ">
            <Container className="d-flex justify-content-center align-items-center text-center">
                <Row>
                    <Col>
                        <h1>NONTON FILM-FILM TERBAIK</h1>                       
                        <Button onClick={myFunction} className="btnIntro fs-4" variant="dark" size="lg">Lihat film</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Intro