import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            {" "}
            <img
              className="size-1/4 "
              src="./public/Black and White Circular Art & Design Logo.png"
              alt=""
            />
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Diabetes-Prediction, Predicts Diabetes with Convenience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/prediction">Prediction</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Diabetes-Prediction. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
