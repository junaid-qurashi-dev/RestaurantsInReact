import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <>
      <section className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>Guarantee Delivery</h4>
              <h2>30 Minutes Delivery! </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero
                sapiente necessitatibus quaerat iure!
              </p>
              <Link to="/" className="btn btn_red px-2 rounded-0">
                Call: 999-888-777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section7;
