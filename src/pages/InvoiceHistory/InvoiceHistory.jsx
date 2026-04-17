import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./InvoiceHistory.module.css";

export default function InvoiceHistory() {
  const [collapsed, setCollapsed] = useState(false);

  const invoices = [
    {
      id: 1,
      invoiceNo: "INV-1001",
      date: "2026-04-10",
      issuedTo: "Ravi Kumar",
      amount: "₹12000",
    },
    {
      id: 2,
      invoiceNo: "INV-1002",
      date: "2026-04-12",
      issuedTo: "Devi",
      amount: "₹29677",
    },
    {
      id: 3,
      invoiceNo: "INV-1003",
      date: "2026-04-13",
      issuedTo: "Ginny",
      amount: "₹25000",
    },
    {
      id: 4,
      invoiceNo: "INV-1004",
      date: "2026-04-14",
      issuedTo: "Tom",
      amount: "₹29677",
    },
  ];

  return (
    <div className={styles.layout}>

      <Sidebar collapsed={collapsed} />

      <div className={styles.main}>
        <Topbar onToggle={() => setCollapsed(c => !c)} />

        <main className={styles.content}>

          {/* Header at top-left */}
          <h1 className={styles.header}>Invoice Records</h1>

          {/* Full width table */}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Invoice No</th>
                  <th>Date of Issue</th>
                  <th>Issued To</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {invoices.map((inv, index) => (
                  <tr key={inv.id}>
                    <td>{index + 1}</td>
                    <td>{inv.invoiceNo}</td>
                    <td>{inv.date}</td>
                    <td>{inv.issuedTo}</td>
                    <td>{inv.amount}</td>
                    <td>
                      <button className={styles.downloadBtn}>
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </main>
      </div>
    </div>
  );
}