import React, { useState } from "react";
import Layout from "../../component/layouts/Layout";
import "../../styles/BlogStyle.css";
import Author1 from "../../assets/blog/review-author-1.jpg";
import Author2 from "../../assets/blog/review-author-2.jpg";
import Author3 from "../../assets/blog/review-author-3.jpg";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Recipes", "News", "Tips", "Events"];

  const featuredPost = {
    id: 1,
    title: "The Art of Perfect Burger Seasoning",
    excerpt:
      "Discover the secret techniques our chefs use to create the most flavorful burgers in town. From selecting the right spices to mastering the grilling process.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    category: "Recipes",
    author: "Chef Maria",
    date: "March 15, 2026",
    readTime: "5 min read",
    authorImage: Author1,
  };

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Eating Trends for 2026",
      excerpt:
        "Explore the latest nutrition trends that are revolutionizing healthy eating while maintaining incredible flavor.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
      category: "Tips",
      author: "Nutrition Expert",
      date: "March 12, 2026",
      readTime: "4 min read",
      authorImage: Author2,
    },
    {
      id: 2,
      title: "Behind the Scenes: Our Kitchen",
      excerpt:
        "Take a peek into our state-of-the-art kitchen and meet the passionate team that makes every meal special.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      category: "News",
      author: "Operations Manager",
      date: "March 10, 2026",
      readTime: "6 min read",
      authorImage: Author3,
    },
    {
      id: 3,
      title: "Summer BBQ Party Planning Guide",
      excerpt:
        "Everything you need to know about hosting the perfect backyard BBQ party with our expert tips and recipes.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      category: "Events",
      author: "Event Coordinator",
      date: "March 8, 2026",
      readTime: "7 min read",
      authorImage: Author1,
    },
    {
      id: 4,
      title: "Vegan Burger Revolution",
      excerpt:
        "Our plant-based burgers are taking the culinary world by storm. Learn what makes them so irresistible.",
      image:
        "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
      category: "Recipes",
      author: "Chef Alex",
      date: "March 5, 2026",
      readTime: "5 min read",
      authorImage: Author2,
    },
    {
      id: 5,
      title: "Customer Spotlight: Food Bloggers",
      excerpt:
        "Meet the food bloggers who love our restaurant and see why they keep coming back for more.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      category: "News",
      author: "Marketing Team",
      date: "March 3, 2026",
      readTime: "4 min read",
      authorImage: Author3,
    },
    {
      id: 6,
      title: "Sustainable Dining Practices",
      excerpt:
        "How we're committed to eco-friendly practices in our restaurant, from sourcing to waste reduction.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
      category: "Tips",
      author: "Sustainability Officer",
      date: "March 1, 2026",
      readTime: "6 min read",
      authorImage: Author1,
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <Layout>
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Stay updated with the latest news, recipes, and culinary insights
            from our kitchen
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="blog-categories">
        <div className="container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="featured-post">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-content">
              <span className="featured-badge">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <div className="featured-meta">
                <span>
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  />
                  {featuredPost.author}
                </span>
                <span>
                  <i className="bi bi-calendar"></i> {featuredPost.date}
                </span>
                <span>
                  <i className="bi bi-clock"></i> {featuredPost.readTime}
                </span>
              </div>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <button className="read-more-btn">Read Full Article</button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span>
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                      />
                      {post.author}
                    </span>
                    <span>
                      <i className="bi bi-calendar"></i> {post.date}
                    </span>
                    <span>
                      <i className="bi bi-clock"></i> {post.readTime}
                    </span>
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog-read-more">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get the latest recipes, restaurant news, and exclusive offers
            delivered to your inbox
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
