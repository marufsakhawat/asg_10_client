import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider.jsx";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle.js";

const ListingDetails = () => {
  const { user } = useContext(AuthContext);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useTitle(listing ? `PawMart | ${listing.name}` : "PawMart | Details");
  useEffect(() => {
    setLoading(true);
    fetch(`https://asg-10-server.vercel.app/listing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch listing details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const address = form.address.value;
    const phone = form.phone.value;
    const quantity = form.quantity.value;
    const notes = form.notes.value;

    const orderDetails = {
      productId: listing._id,
      productName: listing.name,
      buyerName: user.displayName,
      email: user.email,
      quantity: parseInt(quantity),
      price: listing.price,
      address,
      phone,
      date: listing.date,
      additionalNotes: notes,
    };

    fetch("https://asg-10-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Order Placed Successfully!");
          document.getElementById("order_modal").close(); // Close the modal
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center my-20 min-h-[calc(100vh-349px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!listing) {
    return (
      <p className="text-center text-xl text-red-500">Listing not found.</p>
    );
  }

  const { name, category, email, description, price, location, image } =
    listing;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto my-10">
        <figure className="lg:w-1/2">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p className="text-lg font-semibold text-gray-600">{category}</p>
          <p className="mt-4">{description}</p>
          <p className="font-semibold mt-2">Location: {location}</p>
          <p className="font-semibold">Owner's Email: {email}</p>

          <div className="card-actions justify-between items-center mt-6">
            <div className="text-3xl font-bold">
              {price == 0 ? "Free Adoption" : `$${price}`}
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById("order_modal").showModal()}
            >
              🛒 Adopt / Order Now
            </button>
          </div>
        </div>
      </div>

      <dialog id="order_modal" className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="font-bold text-2xl mb-4">Confirm Your Order</h3>
          <form method="dialog" onSubmit={handleOrderSubmit}>
            <button
              type="button"
              onClick={() => document.getElementById("order_modal").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered bg-gray-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered bg-gray-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  value={listing.name}
                  readOnly
                  className="input input-bordered bg-gray-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  value={listing.price == 0 ? "Free" : `$${listing.price}`}
                  readOnly
                  className="input input-bordered bg-gray-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={listing.category === "Pets" ? 1 : 1}
                  readOnly={listing.category === "Pets"}
                  className={`input input-bordered ${
                    listing.category === "Pets" ? "bg-gray-200" : ""
                  }`}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pick Up Date</span>
                </label>
                <input
                  type="text"
                  value={listing.date}
                  readOnly
                  className="input input-bordered bg-gray-200"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">
                    Additional Notes (Optional)
                  </span>
                </label>
                <textarea
                  name="notes"
                  className="textarea textarea-bordered"
                  placeholder="Any special instructions..."
                ></textarea>
              </div>
            </div>

            <div className="modal-action mt-6">
              <button type="submit" className="btn btn-primary">
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ListingDetails;
