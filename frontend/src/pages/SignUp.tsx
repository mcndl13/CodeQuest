import React ,{ useState } from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { FrontEndRoutes } from "./route";
import SignUpIllustration from "../assets/signup.png"; // Replace with your image
import Logo from "../assets/logo3.png"; // Replace with your logo image
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignUp = async () => {
    console.log("Login button pressed", { email: form.email, password: form.password });

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      navigate("/dashboard");
      alert("Sign up successful!");
    } else {
      alert(data.message);
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
          className="px-4 py-2 bg-white text-indigo-900 font-semibold rounded-4xl shadow hover:bg-gray-200 transition"
        >
          Login
        </Link>
        <Link
          to={FrontEndRoutes.SignUp}
          className="px-4 py-2 bg-indigo-900 text-white font-semibold rounded-4xl shadow hover:bg-indigo-800 transition"
        >
          Sign Up
        </Link>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <img
            src={SignUpIllustration}
            alt="Sign Up Illustration"
            className="w-104 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-indigo-900">
            Create an Account to try Eventful.io!
          </h2>
          <p className="text-gray-600 mt-2">
            if you already have an account you can{" "}
            <Link
              to={FrontEndRoutes.Login}
              className="text-purple-700 font-semibold hover:underline"
            >
              Login here!
            </Link>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md form rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h3>

          {/* First Name */}
          <div className="mb-4">
            <input
             name="firstName" onChange={handleChange}   value={form.firstName}

              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
            name="lastName" onChange={handleChange}   value={form.lastName}

              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
            name="email" onChange={handleChange}  value ={form.email}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <input
            name="password" onChange={handleChange} value={form.password}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
            />
            <Eye className="absolute right-4 top-3.5 text-gray-500 w-5 h-5 cursor-pointer" />
          </div>
            {/* Submit */}
            <button onClick={handleSignUp} className="w-full bg-indigo-900 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-800 transition">
              Sign Up
            </button>
       
        </div>
      </div>
    </section>
  );
}
