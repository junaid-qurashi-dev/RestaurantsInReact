import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
function Section6() {
  return (
    <>
      <section className="blog_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <div className="user-img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore quas voluptates repellat? Repudiandae illum corporis
                  eveniet porro, sequi animi voluptate perspiciatis fugit
                  maxime, ex dolore reiciendis laudantium iure laboriosam ut?
                </p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Item>
              <Carousel.Item>
                <div className="user-img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore quas voluptates repellat? Repudiandae illum corporis
                  eveniet porro, sequi animi voluptate perspiciatis fugit
                  maxime, ex dolore reiciendis laudantium iure laboriosam ut?
                </p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Item>
              <Carousel.Item>
                <div className="user-img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore quas voluptates repellat? Repudiandae illum corporis
                  eveniet porro, sequi animi voluptate perspiciatis fugit
                  maxime, ex dolore reiciendis laudantium iure laboriosam ut?
                </p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Item>
              <Carousel.Item>
                <div className="user-img">
                  <img src={User4} className="img-fluid" alt="User-4" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore quas voluptates repellat? Repudiandae illum corporis
                  eveniet porro, sequi animi voluptate perspiciatis fugit
                  maxime, ex dolore reiciendis laudantium iure laboriosam ut?
                </p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section6;
