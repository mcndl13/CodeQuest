import React from "react";

export default function Promo() {
  return (
    <section className="bg-gradient-to-r promo text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[url('/promo-bg-shapes.png')] bg-cover bg-no-repeat bg-right rounded-2xl px-8 py-12">
        {/* Left Text */}
        <div className="max-w-2xl text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Join Us Now and Start <br />
            Learning with the Millions <br />
            of Other Users!
          </h2>
        </div>

        {/* Button */}
        <div className="text-center md:text-right">
          <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition">
            Join Us Now!
          </button>
        </div>
      </div>
    </section>
  );
}
