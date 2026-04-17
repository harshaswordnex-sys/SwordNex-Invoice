import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Pages */
import Dashboard from "./pages/Dashboard/Dashboard";
import InvoiceGenerator from "./pages/GenerateInvoice/InvoiceGenerator";
import Reports from "./pages/Reports/Reports";
import InvoiceHistory from "./pages/InvoiceHistory/InvoiceHistory";
import SubuserRecords from "./pages/SubuserRecords/SubuserRecords";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import OrganizationSetup from "./pages/OrganizationSetup/OrganizationSetup";
import Register from "./pages/Register/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ DEFAULT (FIXED) */}
        <Route index element={<Navigate to="/login" />} />

        {/* Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/organization-setup" element={<OrganizationSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate-invoice" element={<InvoiceGenerator />} />
        <Route path="/invoice-history" element={<InvoiceHistory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subuser-records" element={<SubuserRecords />} />

        {/* ✅ fallback */}
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}