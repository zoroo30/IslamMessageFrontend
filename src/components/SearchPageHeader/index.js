import { Link } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import "./SearchPageHeader.css";

export default function SearchPageHeader({ pageDetails }) {
  const { address, title, headerText } = pageDetails;
  return (
    <div className="search-page-header" id="start">
      <Container>
        <Location address={address} title={title} />
        <h1 className="page-big-title" id="animate">
          {headerText}
        </h1>
      </Container>
    </div>
  );
}

function Location({ address, title }) {
  return (
    <Breadcrumb>
      {address.map((page) => (
        <LocationItem key={page.title} linkTo={page.linkTo}>
          {page.title}
        </LocationItem>
      ))}
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

function LocationItem({ linkTo, children }) {
  return (
    <li className="breadcrumb-item">
      <Link to={linkTo}>{children}</Link>
    </li>
  );
}
