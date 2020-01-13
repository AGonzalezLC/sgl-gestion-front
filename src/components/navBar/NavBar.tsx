import React from 'react'
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import './Nav.css';


const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Body className="navegacion">
        <Nav>
        <img src="/logo192.png" alt="Logo" width="40"/>
        </Nav>
        <Nav pullRight>
          <Dropdown title="Menu">
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )

}

export default NavBar;