import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="bg-gray-950 h-20 items-center p-4 text-white flex gap-10">
        <img
          className="h-full "
          src="./Black and White Circular Art & Design Logo.png"
          alt=""
        />
        <div className="flex justify-between gap-10 ms-auto me-20">
          <Link to="/">Home</Link>
          <Link to="/prediction">Predict</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
