import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been subscribed.`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h3>Join Our Newsletter</h3>
        <p>Get exclusive offers, early access & 10% off your first order.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;