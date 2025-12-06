import React from "react";

const WhyAdopt = () => {
  return (
    <div className="hero py-30 bg-base-100 rounded-lg mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?_gl=1*qf6kci*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUwNjMxMjMkbzQkZzEkdDE3NjUwNjQ2NTYkajMzJGwwJGgw"
          className="max-w-md rounded-md shadow-xl"
        />
        <div className="lg:">
          <h2 className="text-4xl font-bold">Why Adopt from PawMart?</h2>
          <p className="py-6">
            When you adopt from PawMart, you're not just getting a new pet;
            you're saving a life. Millions of wonderful animals are waiting in
            shelters for a second chance. Adopting helps reduce pet
            overpopulation and gives a deserving animal a loving home. Adopt,
            don't shop!
          </p>
          <ol>Healthy Pets</ol>
          <ol>Knit and Clean</ol>
          <ol>Feedback Assurance</ol>

          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
    
    





  );
};

export default WhyAdopt;
