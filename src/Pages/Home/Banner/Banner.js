import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner mb-5">
      <Container>
        <Row>
          <div className="col-12">
            <div
              className="px-lg-5 d-flex align-items-center justify-content-between"
              style={{ minHeight: "100vh" }}
            >
              <div>
                <h1 className="text-white display-1 fw-bolder px-2">
                  Welcome to Trackers Zone.
                </h1>
                <p className="text-white px-2 ">
                  Tourism is a dynamic and competitive industry that requires the ability to adapt constantly to customers’ changing needs and desires, as the customer’s satisfaction, safety and enjoyment are particularly the focus of tourism businesses.
                </p>
                <Link to="/allpackages">
                  <Button className="btn-blue p-3 ms-3 ms-lg-0 text-white fw-bold">
                    See Our Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
