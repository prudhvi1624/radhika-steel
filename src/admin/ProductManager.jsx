import React, { useEffect, useState } from "react";
import "./admin.css";

const API_URL = "http://localhost:5000/api/products";

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("adminToken");

  /* ===========================
     FETCH PRODUCTS
  ============================ */
  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ===========================
     HANDLE INPUT CHANGE
  ============================ */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  /* ===========================
     ADD / UPDATE PRODUCT
  ============================ */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);

    try {
      const res = await fetch(
        editId ? `${API_URL}/${editId}` : API_URL,
        {
          method: editId ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        }
      );

      if (!res.ok) throw new Error("Failed");

      setFormData({ name: "", description: "", image: null });
      setEditId(null);
      fetchProducts();
    } catch (err) {
      alert("Error saving product");
      console.error(err);
    }
  };

  /* ===========================
     EDIT PRODUCT
  ============================ */
  const handleEdit = (product) => {
    setEditId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      image: null, // image optional during edit
    });
  };

  /* ===========================
     DELETE PRODUCT
  ============================ */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts();
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="admin-page">
      <h1>Product Manager</h1>

      {/* PRODUCT FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{editId ? "Edit Product" : "Add Product"}</h3>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="admin-list">
        <h3>All Products</h3>

        {products.map((product) => (
          <div key={product._id} className="admin-card">
            <img src={product.image} alt={product.name} />
            <div>
              <h4>{product.name}</h4>
              <p>{product.description.slice(0, 80)}...</p>
            </div>
            <div className="admin-actions">
              <button onClick={() => handleEdit(product)}>Edit</button>
              <button
                className="danger"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManager;
