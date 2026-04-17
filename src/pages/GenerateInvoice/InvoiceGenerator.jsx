import { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import InvoiceForm from "./InvoiceForm";
import styles from "./InvoiceGenerator.module.css";

export default function InvoiceGenerator() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      
      <Sidebar collapsed={collapsed} />

      <div className={styles.main}>
        <Topbar onToggle={() => setCollapsed(c => !c)} />

        {/* ✅ IMPORTANT WRAPPER */}
        <main className={styles.content}>
          <InvoiceForm />
        </main>

      </div>

    </div>
  );
}