import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/css/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-root">
      <div className="notfound-card">
        <div className="notfound-visual" aria-hidden="true">
          <svg
            viewBox="0 0 120 120"
            className="notfound-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="50" fill="#fff4ec" />
            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              fontSize="28"
              fontWeight="700"
              fill="#ff6a00"
            >
              404
            </text>
            <text x="50%" y="68%" textAnchor="middle" fontSize="9" fill="#666">
              Page not found
            </text>
          </svg>
        </div>

        <div className="notfound-content">
          <h1>Oops! Page not found.</h1>
          <p>The page you are looking for doesn't exist.</p>

          <div className="notfound-actions">
            <button className="btn-primary" onClick={() => navigate("/")}>
              Go Back Home
            </button>
            <button className="btn-secondary" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
