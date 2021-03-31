import { Spinner } from "react-bootstrap";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h2>Loading</h2>
    </div>
  );
}
