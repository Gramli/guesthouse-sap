import React, { Component } from "react";
import { Container, Card, Button, CardGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import {Link} from "react-router-dom";
import { LoadJson } from './loadJson'
import { GetImageMap } from './imageMap'
 
class Accomondation extends Component {
  render() {
    return (
      <Container>
        <h2>Accomondation</h2>
        <p>
        A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
        </p>
      <CardGroup>
        <ResolveCards />
      </CardGroup>
      </Container>
    );
  }
}

function ResolveCards() {
  let images = GetImageMap();
  let dict = LoadJson();

  var result = [];

 for(var key in dict){
    var item = dict[key];
    result.push(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={images[item.img[0]]} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.tittleDescription}</Card.Text>
      <Link to={`/accomondation/${item.id}`}>
        <Button variant="secondary">Room Details</Button>
      </Link>
    </Card.Body>
  </Card>
  )};
  return result;
}
 
export default Accomondation;