import "./Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardItem({ img, title, subtitle, time, to }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Card>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_DEV_API}/${img}`}
        />
        <Card.Body>
          {time && <span>{time}</span>}
          {title && <Card.Title>{title}</Card.Title>}
          {subtitle && (
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
          )}
          <Link className="card-link" to={to}>
            Read more
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
