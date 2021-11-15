import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackageCard.css";

const SinglepackageCard = ({ detail }) => {
  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>

          <Card.Title style={{ fontSize: "25px" }}>{`${detail?.location?.city}, ${detail?.location?.country}`}</Card.Title>
          <p className="text-cyan">we provide: {detail.services.join(", ")}</p>
        </Card.Body>

        <Card.Footer >

          <div className="d-flex justify-content-between">
            <Card.Text className="text-dark fw-semi-bold">
              Stay: {detail.duration}
            </Card.Text>
            <h4 className="text-light-blue fw-bolder">Price: ${detail.price}</h4>
          </div>

          <div className="d-flex justify-content-center">
            <Link to={`order/${detail?._id}`}>
              <Button className="btn-light-blue  py-2 px-3">Get This Package</Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
