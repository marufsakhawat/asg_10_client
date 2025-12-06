import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="footer grid grid-cols-1 md:grid-cols-4 p-10 bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456l-2.432.811-1.201-3.602c-.166-.5-.648-.84-1.184-.84h-1.034c-.536 0-1.018.34-1.184.84l-1.201 3.602-2.432-.811c-1.02-.33-1.56-1.437-1.23-2.456l.841-2.515-2.432-.811c-1.02-.33-1.56-1.437-1.23-2.456l1.201-3.602c.166-.5.648-.84 1.184-.84h.008c.536 0 1.018.34 1.184.84l1.201 3.602 1.201-3.602c.166-.5.648-.84 1.184-.84h.008c.536 0 1.018.34 1.184.84l1.201 3.602 1.201-3.602c.166-.5.648-.84 1.184-.84h.008c.536 0 1.018.34 1.184.84l1.201 3.602 2.432.811c1.02.33 1.56 1.437 1.23 2.456l-.841 2.515zM13.473 14.992l-1.201-3.602c-.166-.5-.648-.84-1.184-.84h-.008c-.536 0-1.018.34-1.184.84l-1.201 3.602 1.201 3.602c.166.5.648.84 1.184.84h.008c.536 0 1.018.34 1.184.84l1.201-3.602z"></path>
          </svg>
          <p className="font-bold text-lg">PawMart</p>
          <p>
            PawMart connects local pet owners and buyers
            <br />
            for adoption and pet care products.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie" className="link link-hover">
            Cookie policy
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter (X)</a>
        </nav>
      </div>

      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2025 - All right reserved</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
