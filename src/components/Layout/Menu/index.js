import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo-light.png";
import "./Menu.css";
import "../../../assets/css/Icons.css";
import "../../../assets/css/Buttons.css";

function Menu() {
  const [opened, setOpened] = useState(false);

  const toggler = useRef(null);

  const handleToggle = (opened) => setOpened(opened);

  const handleClick = () => {
    if (opened) toggler.current.click();
  };

  return (
    <>
      <MenuOverlay visible={opened} handleClick={handleClick} />
      <div className="custom-nav">
        <Navbar onToggle={handleToggle} bg="dark" variant="dark" expand="sm">
          <Container>
            <Button
              className="order-2 order-md-1 ml-auto ml-md-0 mr-1 mr-md-0 d-none d-sm-inline-block left-button"
              variant="outline-light"
            >
              EN
            </Button>
            <Navbar.Brand className="m-0 m-md-auto order-1 order-md-2">
              <Link to="/">
                <img src={logo} alt="Islam Message Logo" />
              </Link>
            </Navbar.Brand>
            <div className="order-3 order-md-3">
              <Button
                variant="outline-light"
                className="mr-1 d-none d-none d-sm-inline-block"
              >
                {/* <span className="d-none d-lg-block">create new account</span> */}
                <span>Register</span>
              </Button>
              <Button
                variant="light"
                className="mr-1 d-none d-none d-sm-inline-block"
              >
                Login
              </Button>
              <Navbar.Toggle ref={toggler} aria-controls="basic-navbar-nav" />
            </div>
          </Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" activeKey="/home">
              <MenuItem
                iconClass="islamic-centers-icon"
                path="islamic_centers"
                title="Islamic Centers"
              />
              <MenuItem iconClass="events-icon" path="events" title="Events" />
              <MenuItem iconClass="news-icon" path="news" title="News" />
              <div className="menu-buttons">
                <Button variant="success" className="d-inline-block d-sm-none">
                  login / register
                </Button>
                <Button
                  variant="success"
                  className="d-inline-block d-sm-none ml-1"
                >
                  EN
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

function MenuItem({ iconClass, path, title }) {
  return (
    <div className="menu-item">
      <Link className="nav-link" to={`/${path}`}>
        <div className={`menu-item-icon ${iconClass}`}></div>
        <span>{title}</span>
      </Link>
    </div>
  );
}

function MenuOverlay({ visible, handleClick }) {
  return (
    <div
      className={`overlay ${visible ? "show" : "hidden"}`}
      id="menu-overlay"
      onClick={handleClick}
    ></div>
  );
}

export default Menu;
