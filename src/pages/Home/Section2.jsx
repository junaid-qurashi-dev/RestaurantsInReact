import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivey from "../../assets/about/delivery-bike.png";

// Mock Cards

const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `: porta semper cursus feugiat primis ulterica a ligua risus auctor an eeam team`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `: porta semper cursus feugiat primis ulterica a ligua risus auctor an eeam team`,
  },
  {
    image: Delivey,
    title: "Fastest Delivery",
    paragraph: `: porta semper cursus feugiat primis ulterica a ligua risus auctor an eeam team`,
  },
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat with your family</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                maiores esse laboriosam debitis ssitatibus voluptas modi! Atque
                optio iste.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
