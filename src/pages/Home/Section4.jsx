import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";
function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img
                src={PromotionImage}
                alt="promotionImage"
                className="img-fluid"
              />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                perspiciatis officiis odit error non, ut rem expedita explicabo
                sint laborum vero, dolore, obcaecati reiciendis? Incidunt sint
                sunt dolore pariatur? Quam fugiat esse et.
              </p>
              <ul>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    nulla iste quae numquam modi.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate, temporibus facere hic tempora id deserunt
                    necessitatibus! Ullam, odio.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
