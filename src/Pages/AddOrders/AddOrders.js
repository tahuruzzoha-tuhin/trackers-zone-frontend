import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const AddOrders = () => {

  useEffect(() => {
    document.title = 'Add Package || Trackers Zone'
  }, []);

  const history = useHistory();
  const redirect_uri = "/";
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const location = {
      city: data.city,
      country: data.country,
    };
    data.location = location;
    delete data.city;
    delete data.country;
    data.services = [
      "Resort",
      "Food Village",
      "Tour Guide",
      "Evening Party",
      "Secured place",
    ];
    data.duration = "1 Week";
    data.price = 7000;

    fetch('https://express-renderhost.onrender.com/addpackage', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          swal('Congratulations!', 'You have added a package', 'success');
          history.push(redirect_uri)
        }
      })
  };

  return (
    <Container style={{ minHeight: '100vh' }}>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="form-container py-5">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 text-cyan"
            >
              <h2 className="mb-2 text-center  ">
                Add A New Tour Package !
              </h2>
              <p className="text-cyan text-center mb-5">Currently we are allowing our users just to add city name, country name and a photo url. After Adding a package by random user, We'll add another values by default. </p>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Destination Place</Form.Label>
                  <Form.Control
                    placeholder="Jaflong"
                    required
                    className="text-secondary fw-semi-bold"
                    {...register("city", { required: true })}
                    {...(errors.city && <span>City is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label> Destination City</Form.Label>
                  <Form.Control
                    required
                    placeholder="Sylhet"
                    className="text-secondary fw-semi-bold"
                    {...register("country", { required: true })}
                    {...(errors.country && <span>Country is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridImage">
                  <Form.Label>
                    Photo URL(sample: https://i.ibb.co/BNjPXW0/jaflong.jpg)
                  </Form.Label>
                  <Form.Control
                    className="text-secondary fw-semi-bold mb-5"
                    required
                    {...register("img")}
                    {...(errors.img && <span>PhotoURL is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                className="px-3 py-2 fw-bold btn-blue shadow-none"
              >
                <i className="fas fa-clipboard-check text-warning me-2"></i>
                Add Package
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AddOrders;
