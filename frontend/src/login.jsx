import React from "react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-[#f4f0ff] relative overflow-hidden"
    >
      {/* Logo Top Left */}
      <div className="absolute top-6 left-6">
        <img src="/images/logo.png" alt="CodeQuest Logo" className="w-[140px] h-auto" />
      </div>
      

      {/* Top Right Buttons */}
      <div className="absolute top-6 right-6 space-x-3">
        <button className="bg-[#264653] text-white font-bold px-6 py-2 rounded-full shadow-md hover:bg-[#1b2e3b] transition">Sign Up</button>
        <button className="bg-[#f0f0f0] text-[#2b2d42] font-bold px-6 py-2 rounded-full shadow-md border border-gray-200 hover:bg-[#e2e2e2] transition">LogIn</button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-[1100px] bg-transparent py-10 gap-6">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center text-center w-[500px]">
          <div className="w-[280px] h-[280px] mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/images/im1.jpeg"
              alt="Security"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#2b2d42] mb-2">Sign In to</h2>
          <h2 className="text-3xl font-bold text-[#2b2d42]">Start Learning!</h2>
          <p className="mt-4 text-sm text-[#555]">
            if you don’t an account you can <span className="text-purple-600 font-medium cursor-pointer">Register here!</span>
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white p-10 rounded-[30px] shadow-xl w-[430px]">
          <h2 className="text-3xl font-semibold text-center text-[#2b2d42]">Log In</h2>
          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 rounded-xl border border-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button className="w-full bg-[#2b2d42] text-white font-semibold py-3 rounded-xl shadow hover:bg-[#1f1f2e] transition">Log In</button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-between gap-4">
            <button className="w-full bg-white p-3 rounded-xl border shadow flex justify-center items-center hover:shadow-md">
              <FaGoogle size={20} />
            </button>
            <button className="w-full bg-white p-3 rounded-xl border shadow flex justify-center items-center hover:shadow-md">
              <FaApple size={20} />
            </button>
            <button className="w-full bg-white p-3 rounded-xl border shadow flex justify-center items-center hover:shadow-md">
              <FaFacebookF size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


