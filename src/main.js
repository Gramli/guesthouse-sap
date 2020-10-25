import React, { Component } from "react";
import { Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Route,
    HashRouter,
    NavLink,
    Link,
  } from "react-router-dom";
  import Home from "./home";
  import Contact from "./contact";
  import Accomondation from "./accomondation";
  import Restaurant from "./restaurant";
  import Celebration from "./celebrations";
  import "./styles/main.css";
  import './styles/general.css';
  import Room from "./room";
 
class Main extends Component {
  render() {
    return (     
        <HashRouter>
        <Navbar collapseOnSelect="true" className="color-nav" variant="light" expand="lg">
          <Navbar.Brand className="nav-brand" as={Link} to="/">Guesthouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink activeClassName="nav-item-active" className="nav-item" as={Link} to="/">Home</NavLink>
              <NavLink activeClassName="nav-item-active" className="nav-item" as={Link} to="/restaurant">Restaurant&Pub</NavLink>
              <NavLink activeClassName="nav-item-active" className="nav-item" as={Link} to="/accomondation">Accomondation</NavLink>
              <NavLink activeClassName="nav-item-active" className="nav-item" as={Link} to="/celebration">Celebrations</NavLink>
              <NavLink activeClassName="nav-item-active" className="nav-item" as={Link} to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/accomondation" component={Accomondation}/>
        <Route path="/restaurant" component={Restaurant}/>
        <Route path={"/accomondation/:roomId"} component={Room}/>
        <Route path={"/celebration"} component={Celebration}/>
        </HashRouter>        
    );
  }
}
 
export default Main;