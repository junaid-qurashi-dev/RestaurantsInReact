import React from "react";
import Layout from "../../component/layouts/Layout";
import "../../styles/AboutStyle.css";
import Res from "../../assets/new/res3.jpg";

import SaladImg from "../../assets/about/salad.png";
import Pizza from "../../assets/about/pizza.png";
import DeliveryImg from "../../assets/about/delivery-bike.png";

function About() {
  return (
    <Layout>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Discover the story behind our passion for exceptional food and
            unforgettable dining experiences
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="container">
          {/* Our Story */}
          <div className="about-story">
            <div className="about-story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, our restaurant began as a small family-owned
                eatery with a simple mission: to serve delicious, high-quality
                food made with fresh ingredients and traditional recipes. What
                started as a passion project has grown into a beloved dining
                destination that brings people together over great meals.
              </p>
              <p>
                We believe that food is more than just sustenance – it's about
                creating memories, celebrating culture, and bringing joy to
                every meal. Our chefs combine time-honored techniques with
                innovative flavors to create dishes that delight both
                traditionalists and food adventurers alike.
              </p>
            </div>
            <div>
              <img src={Res} alt="Delicious Pizza" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="container">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-title">Years of Service</div>
                <p>Serving our community with dedication and passion</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-title">Happy Customers</div>
                <p>Satisfied diners who keep coming back for more</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-title">Menu Items</div>
                <p>Diverse selection of culinary delights</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-title">Expert Chefs</div>
                <p>Professional culinary team crafting perfection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={SaladImg} alt="Fresh Ingredients" />
              </div>
              <h3>Fresh Ingredients</h3>
              <p>
                We source the finest, freshest ingredients daily to ensure every
                dish bursts with flavor and nutrition.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={Pizza} alt="Fresh Ingredients" />
              </div>
              <h3>Fresh Ingredients</h3>
              <p>
                We source the finest, freshest ingredients daily to ensure every
                dish bursts with flavor and nutrition.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src={DeliveryImg} alt="Fast Delivery" />
              </div>
              <h3>Fast Delivery</h3>
              <p>
                Quick and reliable delivery service to bring your favorite meals
                right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To create an exceptional dining experience that celebrates the joy
            of good food, warm hospitality, and meaningful connections. We
            strive to be more than just a restaurant – we aim to be a
            cornerstone of our community, a place where families gather, friends
            celebrate, and food lovers discover new favorites.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default About;
