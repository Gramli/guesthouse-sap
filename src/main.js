import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Route,
    HashRouter,
    Link
  } from "react-router-dom";
  import Home from "./home";
  import Contact from "./contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Guesthouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/contact">Contact</Navbar.Brand>
        </Navbar>
          <div class="container-fluid">
          <h1>Simple SPA</h1>
             <Route exact path="/" component={Home}/>
             <Route path="/contact" component={Contact}/>
          </div>
        </HashRouter>
    );
  }
}
 
export default Main;