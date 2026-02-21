import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProductManager from "./admin/ProductManager";
import BlogManager from "./admin/BlogManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ADMIN LOGIN (UNPROTECTED) */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ADMIN PROTECTED ROUTES */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductManager />} />
          <Route path="/admin/blogs" element={<BlogManager />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
