import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../component/Cards";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: 1,
    image: Image1,
    title: "Crispy Chicken",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 5,
    price: 99.15,
  },
  {
    id: 2,
    image: Image2,
    title: "Chicken Burger",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 4,
    price: 79.5,
  },
  {
    id: 3,
    image: Image3,
    title: "Veggie Pizza",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 5,
    price: 129.2,
  },
  {
    id: 4,
    image: Image4,
    title: "French Fries",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 4,
    price: 49.99,
  },
  {
    id: 5,
    image: Image5,
    title: "Cheese Sandwich",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 5,
    price: 59.99,
  },
  {
    id: 6,
    image: Image6,
    title: "Grilled Chicken",
    paragraph:
      "Porta semper ksa ew sawwed dsa dsaqw juasia jsdnds cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 4,
    price: 119.9,
  },
  {
    id: 7,
    image: Image7,
    title: "Chocolate Shake",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 5,
    price: 69.5,
  },
  {
    id: 8,
    image: Image8,
    title: "Pizza",
    paragraph:
      "Porta semper cursus feugiat primis ultrice a ligula risus auctor an enim team.",
    rating: 3.5,
    price: 48.5,
  },
];

// Rating Logical Data //

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <>
      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR CRAZY BURGERS</h2>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, omnis? Officiis, enim nihil facere consequuntur
                dolorem ipsa!
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section3;
