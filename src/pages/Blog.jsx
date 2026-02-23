import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import blogBanner from "../assets/banners/about.jpg";
import API from "../services/api";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageBanner
        image={blogBanner}
        title="Our Blog"
        subtitle="Insights, updates, and knowledge from the steel industry"
      />

      <main style={{ minHeight: "100vh", padding: "60px 20px" }}>
        <h1 style={{ textAlign: "center" }}>Latest Blogs</h1>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading blogs...</p>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <img
                  src={`https://radhika-steel-1.onrender.com${blog.image}`}
                  alt={blog.title}
                  className="blog-img"
                />
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Blog;
