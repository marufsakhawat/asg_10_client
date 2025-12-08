import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle.js";

const AddListing = () => {
  useTitle("PawMart | Add Listing");
  const { user } = useContext(AuthContext);

  const handleAddListing = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = user?.email;

    const newListing = {
      name,
      category,
      price: parseFloat(price),
      location,
      description,
      image,
      date,
      email,
    };

    fetch("https://asg-10-server.vercel.app/listings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Listing Added Successfully!");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-base-200 p-10 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Add a New Listing</h2>
      <form onSubmit={handleAddListing} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product/Pet Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Listing Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered" required>
              <option value="">Select Category</option>
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
              placeholder="Enter 0 if Pet for Adoption"
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
              placeholder="e.g., Dhaka"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image (URL)</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://..."
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
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered bg-gray-200"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              placeholder="Short description..."
              required
            ></textarea>
          </div>
        </div>

        <div className="form-control mt-8">
          <button type="submit" className="btn btn-error text-white btn-block">
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
