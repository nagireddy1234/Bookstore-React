import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {NavLink} from "react-router-dom";

export default class Menu extends React.Component {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nagi's Bookstore</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" >
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown  nav inNavbar>
                <DropdownToggle nav caret>
                  Browse
                </DropdownToggle>
                <DropdownMenu color="primary" right>
                  <DropdownItem>
                  <NavLink to="/fantasy">Fantasy</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                      <NavLink to="/histroy">Histroy</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                      <NavLink to="/horror">Horror</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                       <NavLink to="/scifi">Scifi</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                      <NavLink to="/romance">Romance</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}