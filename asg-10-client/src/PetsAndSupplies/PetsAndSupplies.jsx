import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle.js";

const PetsAndSupplies = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useTitle("PawMart | Pets & Supplies");

  useEffect(() => {
    setLoading(true);
    fetch("https://asg-10-server.vercel.app/all-listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch listings:", error);
        setLoading(false);
      });
  }, []);

  const filteredListings = listings
    .filter((item) => {
      if (category === "") {
        return true;
      }
      return item.category === category;
    })
    .filter((item) => {
      if (searchTerm === "") {
        return true;
      }
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  if (loading) {
    return (
      <div className="flex justify-center my-20 min-h-[calc(100vh-349px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-16 min-h-[calc(100vh-349px)] w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">All Pets & Supplies</h2>
        <p className="text-gray-600">Browse everything available on PawMart.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <select
          className="select select-bordered w-full max-w-xs"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Filter by Category (All)</option>
          <option value="Pets">Pets</option>
          <option value="Pet Food">Pet Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Pet Care Products">Pet Care Products</option>
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredListings.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          No listings found matching your criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((item) => (
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

export default PetsAndSupplies;
