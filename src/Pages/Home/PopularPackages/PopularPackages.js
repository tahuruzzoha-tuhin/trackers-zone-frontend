import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SinglepackageCard from "../../AllPackages/SinglePackageCard/SinglepackageCard";

const PopularPackages = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch(" https://trackers-zone.herokuapp.com/allpackages")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);
  console.log(packDetails);
  if (packDetails.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <section
      id="popular-packages"
      className="py-5 my-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row>
          <h6 className="text-blue text-center">Popular Packages</h6>
          <h2 className="text-center" style={{ fontSize: "25px" }}>Our Popular Packages</h2>
          <p className="text-center">
            Outbound tourism is what you may be most familiar with. It involves the people going from British Columbia to other provinces, territories or countries. For example, going to Hawaii for a holiday is considered outbound tourism.The tourists coming to BC from other places are called inbound tourists. BC competes in a global market to attract tourists from the United States, Japan, Germany and many other countries. The industry also implements marketing campaigns aimed at attracting travellers from other parts of Canada, as well as from within British Columbia.
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {packDetails.slice(1, 7).map((detail) => (
            <SinglepackageCard
              key={detail._id}
              detail={detail}
            ></SinglepackageCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center pt-1 pb-5">
            <Link to="/allpackages">
              <Button className="btn-blue p-3 ms-3 ms-lg-0 text-white fw-bold">
                See All Packages
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PopularPackages;
