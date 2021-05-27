import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";

function Cards() {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/200/150" />
          <Card.Body>
            <Card.Title>Blog Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Read Now</Button>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Cards;
