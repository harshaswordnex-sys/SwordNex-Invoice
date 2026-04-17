import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./dashboard.module.css";

const navItems = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "📦", label: "Inventory" },
  { icon: "📑", label: "Barcodes" },
  { icon: "🧾", label: "POS Billing" },
  { icon: "🗒️", label: "Record" },
  { icon: "📈", label: "Reports" },
  { icon: "🧮", label: "GST Bill" },
  { icon: "💼", label: "Cash Book" },
  { icon: "💳", label: "Credit" },
  { icon: "👥", label: "Subuser Records" },
];

const stats = [
  { icon: "$", label: "TOTAL REVENUE", value: "₹834,285", variant: "green" },
  { icon: "📈", label: "NET PROFIT", value: "₹832,285", variant: "green", badge: "99.76% margin" },
  { icon: "🛒", label: "TOTAL SALES", value: "₹763,400", variant: "teal" },
  { icon: "📉", label: "EXPENSES", value: "₹2,000", variant: "red" },
];

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main */}
      <div className={styles.main}>

        {/* Topbar */}
        <Topbar onToggle={() => setCollapsed(c => !c)} />

        {/* Content */}
        <div className={styles.content}>

          <h2>Dashboard</h2>

        </div>

      </div>
    </div>
  );
}