import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
 
class Celebrations extends Component {
  render() {
    return (
      <Container>
        <h2>Celebrations</h2>
        <Row>
            <Col>
            <h3>Birthday party</h3>
            <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. </p>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
            <h3>Wedding</h3>
            <p>You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
            </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Celebrations;