import React, { Component } from "react";
import { Container, Carousel, Table, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import { useParams } from "react-router-dom";
import pct1 from "./assets/pct1.png";
import pct2 from "./assets/pct2.png";
import pct3 from "./assets/pct3.png"; 
import data from "./assets/rooms.json"
 
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

  let images = {
    "pct1.png": pct1,
    "pct2.png": pct2,
    "pct3.png": pct3
  };


  let array = {};
  data.map((input) => {
    array[input.id] = input;
      });

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
  {array[roomId].prices.map((myPrice, i) => {
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