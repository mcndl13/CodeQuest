import React from "react";
import Logo from "../../assets/logo.png";
import { FrontEndRoutes } from "../route"; // Routes for navigation
import { Link } from "react-router"; // Link component for navigation

// Hero component for the landing page
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r hero flex flex-col items-center justify-center text-center text-white px-6 relative">
      {/* Logo Section */}
      <div className="absolute top-6 left-6 text-white font-pixel text-2xl flex items-center gap-2">
        <img src={Logo} alt="Eventful Logo" className="w-40 mb-10" />
      </div>

      {/* Top-right Buttons */}
      <div className="absolute top-6 right-6 flex gap-4">
        {/* Sign Up Button */}
        <Link to={FrontEndRoutes.SignUp}>
          <button className="bg-indigo-900 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:brightness-110">
            Sign Up
          </button>
        </Link>

        {/* Log In Button */}
        <Link to={FrontEndRoutes.Login}>
          <button className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-gray-100">
            LogIn
          </button>
        </Link>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-pixel font-bold leading-tight text-white drop-shadow-lg">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
          CodeQuest
        </span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mt-2">
          Where <span className="text-pink-200">Coding</span> Meets
        </span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 mt-2">
          Adventure
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-white/90 max-w-xl mt-8">
        Level up your skills with game-inspired learning that makes programming
        fun, engaging, and addictive.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex gap-6">
        {/* Get Started Button */}
        <Link to={FrontEndRoutes.Login}>
          <button
            onClick={() => {
              navigator;
            }}
            className="bg-indigo-900 text-white px-6 py-3 rounded-xl font-pixel shadow-lg hover:bg-indigo-800"
          >
            Get Started
          </button>
        </Link>

        {/* Read More Button */}
        <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-pixel shadow-lg hover:bg-gray-100">
          Read More
        </button>
      </div>
    </section>
  );
}
