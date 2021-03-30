import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../../assets/logo/logo-dark.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-5 bg-light">
      <Container>
        <Row>
          <Col lg={{ order: 3 }} md={5} sm={{ span: 5, order: 2 }}>
            <ul className="About list-unstyled">
              <h6 className="title-small">About</h6>
              <li>
                <FooterLink path="about_us" title="About us" />
              </li>
              <li>
                <FooterLink
                  path="terms_and_conditions"
                  title="Terms and conditions"
                />
              </li>
              <SocialNetworks className="d-lg-none" />
            </ul>
          </Col>
          <Col className="d-none d-lg-block" lg={{ order: 4 }}>
            <div className={`social-media-area`}>
              <h6 className="title-small">Social media</h6>
              <SocialNetworks />
            </div>
          </Col>
          <Col lg={{ order: 2 }} md={6} sm={{ order: 1 }}>
            <ul className="site-map list-unstyled">
              <h6 className="title-small">Services</h6>
              <li>
                <FooterLink
                  iconClass="islamic-centers-icon"
                  path="islamic_centers"
                  title="Islamic Centers"
                  subtitle="There are many variations."
                />
              </li>
              <li>
                <FooterLink
                  iconClass="events-icon"
                  path="events"
                  title="Events"
                  subtitle="There are many very passages."
                />
              </li>
              <li>
                <FooterLink
                  iconClass="news-icon"
                  path="news"
                  title="News"
                  subtitle="There are many variations of passages."
                />
              </li>
            </ul>
          </Col>
          <Col lg={{ span: 4, order: 1 }} sm={{ span: 12, order: 3 }}>
            <div className="logo-area">
              <Link to="/">
                <img src={Logo} alt="Islam Message Logo" />
              </Link>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <p>© 2021 Islam Message All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function FooterLink({ iconClass, path, title, subtitle }) {
  return (
    <Link className="footer-link" to={`/${path}`}>
      {iconClass && <div className={`menu-item-icon ${iconClass}`}></div>}
      <div className="text">
        {title && <span className="title">{title}</span>}
        {subtitle && <span className="subtitle">{subtitle}</span>}
      </div>
    </Link>
  );
}

function SocialNetworks({ className }) {
  return (
    <div className={className}>
      <a
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-facebook-square mr-1"></i>
      </a>
      <a
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-twitter-square"></i>
      </a>
    </div>
  );
}

export default Footer;
