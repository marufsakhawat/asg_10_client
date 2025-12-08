import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecentListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://asg-10-server.vercel.app/listings-recent")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch recent listings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-16 w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Recent Listings</h2>
        <p className="text-gray-600">
          Freshly added pets and supplies just for you.
        </p>
      </div>

      {listings.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          No listings found yet. Please add some!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {listings.map((item) => (
            <motion.div
              key={item._id}
              className="card bg-base-100 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentListings;
