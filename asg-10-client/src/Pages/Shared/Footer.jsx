import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="border-t-1 b border-gray-100">
      
        <div className="w-11/12 mx-auto">
            <div className="footer grid grid-cols-1 md:grid-cols-4 p-10 text-base-content">
          <aside>
            <div className="flex items-center gap-1 ">
                <img className="w-10 " src="./logo.png" alt="" />
                <h2 className="text-xl font-bold text-shadow-xs">
                  PawMart
                  <span className="text-primary"> Kitchen</span>
                </h2>
              </div>
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
