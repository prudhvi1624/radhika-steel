import AdminBlogs from "./AdminBlogs";
import AdminProducts from "./AdminProducts";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminBlogs />
      <AdminProducts />
    </div>
  );
}
