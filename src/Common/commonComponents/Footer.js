import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <Container fluid>
          <Row>
            <div className="footer py-5  bg-dark d-flex flex-wrap justify-content-around">
              <div className="col-12 col-md-3 text-center">
                {/* Social Icons */}
                <div className="social-links mb-3">
                  <h3 className="text-white ms-2"> <u><i>Trackers Zone </i></u> </h3>
                  <a
                    rel="noopener noreferrer"
                    href="https://facebook.com"
                    target="_blank"
                    className="text-blue"
                  >
                    <i className="fab fa-facebook me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com"
                    target="_blank"
                    className="text-blue"
                  >
                    <i className="fab fa-twitter me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com"
                    target="_blank"
                    className="text-danger"
                  >
                    <i className="fab fa-youtube me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://vimeo.com/"
                    target="_blank"
                    className="text-warning"
                  >
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
              {/* Footer text */}
              <div className="col-12 col-md-3 text-center mb-3">
                <div className="terms">
                  <h5 className="text-white d-flex" >
                    <ul className="list-unstyled">
                      <li>Private Transport</li>
                      <li>Diverse Destinations</li>
                      <li>Great Hotels</li>
                      <li>Awesome Food</li>
                    </ul>
                  </h5>
                </div>
              </div>
              {/* Copyright */}
              <div className="col-12 col-md-3 text-center">
                <div className="copyright">
                  <h6 className="text-white mt-2">
                    Traveling fosters a medium to build human connections with one another by learning about culture, food, new sites, music, and the way people.
                  </h6>
                  <h6 className="text-white mt-2">
                    &copy;All rights reserved by Trackers Zone - 2022
                  </h6>
                  <h4 className="text-primary">
                    <Link to="/">Home</Link>
                  </h4>
                </div>
              </div>
              {/* Quick Links */}

            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
