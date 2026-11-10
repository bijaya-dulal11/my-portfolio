
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Bijaya Dulal</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div>
          <h1>Hello, I'm <span>Bijaya Dulal</span></h1>
          <h3>Welcome to My Personal Website</h3>
          <p>
            I am passionate about technology,
            creativity and learning new things.
            Welcome to my personal landing page.
          </p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          My name is Bijaya Dulal.
          This is my personal website where
          you can learn more about me.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Email: bijaya@example.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Bijaya Dulal. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
