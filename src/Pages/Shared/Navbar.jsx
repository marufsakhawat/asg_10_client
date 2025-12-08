import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Theme Handling
  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Logout
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  // Menu Before Login
  const navLinksBeforeLogin = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/pets-and-supplies">Pets & Supplies</NavLink></li>
    </>
  );

  // Menu After Login
  const navLinksAfterLogin = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/pets-and-supplies">Pets & Supplies</NavLink></li>
      <li><NavLink to="/add-listing">Add Listing</NavLink></li>
      <li><NavLink to="/my-listings">My Listings</NavLink></li>
      <li><NavLink to="/my-orders">My Orders</NavLink></li>
    </>
  );

  return (
    <div className="w-full shadow-sm bg-base-100">
      <div className="navbar w-11/12 mx-auto">

        {/* LEFT: Logo + Mobile Menu */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Mobile Menu Items */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-3 shadow bg-base-100 rounded-box w-56"
            >
              {user ? (
                <>
                  {navLinksAfterLogin}
                  <li><button onClick={handleLogOut}>Logout</button></li>
                </>
              ) : (
                <>
                  {navLinksBeforeLogin}
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            <div className="flex items-center gap-2">
              <img className="w-10" src="/logo.png" alt="PawMart Logo" />
              <h2 className="text-xl font-bold">
                Paw<span className="text-primary">Mart</span>
              </h2>
            </div>
          </Link>
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? navLinksAfterLogin : navLinksBeforeLogin}
          </ul>
        </div>

        {/* RIGHT: Theme + Auth */}
        <div className="navbar-end">

          {/* Theme Toggle */}
          <label className="swap swap-rotate mr-3 cursor-pointer">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
            />

            {/* Light Icon */}
            <svg
              className="swap-off w-6 h-6 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm10-7h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm12.95-6.95a1 1 0 0 1 1.41 0l1.42 1.41a1 1 0 1 1-1.41 1.42l-1.42-1.42a1 1 0 0 1 0-1.41zM5.64 17.66a1 1 0 1 1-1.41 1.41l-1.42-1.41a1 1 0 1 1 1.41-1.42l1.42 1.42zm0-11.32L4.22 4.93A1 1 0 0 1 5.64 3.5l1.42 1.41A1 1 0 0 1 5.64 6.34zm12.72 12.72a1 1 0 0 1-1.41 0l-1.42-1.42a1 1 0 1 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.42zM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8z"/>
            </svg>

            {/* Dark Icon */}
            <svg
              className="swap-on w-6 h-6 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.64 13a1 1 0 0 0-1.05-1a7 7 0 1 1-8.59-8.59a1 1 0 0 0-1-1.05a1 1 0 0 0-.79.36A9 9 0 1 0 22 13.79a1 1 0 0 0-.36-.79z"/>
            </svg>
          </label>

          {/* Desktop Auth */}
          {user ? (
            <div className="dropdown dropdown-end hidden lg:block">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={
                      user.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-20 p-3 shadow bg-base-100 rounded-box w-52"
              >
                <li className="p-2 font-semibold">Hello, {user.displayName}</li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex">
              <Link to="/login" className="btn btn-outline btn-primary mr-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-ghost">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
