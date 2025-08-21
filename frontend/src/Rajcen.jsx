import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/Rajcen.css";

function Rajcen() {
  const [centers, setCenters] = useState([]);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/rajcen`);
        setCenters(res.data.rajcen);
      } catch (err) {
        console.error("Error fetching centers:", err);
      }
    };
    fetchCenters();
  }, []);

  const toggleCenter = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div style={{ background: "linear-gradient(to right, #ffdfb4, #fff8f0)" }}>
      <Header />
      <section
        className="centers-container"
        style={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: centers.length === 0 ? "center" : "flex-start",
        }}
      >
        <div className="center-heading">
          <img
            src="../images/all/logo2.png"
            alt="TRYCAM Logo"
            className="center-logo"
          />
          <h1>TRYCAM CENTERS IN RAJASTHAN</h1>
        </div>

        {centers.length === 0 ? (
          <div className="no-centers">
            <h2 style={{ color: "#333", fontWeight: "500" }}>
              No centers available right now
            </h2>
            <p style={{ color: "#666" }}>
              Please check back later. We are expanding soon 🚀
            </p>
          </div>
        ) : (
          centers.map((center, idx) => (
            <div className="center-box" key={idx}>
              <h2 className="center-title" onClick={() => toggleCenter(idx)}>
                {center.name}
              </h2>

              {openIndexes.includes(idx) && (
                <div className="center-details show">
                  <p>
                    <strong>Address:</strong> {center.address}
                  </p>
                  <p>
                    <strong>Email:</strong> {center.email}
                  </p>
                  <p>
                    <strong>Contact:</strong> {center.contact}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Rajcen;
