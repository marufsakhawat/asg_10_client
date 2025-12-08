import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="mb-20 w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-5">Shop by Category</h2>
        <p className="text-gray-600">
          Find everything your pet needs in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/category-filtered-product/Pets"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          
          <div className="bg-teal-500 rounded-md card-body justify-center items-center">
            <h2 className="card-title text-white text-3xl font-bold">
              🐶 Pets (Adoption)
            </h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Pet Food"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          
          <div className="bg-cyan-500 rounded-md card-body justify-center items-center">
            <h2 className="card-title text-white text-3xl font-bold">🍖 Pet Food</h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Accessories"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          
          <div className="bg-sky-500 rounded-md card-body justify-center items-center">
            <h2 className="card-title text-white text-3xl font-bold">🧸 Accessories</h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Pet Care Products"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          
          <div className="bg-violet-500 rounded-md card-body justify-center items-center">
            <h2 className="card-title text-white text-3xl font-bold">💊 Pet Care</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
