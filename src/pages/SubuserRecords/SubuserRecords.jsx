import React, { useState } from "react";
import Sidebar from "../../elements/Sidebar";
import Topbar from "../../elements/Topbar";
import styles from "./SubuserRecords.module.css";

const Subuser = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("All History");

  const tabs = [
    "All History",
    "Inventory",
    "Bill",
    "Credit",
    "Cashbook",
  ];

  return (
    <div className={styles.layout}>

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main */}
      <div className={styles.main}>
        <Topbar onToggle={() => setCollapsed(c => !c)} />

        {/* CONTENT AREA */}
        <main className={styles.content}>
          <div className={styles.container}>

            {/* Header */}
            <div className={styles.header}>
              <div>
                <h2>Subuser Records & Activity</h2>
                <p className={styles.subtitle}>
                  Monitor all activities across your business branches
                </p>
              </div>

              <button className={styles.exportBtn}>Export Data</button>
            </div>

            {/* Summary Cards */}
            <div className={styles.cards}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>TOTAL ACTIVITIES</p>
                <h3>11</h3>
              </div>

              <div className={styles.card}>
                <p className={styles.cardTitle}>SUB USER</p>
                <h3>2</h3>
              </div>

              <div className={styles.card}>
                <p className={styles.cardTitle}>CURRENT SESSION</p>
                <h3>Active</h3>
              </div>

              <div className={styles.card}>
                <p className={styles.cardTitle}>SYNC STATUS</p>
                <h3>Live</h3>
              </div>
            </div>

            {/* Table Section */}
            <div className={styles.tableCard}>
              <div className={styles.tableTop}>

                {/* Tabs */}
                <div className={styles.tabs}>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`${styles.tabBtn} ${
                        activeTab === tab ? styles.active : ""
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Search & Filter */}
                <div className={styles.actions}>
                  <input
                    type="text"
                    placeholder="Search records..."
                    className={styles.search}
                  />

                  <select className={styles.select}>
                    <option>All Staff</option>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>ACTIVITY</th>
                    <th>DETAILS</th>
                    <th>STAFF NAME</th>
                    <th>TIMESTAMP</th>
                    <th>AMOUNT</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Cashbook</td>
                    <td>bill</td>
                    <td>
                      <div className={styles.staffName}>
                        ron W
                        <span>BRANCH ID: HEAD</span>
                      </div>
                    </td>
                    <td>17 Mar 2026, 18:01</td>
                    <td className={styles.green}>₹2,000</td>
                    <td>→</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Cashbook</td>
                    <td>lunch</td>
                    <td>
                      <div className={styles.staffName}>
                        ron W
                        <span>BRANCH ID: HEAD</span>
                      </div>
                    </td>
                    <td>10 Mar 2026, 13:00</td>
                    <td className={styles.green}>₹2,000</td>
                    <td>→</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Cashbook</td>
                    <td>lunch</td>
                    <td>
                      <div className={styles.staffName}>
                        Luna lovehood
                        <span>BRANCH ID: HEAD</span>
                      </div>
                    </td>
                    <td>06 Mar 2026, 14:16</td>
                    <td className={styles.green}>₹2,000</td>
                    <td>→</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Credit</td>
                    <td>enid</td>
                    <td>
                      <div className={styles.staffName}>
                        Luna lovehood
                        <span>BRANCH ID: HEAD</span>
                      </div>
                    </td>
                    <td>06 Mar 2026, 14:15</td>
                    <td className={styles.red}>₹161,600</td>
                    <td>→</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Subuser;