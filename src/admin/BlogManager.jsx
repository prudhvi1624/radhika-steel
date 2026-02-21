import React, { useEffect, useState } from "react";
import "./admin.css";

const API_URL = "http://localhost:5000/api/blogs";

function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("adminToken");

  /* FETCH BLOGS */
  const fetchBlogs = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  /* ADD / UPDATE BLOG */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);

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

    if (!res.ok) return alert("Failed");

    setFormData({ title: "", description: "", image: null });
    setEditId(null);
    fetchBlogs();
  };

  /* EDIT */
  const handleEdit = (blog) => {
    setEditId(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      image: null,
    });
  };

  /* DELETE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete blog?")) return;

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchBlogs();
  };

  return (
    <div className="admin-page">
      <h1>Blog Manager</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{editId ? "Edit Blog" : "Add Blog"}</h3>

        <input name="title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <input type="file" name="image" onChange={handleChange} />

        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <div className="admin-list">
        {blogs.map((b) => (
          <div key={b._id} className="admin-card">
            <img src={b.image} />
            <h4>{b.title}</h4>
            <button onClick={() => handleEdit(b)}>Edit</button>
            <button className="danger" onClick={() => handleDelete(b._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogManager;
