import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roleRequired }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth) {
    return <Navigate to="/" />; // not logged in
  }

  if (roleRequired && auth.role !== roleRequired) {
    return <Navigate to="/" />; // wrong role
  }

  return children;
};

export default ProtectedRoute;