import { Container } from "react-bootstrap";
import Location from "../Location";
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
