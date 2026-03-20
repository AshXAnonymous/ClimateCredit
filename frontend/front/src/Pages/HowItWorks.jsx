function HowItWorks() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "60px 20px",
      background: "linear-gradient(to bottom right, #000000, #1a0033, #0a0f2c)",
      color: "white",
      textAlign: "center"
    }}>

      {/* Heading */}
      <h1 style={{
        fontSize: "42px",
        marginBottom: "10px",
        fontWeight: "600"
      }}>
        How It Works
      </h1>

      {/* Description */}
      <p style={{
        maxWidth: "650px",
        margin: "0 auto 50px",
        color: "#cfcfcf",
        lineHeight: "1.6"
      }}>
        Our platform creates a transparent system where industries report emissions,
        the system evaluates performance, and users gain insights to make better,
        environmentally responsible decisions.
      </p>

      {/* Steps Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}>

        {/* Step 1 */}
        <div style={cardStyle}>
          <div style={iconStyle}>🏭</div>
          <h3>Step 1</h3>
          <p style={textStyle}>
            Industries register and submit their emission data securely.
          </p>
        </div>

        {/* Arrow */}
        <div style={arrowStyle}>➜</div>

        {/* Step 2 */}
        <div style={cardStyle}>
          <div style={iconStyle}>🧮</div>
          <h3>Step 2</h3>
          <p style={textStyle}>
            Our system analyzes the data and calculates climate scores.
          </p>
        </div>

        {/* Arrow */}
        <div style={arrowStyle}>➜</div>

        {/* Step 3 */}
        <div style={cardStyle}>
          <div style={iconStyle}>📊</div>
          <h3>Step 3</h3>
          <p style={textStyle}>
            Verified results are processed and prepared for public visibility.
          </p>
        </div>

        {/* Arrow */}
        <div style={arrowStyle}>➜</div>

        {/* Step 4 */}
        <div style={cardStyle}>
          <div style={iconStyle}>👁️</div>
          <h3>Step 4</h3>
          <p style={textStyle}>
            Users explore dashboards and make informed, eco-conscious decisions.
          </p>
        </div>

      </div>

    </div>
  );
}

/* Card Style */
const cardStyle = {
  width: "220px",
  padding: "25px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "0.3s",
  cursor: "pointer"
};

/* Icon Style */
const iconStyle = {
  fontSize: "40px",
  marginBottom: "10px"
};

/* Text Style */
const textStyle = {
  color: "#bbb",
  fontSize: "14px",
  lineHeight: "1.5"
};

/* Arrow Style */
const arrowStyle = {
  fontSize: "30px",
  color: "#888"
};

export default HowItWorks;