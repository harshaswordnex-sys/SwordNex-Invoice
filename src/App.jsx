import React from 'react';
import {
  ClipboardCheck,
  Barcode,
  Users,
  Percent,
  BarChart3,
  Printer,
  ShoppingBag,
  CreditCard,
  ClipboardList,
  Settings,
  LogOut,
  Menu,
  Bell
} from 'lucide-react';
import './App.css';

const App = () => {
  const menuItems = [
    { name: 'Inventory', icon: <ClipboardCheck size={20} /> },
    { name: 'Barcodes', icon: <Barcode size={20} />, active: true },
    { name: 'POS Billing', icon: <Users size={20} /> },
    { name: 'Record', icon: <Percent size={20} /> },
    { name: 'Reports', icon: <BarChart3 size={20} /> },
    { name: 'GST Bill', icon: <Printer size={20} /> },
    { name: 'Cash Book', icon: <ShoppingBag size={20} /> },
    { name: 'Credit', icon: <CreditCard size={20} /> },
    { name: 'Subuser Records', icon: <ClipboardList size={20} /> },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#10b981" />
              <path d="M7 6H17V18H7V6Z" fill="white" />
              <path d="M9 10H15" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 14H13" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">Swordnex</span>
            <span className="logo-subtitle">Billing</span>
          </div>
        </div>

        <nav className="menu">
          {menuItems.map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-name">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="bottom-menu">
          <div className="menu-item">
            <span className="menu-icon"><Settings size={20} /></span>
            <span className="menu-name">Settings</span>
          </div>
          <div className="menu-item logout">
            <span className="menu-icon"><LogOut size={20} /></span>
            <span className="menu-name">Log out</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-btn">
              <Menu size={24} />
            </button>
          </div>
          <div className="topbar-right">
            <button className="icon-btn notification-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="avatar">M</div>
              <span className="user-name">Magic</span>
            </div>
          </div>
        </header>

        {/* Dashboard content placeholder */}
        <div className="content-area">
          {/* Main area is left empty as requested */}
        </div>
      </main>
    </div>
  );
};

export default App;
