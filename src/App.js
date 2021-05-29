import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//component
import Cards from "./Component/Card";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={4}>
            <Cards
              imgsrc="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Travel"
              description="1. Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://unsplash.com/photos/O453M2Liufs"
            />
          </Col>
          <Col md={4}>
            <Cards
              imgsrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Restaurant"
              description="2. Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://unsplash.com/photos/M7GddPqJowg"
            />
          </Col>
          <Col md={4}>
            <Cards
              imgsrc="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Food"
              description="3. Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://unsplash.com/photos/IGfIGP5ONV0"
            />
          </Col>
          <Col md={4}>
            <Cards
              imgsrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Beach"
              description="4. Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://unsplash.com/photos/RN6ts8IZ4_0"
            />
          </Col>
          <Col md={4}>
            <Cards
              imgsrc="https://images.unsplash.com/photo-1573878734959-7c38a12942ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              title="Office"
              description="5. Some quick example text to build on the card title and make up the bulk of the card's content."
              link="https://unsplash.com/photos/6vs4x5g84cs"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
