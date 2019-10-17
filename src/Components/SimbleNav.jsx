import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import banner from "./bannerFlag.png"
import "../stylesheets/navbar.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default class SimpleNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>

      <div>
        <Navbar id="custom-nav" className="fixed-top" expand="md">
          <NavbarBrand href="/">
            <img className="mt-5 bannerFlag" src={banner} width="78px"/>
          </NavbarBrand>
         
        </Navbar>
      </div>
      </Router>
    );
  }
}