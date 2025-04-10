import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { FrontEndRoutes } from "./route";
import LoginIllustration from "../assets/login.png"; // Replace with your image path
import Logo from "../assets/logo3.png"; // Replace with your image path
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login button pressed", { email, password });

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      navigate("/dashboard");
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 px-4 relative">
      {/* Navigation */}
      <div className="absolute top-6 left-6">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-40" />
        </Link>
      </div>
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <Link
          to={FrontEndRoutes.Login}
          className="px-4 py-2 bg-white text-indigo-900 hover:cursor-pointer font-semibold rounded-4xl shadow hover:bg-gray-200 transition"
        >
          Login
        </Link>
        <Link
          to={FrontEndRoutes.SignUp}
          className="px-4 py-2 bg-indigo-900 text-white hover:cursor-pointer font-semibold rounded-4xl shadow hover:bg-indigo-800 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <img
            src={LoginIllustration} // Replace with your image path
            alt="Login Illustration"
            className="w-104 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-indigo-900">
            Sign In to Start Learning!
          </h2>
          <p className="text-gray-600 mt-2">
            if you don’t have an account you can{" "}
            <a
              href="#"
              className="text-purple-700 font-semibold hover:underline"
            >
              Register here!
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md form rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Log In
          </h3>

          {/* Email */}
          <div className="mb-4">
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
            <EyeOff className="absolute right-4 top-3.5 text-gray-500 w-5 h-5 cursor-pointer" />
          </div>

          {/* Submit */}
          <button
        onClick={handleLogin}
        className="w-full bg-indigo-900 text-white py-3 hover:cursor-pointer rounded-xl font-semibold shadow-md hover:bg-indigo-800 transition"
      >
        Log In
      </button>

        </div>
      </div>
    </section>
  );
}
