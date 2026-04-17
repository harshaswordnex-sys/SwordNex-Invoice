import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Pages */
import Dashboard from "./pages/Dashboard/Dashboard";
import InvoiceGenerator from "./pages/GenerateInvoice/InvoiceGenerator";
import Reports from "./pages/Reports/Reports";
import InvoiceHistory from "./pages/InvoiceHistory/InvoiceHistory";
import SubuserRecords from "./pages/SubuserRecords/SubuserRecords";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import OrganizationSetup from "./pages/OrganizationSetup/OrganizationSetup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ DEFAULT (FIXED) */}
        <Route index element={<Navigate to="/login" />} />

        {/* Pages */}
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
    </BrowserRouter>
  );
}