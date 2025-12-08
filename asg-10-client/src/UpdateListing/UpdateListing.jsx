import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle.js";

const UpdateListing = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  useTitle(listing ? `PawMart | Update: ${listing.name}` : "PawMart | Update");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/listing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch listing:", error);
        setLoading(false);
      });
  }, [id]);

  const handleUpdateListing = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;

    const updatedListing = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
    };

    fetch(`http://localhost:5000/listing/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Listing Updated Successfully!");
          navigate("/my-listings");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-200 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Update Your Listing
      </h2>
      <form onSubmit={handleUpdateListing} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product/Pet Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={listing?.name}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              defaultValue={listing?.category}
              className="select select-bordered"
              required
            >
              <option value="Pets">Pets</option>
              <option value="Pet Food">Pet Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Pet Care Products">Pet Care Products</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price ($)</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={listing?.price}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={listing?.location}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Image (URL)</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={listing?.image}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date (Pick Up)</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={listing?.date}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={listing?.description}
              className="textarea textarea-bordered"
              placeholder="Short description..."
              required
            ></textarea>
          </div>
        </div>

        <div className="form-control mt-8">
          <button type="submit" className="btn btn-primary btn-block">
            Confirm Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
