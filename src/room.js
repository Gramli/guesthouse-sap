import React, { Component } from "react";
import { Container, Carousel, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import { useParams } from "react-router-dom";
import pct1 from "./assets/pct1.png";
import pct2 from "./assets/pct2.png";
import pct3 from "./assets/pct3.png"; 
 
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

  let room1 = {
    name: "room1 Name",
    description: "room1 description room1 description room1 description room1 description",
    img: [pct1, pct2, pct3],
    prices: [
      {
        priceName: "price1",
        price: "150",
      },
      {
        priceName: "price2",
        price: "180",
      }]
  };

  let room2 = {
    name: "room2 Name",
    description: "room2 description room2 description room2 description room2 description",
    img: [pct1, pct2, pct3],
    prices: [
      {
        priceName: "price1",
        price: "150",
      },
      {
        priceName: "price2",
        price: "180",
      }]
  };

  let room3 = {
    name: "room3 Name",
    description: "room3 description room3 description room3 description room3 description",
    img: [pct1, pct2, pct3],
    prices: [
    {
      priceName: "price1",
      price: "150",
    },
    {
      priceName: "price2",
      price: "180",
    }]
  };


  let array = {1:room1,2:room2, 3:room3};

  const { roomId } = useParams();
  
return (
<div>
  <h2>{array[roomId].name}</h2>
  <Carousel>
    {array[roomId].img.map((myImg, i) => {
      return (
        <Carousel.Item>
          <img
          className="d-block w-80"
          src = {myImg}
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