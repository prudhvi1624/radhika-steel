import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");

  const loadProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await API.delete(`/products/${id}`);
    loadProducts();
  };

  const startEdit = (product) => {
    setEditingId(product._id);
    setName(product.name);
  };

  const updateProduct = async (id) => {
    await API.put(`/products/${id}`, { name });
    setEditingId(null);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>
                <img
                  src={`http://localhost:5000${p.image}`}
                  width="80"
                  alt=""
                />
              </td>

              <td>
                {editingId === p._id ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  p.name
                )}
              </td>

              <td>
                {editingId === p._id ? (
                  <>
                    <button onClick={() => updateProduct(p._id)}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(p)}>Edit</button>
                    <button onClick={() => deleteProduct(p._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
