import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./Profile.module.css";

export default function Profile() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>

      {/* SAME SIDEBAR */}
      <Sidebar collapsed={collapsed} />

      <div className={styles.main}>

        {/* 🔥 SAME TOPBAR */}
        <Topbar onToggle={() => setCollapsed(c => !c)} />

        {/* CONTENT */}
        <main className={styles.content}>

          <div className={styles.container}>

            {/* Header */}
            <div className={styles.header}>
              <h2>Organization Profile</h2>
              <p className={styles.subtitle}>
                Manage your business details shown on invoices
              </p>
            </div>

            {/* Card */}
            <div className={styles.card}>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label>Business Name *</label>
                  <input value="SwordNex Pvt Ltd" disabled />
                </div>

                <div className={styles.formGroup}>
                  <label>Owner Name</label>
                  <input placeholder="Enter owner name" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Business Address</label>
                <input placeholder="Enter full address" />
              </div>

              <div className={styles.grid3}>
                <div className={styles.formGroup}>
                  <label>State</label>
                  <select>
                    <option>Select state</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>GSTIN</label>
                  <input placeholder="22AAAAA0000A1Z5" />
                </div>

                <div className={styles.formGroup}>
                  <label>PAN</label>
                  <input placeholder="ABCDE1234F" />
                </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label>Phone</label>
                  <input placeholder="Phone number" />
                </div>

                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input placeholder="email@company.com" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Logo</label>
                <input type="file" />
              </div>

              <div className={styles.actions}>
                <button className={styles.saveBtn}>Save Changes</button>
              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}