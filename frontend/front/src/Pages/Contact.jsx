function Contact() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "60px 20px",
      background: "linear-gradient(to bottom right, #000000, #1a0033, #0a0f2c)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      {/* Heading */}
      <h1 style={{
        fontSize: "42px",
        marginBottom: "10px",
        fontWeight: "600",
        letterSpacing: "1px"
      }}>
        Contact Us
      </h1>

      {/* Description */}
      <p style={{
        maxWidth: "600px",
        textAlign: "center",
        color: "#cfcfcf",
        lineHeight: "1.6",
        marginBottom: "40px"
      }}>
        Have questions, feedback, or want to collaborate with us? We’d love to hear from you.
        Whether you're a user, industry partner, or organization, our team is here to help.
        Reach out and we’ll get back to you as soon as possible.
      </p>

      {/* Contact Container */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        width: "100%",
        maxWidth: "900px"
      }}>

        {/* Contact Info */}
        <div style={{
          flex: "1",
          minWidth: "280px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "25px",
          textAlign: "left"
        }}>
          <h3 style={{ marginBottom: "15px" }}>Get in Touch</h3>

          <p style={{ color: "#bbb", marginBottom: "10px" }}>
            📧 Email: support@climatecredits.com
          </p>

          <p style={{ color: "#bbb", marginBottom: "10px" }}>
            📞 Phone: +91 9876543210
          </p>

          <p style={{ color: "#bbb" }}>
            📍 Location: India
          </p>
        </div>

        {/* Contact Form */}
        <div style={{
          flex: "1",
          minWidth: "280px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "25px"
        }}>

          <h3 style={{ marginBottom: "15px" }}>Send a Message</h3>

          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#4c1d95",
                color: "white",
                fontWeight: "500",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.target.style.background = "#6d28d9"}
              onMouseOut={(e) => e.target.style.background = "#4c1d95"}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* Footer Note */}
      <p style={{
        marginTop: "40px",
        color: "#888",
        fontSize: "14px"
      }}>
        We typically respond within 24 hours.
      </p>

    </div>
  );
}

/* Reusable Input Style */
const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  outline: "none"
};

export default Contact;