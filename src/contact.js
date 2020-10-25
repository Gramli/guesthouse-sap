import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
 
class Contact extends Component {
  render() {
    return (
      <Container>
        <h2>Contacts</h2>
        <Row>
          <Col>
              <h3>Contact</h3>
              <h6>email</h6>
              <h6>mobile</h6>
          </Col>
          <Col>
              <h3>Address</h3>
              <h6>Some Address</h6>
              <h6>At somewhere</h6>
              <h6>At 78784</h6>
          </Col>
        </Row>
        <Row>
          <Col/>
        </Row>
        <Row>
        <Col>
                <h3>Opening Hours</h3>
                <h6>Monday</h6>
                <h6>Tuesday</h6>
                <h6>Wednesday</h6>
                <h6>Thursday</h6>
                <h6>Friday</h6>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
 
export default Contact;