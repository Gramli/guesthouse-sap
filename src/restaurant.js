import React, { Component } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
import { GetImageMap } from './imageMap';

class Restaurant extends Component {
  render() {
    return (
      <Container>
        <h2>Restaurant</h2>         
          <ResolveCarouselItem />
        <p>The Col lets you specify column widths across 5 breakpoint sizes (xs, sm, md, lg, and xl). For every breakpoint, you can specify the amount of columns to span, or set the prop to for auto layout widths.</p>
      </Container>
    );
  }
}

function ResolveCarouselItem(){

  let imagesDict = GetImageMap();
  let result = [];

  for(let key in imagesDict){
    result.push(imagesDict[key]);
  }

  return (
  <Carousel>
    {result.map((item) => {
      return (
        <Carousel.Item>
        <Image
          className="d-block w-80"
          src={item}/>
      </Carousel.Item>
      )
    })}
  </Carousel>);
}
 
export default Restaurant;