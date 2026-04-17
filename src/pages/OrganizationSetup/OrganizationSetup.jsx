import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./OrganizationSetup.module.css";

export default function OrganizationSetup() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>

      <Sidebar collapsed={collapsed} />

      <div className={styles.main}>
        <Topbar onToggle={() => setCollapsed(c => !c)} />

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

          {/* Bank Details */}
          <div className={styles.card}>
            <h3>Bank Details</h3>

            <div className={styles.grid2}>
              <div className={styles.formGroup}>
                <label>Account Holder Name</label>
                <input type="text" />
              </div>

              <div className={styles.formGroup}>
                <label>Bank Name</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label>Account Number</label>
                <input type="text" />
              </div>

              <div className={styles.formGroup}>
                <label>IFSC Code</label>
                <input type="text" />
              </div>

              <div className={styles.formGroup}>
                <label>Branch</label>
                <input type="text" />
              </div>
            </div>
          </div>

          {/* Invoice Settings */}
          <div className={styles.card}>
            <h3>Invoice Settings</h3>

            <div className={styles.grid3}>
              <div className={styles.formGroup}>
                <label>Default Currency</label>
                <select>
                  <option>₹ INR</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Invoice Prefix</label>
                <input type="text" placeholder="INV" />
              </div>

              <div className={styles.formGroup}>
                <label>Payment Terms</label>
                <input type="text" placeholder="e.g. Due in 7 days" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Upload Signature</label>
              <input type="file" />
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.btn}>Cancel</button>
            <button className={`${styles.btn} ${styles.primary}`}>
              Save Organization
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}