import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function LoginPopUp() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    alert("Google login not implemented.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${
        isSignup ? "Signing up" : "Logging in"
      } with:\nEmail: ${email}\nPhone: ${phone}`
    );
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "5rem auto",
      padding: "2rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      marginBottom: "1rem",
    },
    input: {
      display: "block",
      width: "100%",
      padding: "10px",
      margin: "0.5rem 0",
      fontSize: "1rem",
    },
    button: {
      width: "100%",
      padding: "10px",
      marginTop: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
    },
    googleButton: {
      backgroundColor: "#db4437",
      color: "white",
      border: "none",
      padding: "10px",
      width: "100%",
      fontSize: "1rem",
      marginBottom: "1rem",
      cursor: "pointer",
    },
    emailButton: {
      // backgroundColor: "#db4437",
      color: "black",
      border: "none",
      padding: "10px",
      width: "100%",
      fontSize: "1rem",
      marginBottom: "1rem",
      cursor: "pointer",
    },
    toggleText: {
      color: "#007bff",
      cursor: "pointer",
      marginTop: "1rem",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isSignup ? "Sign Up" : "Login"}</h2>

      <button onClick={handleGoogleLogin} style={styles.googleButton}>
        Continue with Google
      </button>
      <button onClick={handleGoogleLogin} style={styles.emailButton}>
        Continue with Email
      </button>

      <form onSubmit={handleSubmit}>
        {/* <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          required
        /> */}

        {/* <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        /> */}

        {/* <button type="submit" style={styles.button}>
          {isSignup ? "Sign Up" : "Login"}
        </button> */}

        <h3>OR</h3>
        <form>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
        </form>
      </form>

      <p onClick={() => setIsSignup(!isSignup)} style={styles.toggleText}>
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign up"}
      </p>
    </div>
  );
}
