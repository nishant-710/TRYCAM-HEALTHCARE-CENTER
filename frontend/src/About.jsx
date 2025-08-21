import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/About.css";

function About() {
  return (
    <>
      <Header />
      <main>
        <div class="about-body">
          {/* About Section */}
          <section className="about-section">
            <div className="custom-container">
              <div className="about-grid">
                <div className="about-content">
                  <h2>ABOUT US</h2>
                  <p>
                    Trycam Technology Co., Ltd. started its production in 2006
                    with a noble mission of contributing to social welfare and
                    medical health by supplying medical devices. Trycam India
                    works with the global health company Trycam Korea to advance
                    human health through cutting-edge technologies.
                  </p>
                  <p>
                    We at Trycam India believe in 'Health for all.' We are an
                    expanding and fast-growing company. We take pride in our
                    products as they meet the medical practice standard. We
                    firmly believe that Trycam products, predominantly made in
                    Korea, set the bar for quality and innovation in our
                    country. Through this alternative treatment, we heal you.
                  </p>
                </div>
                <div className="about-image">
                  <img src="images/all/winner.jpeg" alt="About TRYCAM" />
                </div>
              </div>
              <div className="vm-section">
                <div className="vm-box">
                  <h3>Vision</h3>
                  <p>
                    Our company believes in the fundamental values of Health For
                    All. We believe good health is the best form of wealth. Our
                    vision is to enrich everyone's life with a wealth of health.
                    Our vision is aligned with the "Health For All" vision of
                    the World Health Organization (WHO) and the Government of
                    India.
                  </p>
                </div>
                <div className="vm-box">
                  <h3>Mission</h3>
                  <p>
                    We are on a mission to provide the best health to all
                    concerned and do our best to achieve good health, wealth,
                    and happiness for mankind. We are committed to providing
                    quality products for an alternative healing system and clean
                    drinking water for the well-being of the public at large.
                  </p>
                </div>
                <div className="vm-box">
                  <h3>Values</h3>
                  <p>
                    Health, Happiness, Beautiful Life tops our company's value
                    system. We put a great value on taking the organization
                    forward by providing genuine service and health to the
                    people. We are bound by our promise to provide the best of
                    these to our customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="history-section">
            <div className="container">
              <h2 className="section-heading">Company History</h2>
              <div className="history-grid">
                <div className="history-column">
                  <h3>Trycam Company</h3>
                  <div className="history-box">
                    <p>
                      <strong>2006–2009:</strong> Product development, CE, FCC,
                      ISO certifications, Korea exhibitions.
                    </p>
                    <p>
                      <strong>2010–2014:</strong> Global participations, US FDA
                      &amp; China certification, R&amp;D expansion.
                    </p>
                    <p>
                      <strong>2015–2018:</strong> Events across Germany, Russia,
                      Brazil, Malaysia, and more.
                    </p>
                    <p>
                      <strong>2019–2021:</strong> Global expos, FDA
                      registration, Premium Brand award in 2021.
                    </p>
                  </div>
                </div>
                <div className="history-column">
                  <h3>Trycam Healthcare Center, Jaipur</h3>
                  <div className="history-box">
                    <p>
                      <strong>2nd Dec 2023:</strong> Opened our premium TRYCAM
                      HEALTHCARE CENTER in Murlipura, Jaipur.
                    </p>
                    <p>
                      <strong>Dec 2024:</strong> Became India’s No. 1 TRYCAM
                      Center by selling the highest number of products and
                      winning a national award.
                    </p>
                    <p>
                      <strong>Owner:</strong> Mr. Indrajeet Agarwal (Area
                      Manager - TRYCAM Rajasthan)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;
