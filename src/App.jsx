import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/ProtectedRoute";

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
import SuperAdminLogin from "./pages/SuperAdminLogin/SuperAdminLogin";
import SuperAdminPanel from "./pages/SuperAdminPanel/SuperAdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route index element={<Navigate to="/login" />} />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Super Admin Protected */}
        <Route
          path="/superadmin/panel"
          element={
            <ProtectedRoute roleRequired="superadmin">
              <SuperAdminPanel />
            </ProtectedRoute>
          }
        />

        {/* 🔐 Admin Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roleRequired="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/generate-invoice"
          element={
            <ProtectedRoute roleRequired="admin">
              <InvoiceGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/invoice-history"
          element={
            <ProtectedRoute roleRequired="admin">
              <InvoiceHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute roleRequired="admin">
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute roleRequired="admin">
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subuser-records"
          element={
            <ProtectedRoute roleRequired="admin">
              <SubuserRecords />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organization-setup"
          element={
            <ProtectedRoute roleRequired="admin">
              <OrganizationSetup />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}