import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [title, setTitle] = useState("");

  const loadBlogs = async () => {
    const res = await API.get("/blogs");
    setBlogs(res.data);
  };

  const deleteBlog = async (id) => {
    await API.delete(`/blogs/${id}`);
    loadBlogs();
  };

  const startEdit = (blog) => {
    setEditingBlog(blog._id);
    setTitle(blog.title);
  };

  const updateBlog = async (id) => {
    await API.put(`/blogs/${id}`, { title });
    setEditingBlog(null);
    loadBlogs();
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((b) => (
            <tr key={b._id}>
              <td>
                <img
                  src={`http://localhost:5000${b.image}`}
                  width="80"
                  alt=""
                />
              </td>

              <td>
                {editingBlog === b._id ? (
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  b.title
                )}
              </td>

              <td>
                {editingBlog === b._id ? (
                  <>
                    <button onClick={() => updateBlog(b._id)}>Save</button>
                    <button onClick={() => setEditingBlog(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(b)}>Edit</button>
                    <button onClick={() => deleteBlog(b._id)}>Delete</button>
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
