import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Cards from "./Card";
import Navbar from "./Navbar";
import Blog_Data from "./Blogdata";

console.log(Blog_Data[0]);
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row>
          <Col md={3}>
            <Cards
              imgsrc={Blog_Data[0].data_imgsrc}
              title={Blog_Data[0].data_title}
              description={Blog_Data[0].data_description}
              link={Blog_Data[0].data_link}
            />
          </Col>
          <Col md={3}>
            <Cards
              imgsrc={Blog_Data[1].data_imgsrc}
              title={Blog_Data[1].data_title}
              description={Blog_Data[1].data_description}
              link={Blog_Data[1].data_link}
            />
          </Col>
          <Col md={3}>
            <Cards
              imgsrc={Blog_Data[2].data_imgsrc}
              title={Blog_Data[2].data_title}
              description={Blog_Data[2].data_description}
              link={Blog_Data[2].data_link}
            />
          </Col>
          <Col md={3}>
            <Cards
              imgsrc={Blog_Data[3].data_imgsrc}
              title={Blog_Data[3].data_title}
              description={Blog_Data[3].data_description}
              link={Blog_Data[3].data_link}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
