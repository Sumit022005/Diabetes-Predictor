import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full text-white bg-gray-900 py-10">
      <div className="m-auto items-center flex gap-10 flex-col mt-60 mb-60">
        <h1 className="text-8xl font-extrabold">
          <span className=""> Welcome </span>to the Webpage
        </h1>
        <p>Check Your Diabetes click below button to check</p>
        <Link className="bg-black p-6 rounded-2xl gap-4 " to="/prediction">
          Go Prediction
        </Link>
      </div>
    </div>
  );
};

export default Home;
