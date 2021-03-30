import "../../assets/css/backgrounds.css";

export default function HomeHeader() {
  return (
    <div className="bg-pattern-green" style={{ height: "100%" }}>
      <h1
        style={{
          fontWeight: "700",
          fontSize: "32px",
          textAlign: "center",
          padding: "100px 0",
          color: "#777",
        }}
      >
        Welcome to Islam Message
      </h1>
    </div>
  );
}
