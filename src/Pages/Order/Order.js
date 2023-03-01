import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Assets/hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const { packid } = useParams();

  const [orderedPack, setOrderedPack] = useState({});

  useEffect(() => {
    fetch(`https://express-renderhost.onrender.com/order/${packid}`)
      .then((res) => res.json())
      .then((data) => setOrderedPack(data));
  }, [packid]);

  const history = useHistory();
  const redirect_uri = "/myorders";

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.email = user?.email;
    data.order = orderedPack;

    fetch("https://express-renderhost.onrender.com/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // alert("Order Confirmed !");
          swal('Congratulations!', 'You have ordered this package successfully.', 'success')
          history.push(redirect_uri);
        }
      });
  };

  return (
    <Container>
      <Row>
        <div className="col-12 col-lg-6">
          <div className="order-details my-5 p-3 shadow-lg">
            <h3 className="text-center text-decoration-underline">
              Order Details
            </h3>
            <img
              src={orderedPack.img}
              alt="destination"
              className="img-fluid"
            />
            <h5 className="text-cyan my-2">
              Your Selected Destination is{" "}
              {`${orderedPack?.location?.city}, ${orderedPack?.location?.country}`}{" "}
            </h5>
            <h6>
              Package Price Is ${orderedPack?.price} for single person ({orderedPack?.duration})
            </h6>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form-container py-5">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 text-cyan"
            >
              <h2 className=" text-center mb-2">We'll Contact You Soon !</h2>
              <p className="text-cyan text-center mb-5">You can cancel order from My orders section within next 7 days. We keep our clients happy.</p>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    value={user?.displayName}
                    className="text-secondary fw-semi-bold"
                    readOnly
                    {...register("name", { required: true })}
                    {...(errors.name && <span>Name is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={user?.email}
                    className="text-secondary fw-semi-bold"
                    readOnly
                    {...register("email", { required: true })}
                    {...(errors.email && <span>Email is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="+88017838383838"
                    className="text-secondary fw-semi-bold mb-5"
                    required
                    {...register("phone")}
                    {...(errors.phone && <span>Phone is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Sylhet"
                    className="text-secondary fw-semi-bold mb-5"
                    required
                    {...register("address")}
                    {...(errors.address && <span>Address is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                className="px-3 py-2 fw-bold btn-blue shadow-none"
              >
                <i className="fas fa-clipboard-check text-warning me-2"></i>
                Confirm Order
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Order;
