import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* This is the footer of the website */}
      <div className="d-flex flex-column " id="foot" style={{ height: `0vh` }}>
        <footer
          className="text-center fixed-bottom text-lg-start  bg-dark text-light"
          style={{ position: "sticky", top: "0px", zIndex: "-1"  }}
        >
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i> Water Rave
                  </h6>
                  <p style={{ textAlign: "justify" }}>
                    Established in September 2022, Water Rave has since
                    positioned itself as one of the leading water quality review
                    website, providing review of water quality of different
                    places in India. You can see reviews as well as add review
                    to the water quality of any city in India.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Places</h6>
                  <p>
                    <a href={`/place?place=Lucknow`}>Lucknow</a>
                  </p>
                  <p>
                    <a href={`/place?place=Kanpur`}>Kanpur</a>
                  </p>
                  <p>
                    <a href={`/place?place=Varanasi`}>Varanasi</a>
                  </p>
                  <p>
                    <a href={`/place?place=Delhi`}>Delhi</a>
                  </p>
                  <p>
                    <a href={`/place?place=Prayagraj`}>Prayagraj</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Lucknow, UP 50012,
                    India
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    waterrave@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> 111-222-333
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> 999 888 777
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:&nbsp;
            <Link className="text-reset fw-bold" to="/">
              Water Rave
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
