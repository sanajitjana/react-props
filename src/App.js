import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//component
import Cards from "./Component/Card";
import Navbar from "./Component/Navbar";

//array
import Blog_Data from "./Component/Api";

//------ fat arrow fucntion -------

// const nblog = (val) => {
//   return (
//     <Col md={4}>
//       <Cards
//         imgsrc={val.data_imgsrc}
//         title={val.data_title}
//         description={val.data_description}
//         link={val.data_link}
//       />
//     </Col>
//   );
// };

console.log(Blog_Data[0]);
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row>
          {Blog_Data.map((val) => {
            return (
              <Col md={4}>
                <Cards
                  imgsrc={val.data_imgsrc}
                  title={val.data_title}
                  description={val.data_description}
                  link={val.data_link}
                />
              </Col>
            );
          })}
          {/* {Blog_Data.map(nblog)} */}
        </Row>
      </Container>
    </>
  );
}

export default App;

//below default function-->
// function myname(a, b) {
//   a + b;
// }

//below fat arrow function-->
// const myname = (a, b) => a + b;
