import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("admin");

  return (
    <div className={styles.container}>
      {/* Left Section */}
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
            className={`${styles.roleBtn} ${
              role === "admin" ? styles.active : ""
            }`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
          <button
            className={`${styles.roleBtn} ${
              role === "team" ? styles.active : ""
            }`}
            onClick={() => setRole("team")}
          >
            Team
          </button>
        </div>

        {/* Form */}
        <div style={{display: "flex", justifyContent: "center", minWidth: "450px"}}>
        <form className={styles.form}>
          <div className={styles.passwordRow}>
            <label>Email Address</label>
          </div>
          <input
            type="email"
            placeholder="name@company.com"
            className={styles.input}
          />

          <div className={styles.passwordRow}>
            <label>Password</label>
            <span className={styles.forgot}>Forgot?</span>
          </div>

          <input
            type="password"
            placeholder="Enter password"
            className={styles.input}
          />

          <button type="submit" className={styles.signInBtn}>
            <Link to="/organization-setup" style={{textDecoration: "none", color: "#fff"}}>Sign-in</Link>
          </button>
        </form>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span>Or</span>
        </div>

        {/* Google */}
        <button className={styles.googleBtn}>
          Continue with Google
        </button>

        <p className={styles.registerText}>
          Don't have an account? <span>Register</span>
        </p>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.illustrationBox}>
          <p className={styles.illustrationText}>
            Billing Illustration
          </p>

          <h2 className={styles.tagline}>
            Secure • Smart • Automated Billing
          </h2>

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