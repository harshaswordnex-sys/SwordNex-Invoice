import styles from "./Topbar.module.css";

export default function Topbar({ onToggle }) {
  return (
    <header className={styles.topbar}>
      
      {/* Toggle */}
      <button className={styles.tTog} onClick={onToggle}>
        ☰
      </button>

      <div className={styles.sp} />

      {/* Right section */}
      <div className={styles.tActs}>
        <button className={styles.nBtn}>🔔</button>

        <div className={styles.av}>M</div>
        <span className={styles.avN}>Magic</span>
      </div>
    </header>
  );
}