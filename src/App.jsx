import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        {/* Header Section */}
        <header className="header-box">
          <div className="brand-info">
            <h1>BASIC SKINCARE</h1>
            <p className="tagline">you order, WE DEliver</p>
          </div>
          <nav className="nav-links">
            <span>HOME</span>
            <span>Products</span>
            <span>cart</span>
          </nav>
        </header>

        {/* Content Section */}
        <main className="content-grid">
          <div className="text-column">
            <p className="description">
              Basic skincare is a Nepali brand rooted in self-care and expression through skincare. 
              We emphasize the necessity of skincare and nurture self-expression and confidence 
              through our skincare products.
            </p>
            
            <p className="description">
              Basic skincare is a Nepali brand rooted in self-care skincare. We emphasize the necessity 
              of skincare and confidence through our skincare products.
            </p>

            <div className="social-links">
              <p>connect with us:</p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>

            <hr className="divider" />

            {/* Login Section */}
            <div className="login-section">
              <h3> Login</h3>
              <form className="login-form">
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="email" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" />
                </div>
                <button type="submit" className="login-btn">Login</button>
              </form>
            </div>
          </div>

          <div className="image-column">
            
            <img 
              src="/img2.jpg" 
              alt="Skincare Products" 
              className="product-img" 
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;