import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-light.png";
import "./Menu.css";
import "../../../assets/css/Icons.css";

function Menu() {
  return (
    <div className="custom-nav">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand className="m-auto">
            <Link to="/">
              <img src={logo} alt="Islam Message Logo" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Nav className="justify-content-center" activeKey="/home">
        <MenuItem
          iconClass="islamic-centers-icon"
          path="islamic_centers"
          title="Islamic Centers"
        />
        <MenuItem iconClass="events-icon" path="events" title="Events" />
        <MenuItem iconClass="news-icon" path="news" title="News" />
      </Nav>
    </div>
  );
}

function MenuItem({ iconClass, path, title }) {
  return (
    <div className="menu-item">
      <Link className="nav-link" to={`/${path}`}>
        <div className={`menu-item-icon ${iconClass}`}></div>
        {title}
      </Link>
    </div>
  );
}

export default Menu;
