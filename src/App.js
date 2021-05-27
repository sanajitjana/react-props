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
            <Cards />
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
