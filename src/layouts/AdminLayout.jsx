import { Outlet, Navigate } from "react-router-dom";

export default function AdminLayout() {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="admin-layout">
      <Outlet />
    </div>
  );
}
