import React from "react";
import Banner from "./Banner.jsx";
import CategorySection from "./CategorySection.jsx";
import RecentListings from "./RecentListings.jsx";
import WhyAdopt from "./WhyAdopt.jsx";
import PetHeroes from "./PetHeroes.jsx";
import useTitle from "../../hooks/useTitle.js";

const Home = () => {
  useTitle("PawMart | Home");
  return (
    <div>
      <Banner />
      <CategorySection />
      <RecentListings />
      <WhyAdopt />
      <PetHeroes />
    </div>
  );
};

export default Home;
