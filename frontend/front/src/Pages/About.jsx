import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f766e, #047857)",
      color: "white",
      padding: "60px 20px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        About Climate Credit System
      </h1>

      <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: "1.8" }}>
        The Climate Credit System is designed to promote environmental responsibility 
        by creating a transparent platform where industries can track and manage their 
        carbon emissions. Our mission is to empower businesses and consumers to make 
        sustainable decisions that contribute to a greener future.
      </p>

      <p style={{ maxWidth: "800px", margin: "30px auto", fontSize: "18px", lineHeight: "1.8" }}>
        By assigning climate scores and incentivizing eco-friendly practices, we aim 
        to bridge the gap between economic growth and environmental sustainability.
      </p>

      <Link to="/" style={{
        display: "inline-block",
        marginTop: "40px",
        padding: "12px 25px",
        background: "#22c55e",
        borderRadius: "25px",
        textDecoration: "none",
        color: "white"
      }}>
        Back to Home
      </Link>
    </div>
  );
}

export default About;