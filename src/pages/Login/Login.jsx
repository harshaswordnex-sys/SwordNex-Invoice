import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import TypingText from "../../elements/TypingText";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/organization-setup");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (error) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🧾</span>
          <div className={styles.fnt}>
            <p>SwordNex</p>
            <h3>Invoice</h3>
          </div>
        </div>

        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>
          Sign in to manage your dashboard
        </p>

        {/* Role Switch */}
        <div className={styles.roleSwitch}>
          <button
            className={`${styles.roleBtn} ${role === "admin" ? styles.active : ""
              }`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
          <button
            className={`${styles.roleBtn} ${role === "team" ? styles.active : ""
              }`}
            onClick={() => setRole("team")}
          >
            Team
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", minWidth: "450px" }}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.passwordRow}>
              <label>Email Address</label>
            </div>
            <input
              type="email"
              placeholder="name@company.com"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className={styles.passwordRow}>
              <label>Password</label>
              <span className={styles.forgot}>Forgot?</span>
            </div>

            <input
              type="password"
              placeholder="Enter password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Error Message */}
            {error && (
              <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              className={styles.signInBtn}
              disabled={loading || !email || !password}
            >
              {loading ? <span className={styles.loader}></span> : "Sign-in"}
            </button>
          </form>
        </div>

        <div className={styles.divider}>
          <span>Or</span>
        </div>

        <button className={styles.googleBtn}>
          Continue with Google
        </button>

        <p className={styles.registerText}>
          Don't have an account? <span><Link to="/register" style={{textDecoration : "none", color : "green"}}>Register</Link></span>
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.illustrationBox}>
          <p className={styles.illustrationText}>
            Billing Illustration
          </p>

          <TypingText text="Invoices made simple and powerful" color="#166534" fontSize="24px" />
          <p className={styles.description}>
            Manage invoices, track payments in real-time, and grow your
            business with our automated billing platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;