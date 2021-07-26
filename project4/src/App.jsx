import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {  Col, Row } from "react-bootstrap";
import Formlogin from './Formlogin';
import Formlienhe from './Formlienhe';
import TimHinh from './SearchHinh'
import Weather from './WeatherAPI'

function App() {
  return (
    <Container>
    <Row className="header bg-primary mb-1 text-white">HEADER </Row>    
    <Row className="sec1 mt-1">  
        <Col md={6} className="bg-success p-2" id="muc1">Muc 1</Col>
        <Col md={3} className="bg-info  p-3" id="muc2">Muc 2</Col>
        <Col md={3} className="bg-secondary p-3" id="muc3">Muc 3</Col>
     </Row>

    <Row className="sec2 mt-1">
          <Col sm={9} className="bg-info" id="maindata">   
        <Row className="header bg-light">LIÊN HỆ</Row>
            <Formlienhe />
            <hr/>
            <TimHinh/>
            <hr/>
            <Weather/>
          </Col>
          <Col sm={3} className="bg-light" id="ttbosung">
          <Row className="header">LOGIN</Row>
            <Formlogin/>
          </Col>
    </Row>
    <Row className="footer my-1 bg-dark text-white">
        <Col id="footer1" md={4} className="bg-secondary"> footer 1 </Col>
        <Col id="footer2" md={4} className="bg-warning"> footer 2 </Col>
        <Col id="footer3" md={4} className="bg-dark"> footer 3</Col>
    </Row>
  </Container>   
  );

}

export default App;
