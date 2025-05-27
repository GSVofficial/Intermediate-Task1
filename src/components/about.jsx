import React from "react";
import './about.css';

function About() {
  return (
    <div className="about-container">
      <h1>About E-Kart</h1>
      
      <section className="mission">
        <p>
          E-Kart is committed to bringing you the latest and greatest in tech products, making your shopping experience fast, reliable, and affordable.
        </p>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of electronics & gadgets</li>
          <li>Secure and easy checkout process</li>
          <li>Fast delivery across India</li>
          <li>Excellent customer support</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>Our passionate team of tech enthusiasts is here to serve you better every day.</p>
        {/* Add photos or cards if you want */}
      </section>

      
    </div>
  );
}

export default About;
