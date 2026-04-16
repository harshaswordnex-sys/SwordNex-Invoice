import React from "react";
import styles from "./Records.module.css";

export default function Records() {
  const customers = [
    {
      id: 1,
      customerId: "hjbjbjhgbj",
      name: "hvhvhfgh",
      phone: "20211522",
      product: "samsung a55",
      total: "₹64900.00",
      credit: "₹50000.00",
      balance: "₹14900.00",
      status: "Pending",
    },
    {
      id: 2,
      customerId: "CUST-001",
      name: "Ravi Kumar",
      phone: "9876543210",
      product: "N/A",
      total: "₹1200.00",
      credit: "₹200.00",
      balance: "₹0.00",
      status: "Completed",
    },
    {
      id: 3,
      customerId: "SDX14520",
      name: "devi",
      phone: "5430216589",
      product: "1+ Noard 3G, Oppo 12",
      total: "₹29677.00",
      credit: "₹0.00",
      balance: "₹0.00",
      status: "Completed",
    },
    {
      id: 4,
      customerId: "BNH5654",
      name: "ginny",
      phone: "5120321451",
      product: "Google A65 - white (500)",
      total: "₹25000.00",
      credit: "₹14750.00",
      balance: "₹0.00",
      status: "Completed",
    },
    {
      id: 5,
      customerId: "tom120",
      name: "tom",
      phone: "5412032658",
      product: "Oppo 12, 1+ Noard 3G",
      total: "₹29677.00",
      credit: "₹5935.40",
      balance: "₹0.00",
      status: "Completed",
    },
  ];

  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h1>Records</h1>
      </div>

      {/* Search */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search by name or email..."
          className={styles.search}
        />
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Total</th>
              <th>Credit</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.customerId}</td>
                <td className={styles.name}>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.product}</td>
                <td>{c.total}</td>
                <td className={styles.credit}>{c.credit}</td>
                <td
                  className={
                    c.balance !== "₹0.00"
                      ? styles.balanceDue
                      : styles.balanceZero
                  }
                >
                  {c.balance}
                </td>
                <td>
                  <span
                    className={
                      c.status === "Pending"
                        ? styles.statusPending
                        : styles.statusCompleted
                    }
                  >
                    {c.status}
                  </span>
                </td>

                <td>
                  <div className={styles.actions}>
                    <span className={styles.view}>👁</span>
                    <span className={styles.edit}>✏</span>
                    <span className={styles.delete}>🗑</span>
                    <span className={styles.grid}>▦</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}