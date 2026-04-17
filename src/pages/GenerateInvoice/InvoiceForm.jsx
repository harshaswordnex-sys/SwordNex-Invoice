import styles from "./InvoiceForm.module.css";

export default function InvoiceForm() {
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>New Invoice</h1>
          <span className={styles.status}>pending</span>
        </div>
      </div>

      {/* Invoice Details */}
      <div className={styles.card}>
        <h3>Invoice Details</h3>

        <div className={styles.grid4}>
          <div className={styles.formGroup}>
            <label>Invoice Number</label>
            <input type="text" defaultValue="INV-2604-6944" />
          </div>

          <div className={styles.formGroup}>
            <label>Invoice Date</label>
            <input type="date" />
          </div>

          <div className={styles.formGroup}>
            <label>Due Date</label>
            <input type="date" />
          </div>

          <div className={styles.formGroup}>
            <label>Currency</label>
            <select>
              <option>₹ Indian Rupee</option>
            </select>
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={styles.formGroup}>
            <label>Place of Supply</label>
            <select>
              <option>Select state</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Payment Status</label>
            <select>
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" defaultChecked />
            <span>Round off total</span>
          </div>
        </div>
      </div>

      {/* Seller + Buyer */}
      <div className={styles.twoColumn}>

        {/* Seller */}
        <div className={styles.card}>
          <h3>Seller Details (From)</h3>

          <div className={styles.formGroup}>
            <label>Business Name *</label>
            <input type="text" placeholder="Your business name" />
          </div>

          <div className={styles.formGroup}>
            <label>Address</label>
            <input type="text" placeholder="Full address" />
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label>State *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>GSTIN</label>
              <input type="text" placeholder="22AAAAA0000A1Z5" />
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label>Contact</label>
              <input type="text" placeholder="Phone number" />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="email@company.com" />
            </div>
          </div>
        </div>

        {/* Buyer */}
        <div className={styles.card}>
          <h3>Buyer Details (To)</h3>

          <div className={styles.formGroup}>
            <label>Business Name *</label>
            <input type="text" placeholder="Client business name" />
          </div>

          <div className={styles.formGroup}>
            <label>Address</label>
            <input type="text" placeholder="Full address" />
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label>State *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>GSTIN</label>
              <input type="text" placeholder="22AAAAA0000A1Z5" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Signature Image</label>
            <input type="file" />
          </div>
        </div>

      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.primary}`}>
          Save & Issue
        </button>
      </div>

    </div>
  );
}