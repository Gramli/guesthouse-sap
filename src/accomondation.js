import React, { Component } from "react";
import { Container, Card, Button, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import {Link} from "react-router-dom";
import pct1 from "./assets/pct1.png";
import pct2 from "./assets/pct2.png";
import pct3 from "./assets/pct3.png";
 
class Accomondation extends Component {
  render() {
    return (
      <Container>
        <h2>Accomondation</h2>
        <p>
        A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
        </p>
        <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pct1} />
        <Card.Body>
          <Card.Title>Room 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Link to="/accomondation/1">
            <Button variant="secondary">Room Details</Button>
          </Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price $150</ListGroupItem>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pct2} />
        <Card.Body>
          <Card.Title>Room 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Link to="/accomondation/2">
            <Button variant="secondary">Room Details</Button>
          </Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price $150</ListGroupItem>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pct3} />
        <Card.Body>
          <Card.Title>Room 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Link to="/accomondation/3">
            <Button variant="secondary">Room Details</Button>
          </Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price $150</ListGroupItem>
        </ListGroup>
      </Card>
      </CardGroup>
      </Container>
    );
  }
}
 
export default Accomondation;