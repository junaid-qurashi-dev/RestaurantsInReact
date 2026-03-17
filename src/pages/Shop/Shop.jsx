import React from "react";
import Layout from "../../component/layouts/Layout";
import "../../styles/ShopStyle.css";
import GooglePlay from "../../assets/shop/googleplay.png";
import AppStore from "../../assets/shop/appstore.png";

function Shop() {
  const categories = [
    {
      id: 1,
      icon: "bi-tshirt",
      title: "Apparel",
      description: "T-shirts, hoodies, and caps with our logo",
    },
    {
      id: 2,
      icon: "bi-cup-hot",
      title: "Accessories",
      description: "Mugs, water bottles, and kitchen items",
    },
    {
      id: 3,
      icon: "bi-gift",
      title: "Gift Cards",
      description: "Perfect gifts for food lovers",
    },
    {
      id: 4,
      icon: "bi-house-door",
      title: "Home & Kitchen",
      description: "Cookware and dining essentials",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Logo T-Shirt",
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 5,
      description: "Comfortable cotton t-shirt with our signature logo",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      badge: "Sale",
      isNew: false,
    },
    {
      id: 2,
      name: "Insulated Travel Mug",
      price: "$18.99",
      originalPrice: "$22.99",
      rating: 4,
      description: "Keep your drinks hot or cold for hours",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
      badge: "New",
      isNew: true,
    },
    {
      id: 3,
      name: "Recipe Book",
      price: "$15.99",
      originalPrice: "$19.99",
      rating: 5,
      description: "25 signature recipes from our kitchen",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      badge: "Bestseller",
      isNew: false,
    },
    {
      id: 4,
      name: "Logo Baseball Cap",
      price: "$16.99",
      originalPrice: "$19.99",
      rating: 4,
      description: "Adjustable cap with embroidered logo",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
      badge: "Popular",
      isNew: false,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < rating ? "bi-star-fill" : "bi-star"}`}></i>
    ));
  };

  return (
    <Layout>
      {/* Shop Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <h1>Shop</h1>
          <p>
            Take home a piece of our restaurant. Browse our exclusive
            merchandise and gourmet products.
          </p>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="shop-categories">
        <div className="container">
          <h2>Shop Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-icon">
                  <i className={`bi ${category.icon}`}></i>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-badge">{product.badge}</span>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <div className="product-price">
                    {product.price}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        fontSize: "0.9rem",
                        marginLeft: "10px",
                      }}>
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="product-rating">
                    {renderStars(product.rating)}
                  </div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-actions">
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <button className="wishlist-btn">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <h2>Download Our App</h2>
          <p>
            Get exclusive deals, easy ordering, and special offers with our
            mobile app
          </p>
          <div className="download-buttons">
            <a href="#" className="download-btn">
              <img src={GooglePlay} alt="Google Play" />
              <div className="btn-text">
                <h4>Get it on</h4>
                <p>Google Play</p>
              </div>
            </a>
            <a href="#" className="download-btn">
              <img src={AppStore} alt="App Store" />
              <div className="btn-text">
                <h4>Download on</h4>
                <p>App Store</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="shop-cta">
        <div className="container">
          <h2>Free Shipping on Orders Over $50</h2>
          <p>
            Shop now and enjoy complimentary shipping on all orders above $50.
            Limited time offer!
          </p>
          <button className="shop-cta-btn">Shop Now</button>
        </div>
      </section>
    </Layout>
  );
}

export default Shop;
