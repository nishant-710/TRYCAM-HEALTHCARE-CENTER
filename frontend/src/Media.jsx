import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/Media.css";

function Media() {
  const [mediaData, setMediaData] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    document.body.style.overflow = "hidden"; // disable scroll
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = "auto"; // enable scroll back
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/media`);
        setMediaData(res.data.media || []);
      } catch (error) {
        console.error("Error fetching media:", error);
        setMediaData([]);
      }
    };
    fetchMedia();
  }, []);

  // Escape key listener for modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const grouped = mediaData.reduce((acc, item) => {
    const title = item.titleId?.name || "Others";
    if (!acc[title]) acc[title] = [];
    acc[title].push(item);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <div>
        {/* Hero Section */}
        <section className="media-hero text-center text-white">
          <div className="container">
            <h1 className="display-5 fw-bold">Our Media Highlights</h1>
            <p className="lead">
              Explore our press, features, and event coverage
            </p>
          </div>
        </section>

        {/* Media Gallery Sections */}
        <section className="media-gallery py-5">
          <div className="container">
            {mediaData.length === 0 ? (
              <div className="text-center">
                <h2>No Media Available</h2>
                <p>Be the one to share your media with TRYCAM!</p>
              </div>
            ) : (
              Object.entries(grouped).map(([title, items], idx) => (
                <div className="media-section mb-5" key={idx}>
                  <h2 className="section-title">{title}</h2>
                  <div className="row g-4">
                    {items.map((item) => (
                      <div className="col-md-4" key={item._id}>
                        <div className="media-card" data-aos="fade-up">
                          {item.fileType === "video" ? (
                            <video
                              controls
                              className="img-fluid"
                              style={{
                                borderRadius: "12px",
                                width: "100%",
                                height: "auto",
                              }}
                            >
                              <source
                                src={`${
                                  import.meta.env.VITE_API_BASE
                                }/uploads/${item.file}`}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={`${import.meta.env.VITE_API_BASE}/uploads/${
                                item.file
                              }`}
                              alt={title}
                              loading="lazy"
                              onError={(e) => (e.target.src = "/fallback.jpg")}
                              onClick={() =>
                                openModal(
                                  `${import.meta.env.VITE_API_BASE}/uploads/${
                                    item.file
                                  }`
                                )
                              }
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Modal for images */}
      {modalImage && (
        <div className="custom-modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={modalImage}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Media;
