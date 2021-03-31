import { Breadcrumb } from "react-bootstrap";
import LocationItem from "./LocationItem";
import "./Location.css";

export default function Location({ address, title }) {
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
