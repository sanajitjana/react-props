import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container } from "react-bootstrap";

function Cards(props) {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Card>
          <Card.Img variant="top" src={props.imgsrc} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <a href={props.link} target="_new">
              <Button variant="primary">Read Now</Button>
            </a>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Cards;
