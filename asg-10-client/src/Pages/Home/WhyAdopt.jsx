import React from "react";

const WhyAdopt = () => {
  return (
    <div className="hero py-5 bg-base-100 rounded-lg mb-16">
      <div className="hero-content flex-col flex lg:flex-row">
        <img
          src="https://images.pexels.com/photos/15511198/pexels-photo-15511198.jpeg?_gl=1*17qo9eq*_ga*MTkxNjc2NjI4My4xNzY1MDQ5Mzc5*_ga_8JE65Q40S6*czE3NjUxMzk2ODQkbzckZzEkdDE3NjUxNDA5NTckajU5JGwwJGgw"
          className="w-[35%] max-w-3/4 rounded-md shadow-xl mr-0 lg:mr-5 shadow-xl"
        />
        <div className="">
          <h2 className="text-4xl font-bold">Why Adopt from PawMart?</h2>
          <p className="py-3">
            When you adopt from PawMart, you're not just getting a new pet;
            you're saving a life. Millions of wonderful animals are waiting in
            shelters for a second chance. Adopting helps reduce pet
            overpopulation and gives a deserving animal a loving home. Adopt,
            don't shop!
          </p>
          <p className="py-3">
            Adopting helps reduce pet
            overpopulation and gives a deserving animal a loving home. Adopt,
            don't shop!
          </p>
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
            View us on facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyAdopt;
