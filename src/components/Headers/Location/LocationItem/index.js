import { Link } from "react-router-dom";
import "./LocationItem.css";

export default function LocationItem({ linkTo, children }) {
  return (
    <li className="breadcrumb-item">
      <Link to={linkTo}>{children}</Link>
    </li>
  );
}
