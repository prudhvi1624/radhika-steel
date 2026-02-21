import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import blogBanner from "../assets/banners/about.jpg";

const API_URL = "http://localhost:5000";

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
        <h1 className="section-title" style={{ textAlign: "center" }}>
          Latest Blogs
          <span className="title-underline"></span>
        </h1>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading blogs...</p>
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
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Blog;
