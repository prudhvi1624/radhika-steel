import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import productsBanner from "../assets/banners/about-main.jpg";

const API_URL = "http://localhost:5000";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageBanner
        image={productsBanner}
        title="Our Products"
        subtitle="High-quality MS steel products for every industry"
      />

      <main className="products-page">
        <h1 className="products-heading">Our Products</h1>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-img-wrapper">
                  <img
                    src={`${API_URL}${product.image}`}
                    alt={product.name}
                    className="product-img"
                  />

                  <div className="product-overlay">
                    <span className="view-badge">View Details</span>
                    <p className="product-description">
                      {product.description}
                    </p>
                  </div>
                </div>

                <h3>{product.name}</h3>
                <p>High quality mild steel product.</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Products;
