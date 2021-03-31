import { Container } from "react-bootstrap";

export default function LoadingError({ error }) {
  return (
    <Container>
      <div className="error">
        <h5>Something went wrong!</h5>
        {error === "Unexpected token S in JSON at position 0" ? (
          <h6>Most probably the page you are trying to reach doesn't exist.</h6>
        ) : (
          <h6>Try to refreshe the page.</h6>
        )}
      </div>
    </Container>
  );
}
