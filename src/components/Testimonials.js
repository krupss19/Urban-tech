import React from "react";

function Testimonials() {
  const reviews = [
    { id: 1, name: "Rahul S.", text: "Amazing products and super fast delivery! ⭐⭐⭐⭐⭐⭐" },
    { id: 2, name: "Priya M.", text: "Great customer support. The laptop I bought is perfect for work." }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <p>“{review.text}”</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;