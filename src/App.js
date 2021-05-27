import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//component
import Cards from "./Card";
import Navbar from "./Navbar";

//array
import Blog_Data from "./Blogdata";

// function nblog(val) {
//   return (
//     <Col md={3}>
//       <Cards
//         imgsrc={Blog_Data[0].data_imgsrc}
//         title={Blog_Data[0].data_title}
//         description={Blog_Data[0].data_description}
//         link={Blog_Data[0].data_link}
//       />
//     </Col>
//   );
// }

console.log(Blog_Data[0]);
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row>
          {Blog_Data.map(function nblog(val) {
            return (
              <Col md={4}>
                <Cards
                  imgsrc={Blog_Data[0].data_imgsrc}
                  title={Blog_Data[0].data_title}
                  description={Blog_Data[0].data_description}
                  link={Blog_Data[0].data_link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
