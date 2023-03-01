import React from "react";
import { Container, Carousel } from "react-bootstrap";
import slide1 from '../../../Assets/Images/guide1.png';
import slide2 from '../../../Assets/Images/guide2.jpg';
import slide3 from '../../../Assets/Images/guide3.png';
import slide4 from '../../../Assets/Images/guide4.png';

const Destination = () => {
  return (
    <Container fluid className="container">

      <div>
        <h3 className="text-blue text-center">Our Tour Guides</h3>
        <p className="text-center">There are different ways to measure the size of the tourism industry, as tourism does not conform to the usual ways that industries are defined, such as manufacturing, forestry and other industries. Tourism constitutes a wide variety of sectors that provide diverse products and services to visitors. However, these businesses also provide products and services to local residents.</p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Lynda Florina</h3>
            <p>She is a very nice girl. She is brave, honest and responsible for our tourist. She is one of the best tour guide of our contact. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Valentina Gagoi</h3>
            <p>She is a very nice girl. She is brave, honest and responsible for our tourist. She is one of the best tour guide of our contact </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 >John Michael</h3>
            <p >He is a very nice guy. He is brave, honest and responsible for our tourist. He is one of the best tour guide of our contact </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Terena Chaknidar</h3>
            <p>She is a very nice girl. She is brave, honest and responsible for our tourist. She is one of the best tour guide of our contact </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Destination;
