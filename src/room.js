import React, { Component } from "react";
import { Container, Carousel, Table, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import { useParams } from "react-router-dom";
import { LoadAccomondationJson } from './loadJson'
import { GetAccomondationImageMap } from './imageMap'
 
class Room extends Component {
  render() {
    return (
      <Container>
        <ResolveRoom />
      </Container>
    );
  }
}

function ResolveRoom() {

  let images = GetAccomondationImageMap();
  let array = LoadAccomondationJson();
  const { roomId } = useParams();
  
return (
<div>
  <h2>{array[roomId].name}</h2>
  <Carousel>
    {array[roomId].img.map((myImg, i) => {
      let image = images[myImg];
      return (
        <Carousel.Item key = {i}>
          <Image 
          src = {image}
          className="d-block w-80" 
          alt="First slide"/>
        </Carousel.Item>
      )
    })}
  </Carousel>
  <p>{array[roomId].description}</p>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Price Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  {array[roomId].prices.map((myPrice) => {
      return (
        <tr>
        <td>{myPrice.priceName}</td>
        <td>{myPrice.price}</td>
      </tr>
      )
    })}
  </tbody>
</Table>
</div>
);
}
 
export default Room;