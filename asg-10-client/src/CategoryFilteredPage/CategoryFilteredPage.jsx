import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTitle from "../hooks/useTitle.js";

const CategoryFilteredPage = () => {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle(`PawMart | Category: ${categoryName}`);

  useEffect(() => {
    setLoading(true);

    fetch("https://asg-10-server.vercel.app/all-listings")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (item) => item.category === categoryName
        );
        setListings(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch listings:", error);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return (
      <div className="flex justify-center my-20 min-h-[calc(100vh-349px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-16 w-11/12 mx-auto min-h-[calc(100vh-349px)]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">
          Showing Results for: {categoryName}
        </h2>
        <p className="text-gray-600">{listings.length} items found.</p>
      </div>

      {listings.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          No listings found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <figure className="h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="font-semibold">Category: {item.category}</p>
                <p>Location: {item.location}</p>
                <div className="card-actions justify-between items-center">
                  <div className="text-xl font-bold">
                    {item.price == 0 ? "Free Adoption" : `$${item.price}`}
                  </div>
                  <Link to={`/listing/${item._id}`} className="btn btn-primary">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilteredPage;
