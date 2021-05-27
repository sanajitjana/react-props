import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Cards from "./Card";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row>
          <Col md={3}>
            <Cards
              imgsrc="https://picsum.photos/200/150"
              title="Blog Title"
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://picsum.photos/200/150"
            />
          </Col>
          <Col md={3}>
            <Cards />
          </Col>
          <Col md={3}>
            <Cards />
          </Col>
          <Col md={3}>
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
