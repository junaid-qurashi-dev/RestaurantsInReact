import React from "react";
import Layout from "../../component/layouts/Layout";
import "../../styles/MenuStyle.css";
import Burger11 from "../../assets/menu/burger-11.jpg";
import Burger12 from "../../assets/menu/burger-12.jpg";
import Burger13 from "../../assets/menu/burger-13.jpg";
import Burger14 from "../../assets/menu/burger-14.jpg";
import Burger15 from "../../assets/menu/burger-15.jpg";
import Burger16 from "../../assets/menu/burger-16.jpg";

function Menu() {
  const menuCategories = [
    {
      id: 1,
      title: "Signature Burgers",
      description: "Our chef's special creations with premium ingredients",
      image: Burger11,
      items: 12,
    },
    {
      id: 2,
      title: "Classic Favorites",
      description: "Timeless burgers that never go out of style",
      image: Burger12,
      items: 8,
    },
    {
      id: 3,
      title: "Gourmet Delights",
      description: "Elevated burgers with international flavors",
      image: Burger13,
      items: 6,
    },
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Royal Cheese Burger",
      price: "$12.99",
      rating: 5,
      description:
        "Double beef patty with melted cheese, lettuce, tomato, and our special sauce",
      image: Burger14,
      isPopular: true,
    },
    {
      id: 2,
      name: "Spicy BBQ Burger",
      price: "$14.99",
      rating: 5,
      description:
        "Beef patty with spicy BBQ sauce, crispy onions, and pepper jack cheese",
      image: Burger15,
      isPopular: true,
    },
    {
      id: 3,
      name: "Mushroom Swiss Burger",
      price: "$13.99",
      rating: 4,
      description:
        "Juicy beef patty topped with sautéed mushrooms and Swiss cheese",
      image: Burger16,
      isPopular: false,
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
      {/* Menu Hero Section */}
      <section className="menu-hero ">
        <div className="container">
          <h1>Our Menu</h1>
          <p>
            Discover culinary excellence in every bite. From classic favorites
            to innovative creations.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-categories">
        <div className="container">
          <h2>Menu Categories</h2>
          <div className="categories-grid">
            {menuCategories.map((category) => (
              <div key={category.id} className="category-card">
                <img src={category.image} alt={category.title} />
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <button className="category-btn">
                    View {category.items} Items
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="featured-menu">
        <div className="container">
          <h2>Featured Dishes</h2>
          <div className="menu-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="menu-content">
                  <div className="menu-title">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <div className="rating">
                    {renderStars(item.rating)}
                    {item.isPopular && (
                      <span className="ms-2 badge bg-warning text-dark">
                        Popular
                      </span>
                    )}
                  </div>
                  <p>{item.description}</p>
                  <div className="menu-actions">
                    <button className="add-to-cart">Add to Cart</button>
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

      {/* Menu CTA */}
      <section className="menu-cta">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>
            Experience the best burgers in town. Order now and taste the
            difference!
          </p>
          <button className="cta-btn">Order Online</button>
        </div>
      </section>
    </Layout>
  );
}

export default Menu;
