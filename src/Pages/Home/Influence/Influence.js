import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfluenceImg from '../../../Assets/Images/influence.png'

const Influence = () => {
  return (
    <section className="py-5 mt-5">
      <Container>
        <Row>
          <div className="col-12 col-md-8">
            <img src={InfluenceImg} alt="about in home" className="img-fluid" />
          </div>
          <div
            className="col-12 col-md-4 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div>
              {/* <h6 className="text-light-green mb-3">About Us</h6> */}
              <h2 className="  mb-3 display-1">
                Lets Go Travel with Us
              </h2>
              <p className="text-secondary mb-3">
                Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.Tourism is travel for pleasure or business; also the theory and practice of touring.
              </p>
              <Link to="/allpackages">
                <Button className="btn-blue p-3 ms-3 ms-lg-0 text-white fw-bold">
                  See Our Packages
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Influence;