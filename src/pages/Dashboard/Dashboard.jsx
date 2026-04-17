import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./dashboard.module.css";

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
          <h1>Dashboard</h1>
        </div>

      </div>
    </div>
  );
}