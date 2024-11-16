import React from "react";
import "../About.css";
 // Import the CSS file

function About() {
  return (
    <div className="about-container">
      {/* About Content */}
      <div className="about-content">
        <div className="welcome-message">
          <p>
            Welcome to <span className="highlight">E-Comm</span> – Your Ultimate
            Shopping Destination!
          </p>
        </div>

        {/* About Section */}
        <section className="about-section">
          <h1>About E-Comm</h1>
          <p>
            At E-Comm, we believe in providing a seamless and enjoyable online
            shopping experience. E-Comm is dedicated to curating a diverse range
            of high-quality products and bringing them to your fingertips.
            Whether you're a fashion enthusiast, a tech guru, or someone looking
            for unique finds, we've got you covered.
          </p>
        </section>

        {/* Technology Stack */}
        <section className="about-section">
          <h1>Technology Stack</h1>
          <p>
            E-Comm is not just an ordinary e-commerce platform; it's a blend of
            cutting-edge technology and user-centric design. Our website is
            crafted using <span className="highlight">ReactJS</span> for a smooth
            and responsive interface, <span className="highlight">CSS</span> for
            a visually appealing layout, and{" "}
            <span className="highlight">Redux Toolkit</span> to ensure efficient
            state management.
          </p>
        </section>

        {/* What Sets E-Comm Apart */}
        <section className="about-section">
          <h1>What Sets E-Comm Apart</h1>
          <ul>
            <li>
              <h2>User-Friendly Interface</h2>
              <p>
                We understand the importance of a user-friendly interface. That's
                why we've invested time and effort into designing an intuitive
                website that makes your shopping experience effortless.
              </p>
            </li>
            <li>
              <h2>Diverse Product Range</h2>
              <p>
                E-Comm boasts a diverse collection of products, spanning various
                categories to cater to your unique needs and preferences. From
                the latest fashion trends to cutting-edge gadgets, we have it
                all.
              </p>
            </li>
            <li>
              <h2>Seamless Shopping Journey</h2>
              <p>
                Explore our website with ease. From browsing through product
                categories to detailed product descriptions, adding items to your
                cart, and securely checking out – we've streamlined every step to
                ensure a hassle-free shopping experience.
              </p>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Debasismishra. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
