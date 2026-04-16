import React from "react";
import styles from "./Reports.module.css";

const Reports = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2>Reports & Analytics</h2>
          <p className={styles.subtitle}>
            Overview of your business performance
          </p>
        </div>

        <button className={styles.dateBtn}>April 2026</button>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>TOTAL REVENUE</p>
          <h3>₹82,598.82</h3>
          <span className={styles.green}>↑ +12.5%</span>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>TOTAL INVOICES</p>
          <h3>3</h3>
          <span className={styles.green}>↑ +8.3%</span>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>GST COLLECTED</p>
          <h3>₹12,599.82</h3>
          <span className={styles.green}>↑ +5.2%</span>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>AVG. ORDER VALUE</p>
          <h3>₹27,533</h3>
          <span className={styles.red}>↓ -2.1%</span>
        </div>
      </div>

      {/* Business Health */}
      <div className={styles.health}>
        <span>Business Health</span>
        <div className={styles.healthStats}>
          <span>Revenue: ₹82,598.82</span>
          <span>GST: ₹12,599.82</span>
          <span>Customers: 23</span>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button className={`${styles.tabBtn} ${styles.active}`}>
          Invoices
        </button>
        <button className={styles.tabBtn}>Customers</button>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h3>Recent Invoices</h3>
            <p>Last 3 transactions</p>
          </div>
          <button className={styles.viewAll}>View All</button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>INVOICE #</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>INV-202603-</td>
              <td>efew</td>
              <td>26 Mar</td>
              <td>
                <span className={styles.status}>Generated</span>
              </td>
              <td className={styles.amount}>₹29,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
