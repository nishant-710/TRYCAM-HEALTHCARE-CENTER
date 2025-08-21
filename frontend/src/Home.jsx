import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import "./assets/css/Home.css";

function Home() {
  return (
    <>
      <Header />

      <div>
        {/* Hero Section */}
        <header className="hero-section text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-start">
                <h1 className="display-5 fw-bold mb-3">
                  <div>WELCOME TO</div>
                  <div>TRYCAM HEALTHCARE</div>
                  <div>CENTER</div>
                </h1>
                <p className="lead mb-4">Dadi ka Phatak, Murlipura, Jaipur</p>
                <div className="designer-line">
                  Discover the ultimate in Korean therapy — gentle care that
                  promotes deep relaxation and balance
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="cube-wrapper">
                  <div className="cube">
                    <div className="face face1">
                      <img src="images/all/lstm.webp" />
                    </div>
                    <div className="face face2">
                      <img src="images/all/t2.jpg" />
                    </div>
                    <div className="face face3">
                      <img src="images/all/vitasea.webp" />
                    </div>
                    <div className="face face4">
                      <img src="images/all/special.webp" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Free Demo Section */}
        <section id="free" className="free-demo-section py-5">
          <div className="container text-center">
            <div className="icon-circle mb-4">
              <i className="fas fa-hand-holding-heart" />
            </div>
            <h2 className="demo-title mb-3">Free Demonstration</h2>
            <p className="demo-desc">
              Experience our all products at our experienced centers all around
              India.
            </p>
          </div>
        </section>
        {/* Our Therapies Section */}
        <section id="services" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center display-6 fw-bold text-dark mb-5">
              OUR THERAPIES
            </h2>
            <div className="row gy-4">
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("./images/all/Massage.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">Massage</h5>
                    <p>
                      Massage therapy manipulates muscles and tissues expertly
                      to provide therapeutic advantages and relaxation. Korean
                      medical therapy gadgets employ cutting-edge technology to
                      augment traditional therapies, facilitating pain
                      alleviation and enhancing blood flow. When combined, they
                      successfully treat a variety of health issues and support
                      holistic well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("images/all/Moxibustion.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">Moxibustion</h5>
                    <p>
                      A mainstay of traditional Korean medicine, moxibustion
                      therapy applies regulated heat or electromagnetic
                      stimulation to acupuncture points using specialised
                      medical equipment. By combining traditional medical
                      knowledge with newfound technology, these sophisticated
                      instruments improve therapy efficacy by providing accurate
                      and customised care for a range of medical issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("images/all/accupressure.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">Acupressure</h5>
                    <p>
                      In order to reduce pain and encourage healing, acupressure
                      therapy applies pressure to particular places on the body.
                      Korean medical therapy products, such as acupressure
                      rollers and mats, are made to precisely target these
                      areas, providing all-natural relief from a range of
                      illnesses and stress. Their all-encompassing approach to
                      fitness and health is helping them become more well-known.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("images/all/heating.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">Heating</h5>
                    <p>
                      The advantages of infrared and conventional techniques are
                      used in heating treatment, a mainstay of Korean medical
                      practices, to provide pain alleviation and relaxation.
                      With cutting-edge technology, Korean medical therapy
                      products like electronic heat pads and infrared mats
                      enhance this treatment by increasing circulation,
                      relieving muscle tension, and improving general wellness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("images/all/lowfreq.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">Low Frequency</h5>
                    <p>
                      Low Frequency Therapy uses low electrical currents to
                      reduce pain and accelerate healing; it is frequently found
                      in Korean medical therapy equipment. These gadgets, which
                      are intended for use at home, help with ailments including
                      stiff joints and tight muscles. They are well-liked for
                      treating a variety of health conditions because they are
                      efficient and easy to use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="therapy-box"
                  style={{
                    backgroundImage: 'url("images/all/fir.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="therapy-box-content">
                    <h5 className="text-orange fw-bold">FIR</h5>
                    <p>
                      Far infrared radiation treatment (also known as FIR) uses
                      soft, undetectable waves to deeply permeate the body and
                      encourage healing and relaxation. FIR is utilised by
                      Korean medical therapy devices to improve circulation,
                      ease tense muscles, and promote general health. They are
                      intended to be secure, non-invasive instruments that
                      improve vitality and health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Section */}
        <section id="testimonials" className="py-5 bg-white">
          <div className="container">
            <h2
              className="text-orange mb-5 text-center"
              style={{ fontSize: "2.5rem", fontWeight: 600 }}
            >
              What Our Customers Say
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="testimonial-box h-100 p-4 shadow-sm rounded bg-light">
                  <blockquote className="blockquote mb-3">
                    <p>
                      “I had a stubborn lump in my abdomen for years. After
                      TRYCAM's therapy, it vanished without any surgery.
                      Absolutely no side effects — just pure relief!”
                    </p>
                  </blockquote>
                  <footer className="blockquote-footer">Seema Yadav</footer>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box h-100 p-4 shadow-sm rounded bg-light">
                  <blockquote className="blockquote mb-3">
                    <p>
                      “Varicose veins had made walking painful. Thanks to
                      TRYCAM's natural treatments, I’m back on my feet and
                      pain-free!”
                    </p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    Rajesh Khandelwal
                  </footer>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box h-100 p-4 shadow-sm rounded bg-light">
                  <blockquote className="blockquote mb-3">
                    <p>
                      “My slip disc pain was ruining my life. After regular
                      sessions at TRYCAM, I feel stronger, more mobile, and
                      truly healed.
                      <br />
                      The best part — no medicines, no injections, and still
                      amazing results. TRYCAM therapies are completely natural
                      and side-effect free.”
                    </p>
                  </blockquote>
                  <footer className="blockquote-footer">Kavita Sharma</footer>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-box h-100 p-4 shadow-sm rounded bg-light">
                  <blockquote className="blockquote mb-3">
                    <p>
                      “No gym or diet worked for me, but TRYCAM's therapy
                      kickstarted my weight loss journey naturally. No pressure,
                      no crash diets!”
                    </p>
                  </blockquote>
                  <footer className="blockquote-footer">Prakash Meena</footer>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-orange mb-4">Contact Us</h2>
            <div className="row align-items-start">
              {/* Contact Info */}
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="contact-icons d-flex flex-column gap-3">
                  <a
                    href="tel:+919571470660"
                    className="text-primary d-flex align-items-center gap-2"
                    target="_blank"
                  >
                    <i className="fas fa-phone" />
                    <span>+91 9571470660</span>
                    <span>+91 9950522660</span>
                    <span>+91 1413185588</span>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=trycamjpr@gmail.com"
                    className="text-primary d-flex align-items-center gap-2"
                    target="_blank"
                  >
                    <i className="fas fa-envelope" />
                    <span>trycamjpr@gmail.com</span>
                  </a>
                  <a
                    href="https://instagram.com/trycam_murlipura/"
                    className="text-primary d-flex align-items-center gap-2"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                    <span>@trycam_murlipura</span>
                  </a>
                </div>
              </div>
              <div className="map-responsive mt-4">
                <a
                  href="https://maps.app.goo.gl/XstMNTQ9EHgzAs627"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9586483811254!2d75.7556445!3d26.968208800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35e2f66e5e7%3A0x8ac8958cb06a535d!2sTrycam%20Healthcare%20Center!5e0!3m2!1sen!2sin!4v1744768021423!5m2!1sen!2sin"
                    width="100%"
                    height={300}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
