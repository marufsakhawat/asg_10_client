import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle.js";

const MyListings = () => {
  useTitle("PawMart | My Listings");
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyListings = () => {
    setLoading(true);
    fetch(`http://localhost:5000/my-listings/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyListings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch listings:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user?.email) {
      fetchMyListings();
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/listing/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );

              fetchMyListings();
            }
          })
          .catch((error) => {
            console.error(error);
            toast.error(error.message);
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center my-20 min-h-[calc(100vh-349px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-349px)]">
      <h2 className="text-3xl font-bold text-center mb-6">
        My Listings ({myListings.length})
      </h2>

      {myListings.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          You have not added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image & Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myListings.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price == 0 ? "Free" : `$${item.price}`}</td>
                  <td>{item.location}</td>
                  <th className="flex flex-col gap-2">
                    <Link
                      to={`/update-listing/${item._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
