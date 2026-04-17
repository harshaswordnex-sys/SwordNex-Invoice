import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Pages */
import Dashboard from "./pages/Dashboard/Dashboard";
import InvoiceGenerator from "./pages/GenerateInvoice/InvoiceGenerator";
import Reports from "./pages/Reports/Reports";
import InvoiceHistory from "./pages/InvoiceHistory/InvoiceHistory";
import SubuserRecords from "./pages/SubuserRecords/SubuserRecords";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ DEFAULT (FIXED) */}
        <Route index element={<Navigate to="/dashboard" />} />

        {/* Pages */}
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