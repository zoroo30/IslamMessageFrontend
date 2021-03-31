import "./Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardItem({
  img,
  title,
  subtitle,
  text,
  time,
  to,
  link,
}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_API_ENDPOINT}/${img}`}
        />
        <Card.Body>
          {time && <span className="card-time">{time}</span>}
          {title && <Card.Title>{title}</Card.Title>}
          {subtitle && (
            <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
          )}
          {text && <Card.Text>{text}</Card.Text>}
          <Link className="card-link" to={to}>
            {link}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
