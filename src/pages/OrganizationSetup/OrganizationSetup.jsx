import { Link } from "react-router-dom";
import styles from "./OrganizationSetup.module.css";

export default function OrganizationSetup() {
  return (
    <main className={styles.content}>

          {/* Header */}
          <div className={styles.header}>
            <h1>Organization Setup</h1>
            <p>Enter your business details for invoices</p>
          </div>

          {/* FORM */}
          <div className={styles.card}>

            {/* Basic Info */}
            <h3>Business Information</h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Business Name *</label>
                <input type="text" placeholder="Enter business name" />
              </div>

              <div className={styles.formGroup}>
                <label>Upload Logo</label>
                <input type="file" />
              </div>
            </div>

            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label>GSTIN</label>
                <input type="text" placeholder="22AAAAA0000A1Z5" />
              </div>

              <div className={styles.formGroup}>
                <label>PAN</label>
                <input type="text" placeholder="ABCDE1234F" />
              </div>

              <div className={styles.formGroup}>
                <label>State *</label>
                <select>
                  <option>Select State</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Business Address *</label>
              <input type="text" placeholder="Full address" />
            </div>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input type="text" placeholder="Phone number" />
              </div>

              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="email@company.com" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.btn}>Cancel</button>
            <button className={`${styles.btn} ${styles.primary}`}>
              <Link to="/dashboard" style={{textDecoration: "none", color: "#fff"}}>Save Organization</Link>
            </button>
          </div>

    </main>
  );
}