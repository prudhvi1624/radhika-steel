import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import productsBanner from "../assets/banners/about-main.jpg";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
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
                <img
                  src={`https://radhika-steel-1.onrender.com${product.image}`}
                  alt={product.name}
                  className="product-img"
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Products;
