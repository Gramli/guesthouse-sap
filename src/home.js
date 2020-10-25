import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { FacebookProvider, Page } from 'react-facebook'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.css';
 
class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
        <h2>About</h2>
        <p>The MIT License (MIT)

        Copyright (c) 2020 

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        </p>
          </Col>
          <Col>
          <h2>News</h2>
            <FacebookProvider wait appId="123456789">
              <Page href="" tabs="timeline"/>
            </FacebookProvider>
          </Col>
      </Row>
      </Container>
    );
  }
}
 
export default Home;