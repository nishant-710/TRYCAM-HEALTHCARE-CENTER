import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/Testimonials.css";

function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE}/testimonials`
        );
        setTestimonials(res.data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <Header />
      <div className="test-body">
        {/* Hero Banner */}
        <section className="test-hero-banner">
          <div className="hero-text">
            <h1>What Our Clients Say</h1>
            <p>
              Real experiences. Real results. Discover the impact of TRYCAM.
            </p>
          </div>
        </section>

        {/* Testimonials Gallery */}
        <section className="testimonial-gallery">
          <div className="test-custom-container">
            {testimonials.length > 0 ? (
              testimonials.map((item, index) => (
                <div
                  className="testimonial-card"
                  key={index}
                  onClick={
                    item.fileType === "image"
                      ? () => setSelectedImage(item.file)
                      : null
                  }
                >
                  {item.fileType === "image" ? (
                    <img
                      src={`${import.meta.env.VITE_API_BASE}/uploads/${
                        item.file
                      }`}
                      alt={item.alt || "Testimonial"}
                    />
                  ) : (
                    <video
                      src={`${import.meta.env.VITE_API_BASE}/uploads/${
                        item.file
                      }`}
                      controls
                    />
                  )}
                </div>
              ))
            ) : (
              <div className="no-testimonials">
                <h2 style={{ textAlign: "center" }}>
                  No Testimonials Available
                </h2>
                <p style={{ textAlign: "center" }}>
                  Be the one and share your experience with TRYCAM!
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Modal only for images */}
      {selectedImage && (
        <div className="test-modal" onClick={() => setSelectedImage(null)}>
          <div className="test-modal-content">
            <img
              src={`${import.meta.env.VITE_API_BASE}/uploads/${selectedImage}`}
              alt="Selected Testimonial"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Testimonials;
