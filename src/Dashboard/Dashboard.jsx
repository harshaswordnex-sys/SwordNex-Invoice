import { useState } from "react";
import styles from './Dashboard.module.css';

const DashboardIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="8" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="11" width="7" height="10" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
);

const InvoiceIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
        <line x1="8" y1="9" x2="10" y2="9" />
    </svg>
);

const HistoryIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
        <polyline points="12 7 12 12 15 14" />
    </svg>
);

const RecordsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

const ReportsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
);

const ProfileIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const SubuserIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);

const HamburgerIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="14" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
);

const BellIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const RefreshIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
    </svg>
);

const LogoIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
    </svg>
);

const NAV_ITEMS = [
    { id: "dashboard", label: "Dashboard", Icon: DashboardIcon },
    { id: "generate", label: "Generate Invoice", Icon: InvoiceIcon },
    { id: "history", label: "Invoice History", Icon: HistoryIcon },
    { id: "records", label: "Records", Icon: RecordsIcon },
    { id: "reports", label: "Reports", Icon: ReportsIcon },
    { id: "profile", label: "Profile", Icon: ProfileIcon },
    { id: "subuser", label: "Subuser Records", Icon: SubuserIcon },
];

export default function DashboardLayout() {
    const [active, setActive] = useState("dashboard");
    const [collapsed, setCollapsed] = useState(false);



    return (
        <>
            <div className={styles.layout}>

                <aside className={`${styles.sidebar}${collapsed ? ` ${styles.sidebarCollapsed}` : ""}`}>
                    <div className={styles.sLogo}>
                        <div className={styles.sMark}><LogoIcon /></div>
                        <div className={styles.sCopy}>
                            <div className={styles.sName}>SwordNex</div>
                            <div className={styles.sSub}>Invoice</div>
                        </div>
                    </div>

                    <nav className={styles.sNav}>
                        {NAV_ITEMS.map(({ id, label, Icon }) => (
                            <button
                                key={id}
                                className={`${styles.nb}${active === id ? ` ${styles.on}` : ""}`}
                                onClick={() => setActive(id)}
                                title={collapsed ? label : undefined}
                            >
                                <span className={styles.ni}><Icon /></span>
                                <span className={styles.nl}>{label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className={styles.sFoot}>
                        <button
                            className={`${styles.nb}${active === "settings" ? ` ${styles.on}` : ""}`}
                            onClick={() => setActive("settings")}
                            title={collapsed ? "Settings" : undefined}
                        >
                            <span className={styles.ni}><SettingsIcon /></span>
                            <span className={styles.nl}>Settings</span>
                        </button>
                        <button className={styles.nb} title={collapsed ? "Log out" : undefined}>
                            <span className={styles.ni}><LogoutIcon /></span>
                            <span className={styles.nl}>Log out</span>
                        </button>
                    </div>
                </aside>

                <div className={styles.main}>
                    <header className={styles.topbar}>
                        <button className={styles.tTog} onClick={() => setCollapsed(c => !c)}>
                            <HamburgerIcon />
                        </button>



                        <div className={styles.sp} />

                        <div className={styles.tActs}>
                            <div className={styles.nWrap}>
                                <button className={styles.nBtn} title="Notifications"><BellIcon /></button>
                                <span className={styles.nPip} />
                            </div>
                            <div className={styles.av} title="Magic">M</div>
                            <span className={styles.avN}>Magic</span>
                        </div>
                    </header>

                    <main className={styles.content}>
                        <div className={styles.ph}>
                            <h2>Dashboard Content</h2>
                            <p>Your page content goes here.</p>
                        </div>
                    </main>
                </div>

            </div>
        </>
    );
}