import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import swal from "sweetalert";
import "./MyOrderCard.css";

const SinglepackageCard = ({ detail }) => {


  //delete a package
  const handleDeletePack = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    // const proceed = swal("Good job!", "You clicked the button!", "info");;
    if (proceed) {
      const url = ` https://trackers-zone.herokuapp.com/allorder/${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            swal("Cancelled", "You have cancelled your order", "warning");
          }
        });
    }
  };

  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.order?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>


          <Card.Title style={{ fontSize: "25px" }}>{`${detail?.order?.location?.city}, ${detail?.order?.location?.country}`}</Card.Title>
          <p className="text-cyan">we provide: {detail?.order?.services.join(", ")}</p>

          {
            detail?.status === 'approved' ? (<h6 className="text-light-green fw-bolder">
              {" "}
              <span className="text-cyan fw-semi-bolder">
                Order Status:{" "}
              </span>{" "}
              {detail?.status}
            </h6>) : (<h6 className="text-danger fw-bolder">
              {" "}
              <span className="text-cyan fw-semi-bolder">
                Order Status:{" "}
              </span>{" "}
              {detail?.status}
            </h6>)
          }

        </Card.Body>
        <Card.Footer >
          <div className="d-flex justify-content-between">
            <Card.Text className="text-light-blue fw-semi-bold">
              Stay: {detail?.order?.duration}
            </Card.Text>
            <h4 className="text-light-blue fw-bolder">Price: ${detail?.order?.price}</h4>
          </div>
          <div className="d-flex justify-content-center">
            <Button onClick={() => handleDeletePack(detail?._id)} className="btn-danger shadow-none text-white  py-2 px-3">Cancel Order</Button>
          </div>
        </Card.Footer>

      </Card>
    </Col>
  );
};

export default SinglepackageCard;
