import React, { useState } from "react";
import styles from "./SuperAdminPanel.module.css";

const SuperAdminPanel = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2 className={styles.logo}>🧾 Admin</h2>

        <ul>
          <li
            className={active === "dashboard" ? styles.active : ""}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={active === "users" ? styles.active : ""}
            onClick={() => setActive("users")}
          >
            Users
          </li>
          <li
            className={active === "settings" ? styles.active : ""}
            onClick={() => setActive("settings")}
          >
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Topbar */}
        <div className={styles.topbar}>
          <h3>Super Admin Panel</h3>
          <button
            className={styles.logout}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {active === "dashboard" && (
            <div className={styles.cards}>
              <div className={styles.card}>Total Users: 25</div>
              <div className={styles.card}>Admins: 5</div>
              <div className={styles.card}>Revenue: ₹50,000</div>
            </div>
          )}

          {active === "users" && (
            <div>
              <h3>User Management</h3>
              <p>List of users will come here...</p>
            </div>
          )}

          {active === "settings" && (
            <div>
              <h3>Settings</h3>
              <p>Admin settings here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPanel;