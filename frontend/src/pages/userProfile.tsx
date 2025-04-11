import React from "react";
import Sidebar from "../components/Sidebar";

export default function UserProfile() {
  return (
    <div className="flex min-h-screen bg-[#f4f0ff] font-sans">
      {/* Reused Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl h-32 mb-10" />

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://avatars.githubusercontent.com/u/1?v=4"
                alt="User"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
              <div>
                <h2 className="text-xl font-bold text-[#273266]">John Doe</h2>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded-full">
                  Level: 16
                </span>
              </div>
            </div>
            <button className="bg-[#f0f0f0] px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-[#e4e4e4]">
              Edit
            </button>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-[#273266] mb-2">About Me</h3>
            <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded-md">
              Plan, manage, and optimize events with ease—powerful tools for
              seamless organization and interactive experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-2 p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-[#273266] mb-2">Achievements</h3>
            <div className="flex gap-4">
              <img src="https://www.pngkey.com/png/detail/577-5776228_gold-medal-olympic-medal-bronze-medal-clip-art.png" alt="Medal" className="w-10" />
              <img src="https://www.pngkey.com/png/detail/577-5776228_gold-medal-olympic-medal-bronze-medal-clip-art.png" alt="Medal" className="w-10" />
              <img src="https://www.pngkey.com/png/detail/577-5776228_gold-medal-olympic-medal-bronze-medal-clip-art.png" alt="Medal" className="w-10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
