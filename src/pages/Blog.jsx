import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import blogBanner from "../assets/banners/about.jpg";

const API_URL = "https://radhika-steel-1.onrender.com";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <PageBanner
        image={blogBanner}
        title="Our Blog"
        subtitle="Insights, updates, and knowledge from the steel industry"
      />

      <main className="blog-page">
        <h1 className="section-title">
          Latest Blogs
          <span className="title-underline"></span>
        </h1>

        {loading ? (
          <p className="loading-text">Loading blogs...</p>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img
                    src={`${API_URL}${blog.image}`}
                    alt={blog.title}
                    className="blog-img"
                  />

                  {/* 🔥 Hover overlay (if your CSS supports it) */}
                  <div className="blog-overlay">
                    <p className="blog-overlay-text">{blog.description}</p>
                  </div>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-meta">Posted on {new Date(blog.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Blog;
