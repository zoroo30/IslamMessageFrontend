import "./ImageHeader.css";
import Location from "../Location";
import { Container } from "react-bootstrap";
import "../../../assets/css/backgrounds.css";

export default function ImageHeader({ address, title, imgPath }) {
  return (
    <div className="image-header">
      {/* <img src={imgPath} alt={title} /> */}
      {/* <div
        className="blured-background"
        style={{ backgroundImage: `url(${imgPath})` }}
      ></div> */}
      <Container>
        <div className="header-content">
          <Location address={address} title={title} />
        </div>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
      </Container>
    </div>
  );
}
