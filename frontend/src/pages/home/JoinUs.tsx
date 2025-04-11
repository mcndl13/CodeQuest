import React from "react";
import CodeBlock from "../../assets/code-block.png"; 

// JoinUs component for the "Join Us" section
export default function JoinUs() {
  return (
    <section className="bg-gradient-to-r py-20 px-6 text-white">
      <div className="flex px-32 mx-auto flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Code block image */}
        <div className="relative w-full lg:w-1/2">
          {/* Background shadow for the image */}
          <div className="absolute top-6 left-6 w-full h-full rounded-2xl opacity-40 transform translate-x-3 translate-y-3"></div>
          {/* Code block image */}
          <img
            src={CodeBlock}
            alt="Code Example"
            className="relative z-10 w-full max-w-xl rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Section: Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <p className="text-2xl sm:text-5xl font-extrabold leading-tight mb-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
          {/* Call-to-action button */}
          <button className="mt-6 bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow hover:bg-purple-100 transition">
            Join Us Now!
          </button>
        </div>
      </div>
    </section>
  );
}
