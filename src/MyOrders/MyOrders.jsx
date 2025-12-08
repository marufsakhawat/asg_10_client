import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import useTitle from "../hooks/useTitle.js";

const MyOrders = () => {
  useTitle("PawMart | My Orders");
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/my-orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyOrders(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch orders:", error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDownloadReport = () => {
    const doc = new jsPDF();

    doc.text("My Orders Report", 20, 10);

    const tableColumn = [
      "Product Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];
    const tableRows = [];

    myOrders.forEach((order) => {
      const orderData = [
        order.productName,
        order.price == 0 ? "Free" : `$${order.price}`,
        order.quantity,
        order.address,
        order.date,
        order.phone,
      ];
      tableRows.push(orderData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("my_orders_report.pdf");
  };

  if (loading) {
    return (
      <div className="flex justify-center my-20 min-h-[calc(100vh-349px)]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-349px)] w-11/12 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Orders ({myOrders.length})</h2>
        <button
          onClick={handleDownloadReport}
          className="btn btn-secondary"
          disabled={myOrders.length === 0}
        >
          Download Report (PDF)
        </button>
      </div>

      {myOrders.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          You have not placed any orders yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product/Listing Name</th>
                <th>Buyer Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order.productName}</td>
                  <td>{order.buyerName}</td>
                  <td>
                    {order.price == 0 ? "Free Adoption" : `$${order.price}`}
                  </td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>{order.date}</td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
