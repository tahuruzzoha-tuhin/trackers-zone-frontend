import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import contactImg from "../../../Assets/Images/latestblog3.jpg"

const Contact = () => {
  return (
    <>
      <section className="form-container py-5 my-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <h2 className="text-center display-3   mt-5 pt-5">
                Stay With Us!
              </h2>
              <p className="text-cyan px-md-5 text-center mb-5">
                Although many of us have been “tourists” at some point in our lives, defining what tourism actually is can be difficult. Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.
              </p>
            </div>
          </Row>
          <Row>
            <div className="col-12 col-md-6">
              <img
                src={contactImg}
                alt="contactImg"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-12 col-md-6">
              <Form>
                <Row>
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="text-muted fw-semi-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="text-muted fw-semi-bold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                </Row>
                <Row>
                  <div className="col-12">
                    <label htmlFor="email" className="text-muted fw-semi-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control border-0 shadow-none py-2 my-2"
                      style={{ background: "#F8F8F8" }}
                    />
                  </div>
                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="text-muted fw-semi-bold"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control border-0 shadow-none py-2 mt-2 mb-5"
                      rows="3"
                      style={{ background: "#F8F8F8" }}
                    ></textarea>
                  </div>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    type="submit"
                    className="btn-blue p-3 fw-bold shadow-none"
                  >
                    Send Us Your Desire!
                  </Button>
                </Row>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
