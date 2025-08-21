import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE}/products`
        );
        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <div className="products-container">
        <div className="page-header">
          <h1 className="page-title">OUR PRODUCTS</h1>
        </div>

        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                <img
                  src={`${import.meta.env.VITE_API_BASE}/uploads/${
                    product.image
                  }`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h2 className="product-name">{product.name}</h2>
                  <div className="product-price">
                    <span
                      className={`original-price ${
                        product.offerPrice != null ? "line-through" : ""
                      }`}
                    >
                      ₹{product.price || product.offerPrice}
                    </span>
                    {product.offerPrice != null && (
                      <span className="offer-price">₹{product.offerPrice}</span>
                    )}
                  </div>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>No Products Available</h2>
            <p>Please check back later!</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;
