import React, { Component } from "react";
import { Container, Carousel, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import pct1 from "./assets/pct1.png";
import pct2 from "./assets/pct2.png";
import pct3 from "./assets/pct3.png"; 

class Restaurant extends Component {
  render() {
    return (
      <Container>
        <h2>Restaurant</h2>         
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={pct1} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={pct2} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={pct3} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <p>
      The Col lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to for auto layout widths.
      </p>
      </Container>
    );
  }
}
 
export default Restaurant;