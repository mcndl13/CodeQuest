import React from "react";

/**
 * A sample login page component styled with Tailwind CSS.
 * Adjust as needed to handle state, form submission, validations, etc.
 */
function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-6 bg-[#F2ECFE]">
      {/* -------------- NAVBAR -------------- */}
      <nav className="flex flex-row justify-between items-center w-full max-w-6xl h-[57px] mb-10">
        {/* Left: Logo and 'CodeQuest' */}
        <div className="relative flex items-center gap-1">
          {/* Sword Icon Simulation */}
          {/* 
            If you want to replicate the sword vector exactly, 
            you could place absolutely positioned <div>s or inline SVG elements here.
          */}
          <div className="relative w-[44px] h-[58px]">
            {/* Absolute children for sword parts go here if needed */}
            {/* e.g., <div className="absolute w-2 h-2 bg-black" style={{ left: '10px', top: '10px' }}></div> */}
          </div>
          {/* Text "CodeQuest" */}
          <span className="text-[#D4C0FF] text-2xl font-normal font-['Press Start 2P'] leading-none">
            CodeQuest
          </span>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-row items-center gap-4">
          <button className="flex justify-center items-center px-4 py-2 w-[94px] h-12 rounded-full shadow-md bg-[#273266] opacity-85 hover:opacity-100">
            <span className="text-white text-base font-bold leading-6">Sign Up</span>
          </button>
          <button className="flex justify-center items-center px-4 py-2 w-[94px] h-12 rounded-full shadow-md bg-[#EDEDED] opacity-85 hover:opacity-100">
            <span className="text-[#273266] text-base font-bold leading-6">
              Login
            </span>
          </button>
        </div>
      </nav>

      {/* -------------- MAIN CONTENT -------------- */}
      <div className="flex flex-row gap-10 items-center w-full max-w-6xl">
        {/* Left side: "Sign In to Start Learning!" & illustration */}
        <div className="flex flex-col items-start gap-8 w-1/2 relative">
          {/* Background blurs (Ellipses) from Figma can go here if you want exact layering. 
              For instance:
              <div className="absolute w-[150px] h-[226px] left-[272px] top-[430px] bg-[#4C10D0] blur-[158.5px] z-0" />
              etc. 
          */}

          <div className="flex flex-col justify-center items-center text-center z-10">
            <h1 className="text-[#273266] font-normal text-[40px] leading-[60px] font-['Poppins']">
              Sign In to Start Learning!
            </h1>
            <p className="text-[#273266] text-[23px] leading-[34px] font-['Poppins'] mt-2">
              If you don&apos;t have an account you can{" "}
              <a className="text-blue-700 underline" href="#">
                Register here!
              </a>
            </p>
          </div>

          {/* The circular container for the illustration */}
          <div className="w-[410px] h-[410px] bg-white rounded-full flex items-center justify-center z-10">
            {/* Insert your illustration or SVG here */}
            <div className="w-[272px] h-[322px] relative">
              {/* 
                All those Figma paths and shapes can be placed as <img/> or inline <svg/>.
                If you need them absolutely placed, do so with <div className="absolute" style={{ top: 0, left: 0, ... }} />.
              */}
            </div>
          </div>
        </div>

        {/* Right side: The form container */}
        <div
          className="
            flex flex-col items-center justify-center
            p-8 gap-8
            w-[565px] h-[600px]
            rounded-[35px]
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,126,254,0.45)_0%,rgba(255,255,255,0.45)_100%)]
            backdrop-blur-[2px]
            shadow-md
          "
        >
          {/* Title: Log In */}
          <h2 className="text-[#273266] text-[48px] leading-[1] font-['Poppins'] font-normal mb-2">
            Log In
          </h2>

          {/* Form */}
          <form className="flex flex-col items-center gap-8 w-full max-w-[401px]">
            {/* Text boxes */}
            <div className="flex flex-col gap-6 w-full">
              {/* Email input box */}
              <div className="h-[50px] flex flex-row items-center justify-between px-4 rounded-[10px] bg-[#EAF0F7] shadow-md">
                <span className="text-[#4F555A] font-['Poppins'] text-[16px]">
                  Email
                </span>
                {/* Possibly an icon to clear, etc. */}
                <div className="w-6 h-6" />
              </div>

              {/* Password input box */}
              <div className="h-[50px] flex flex-row items-center justify-between px-4 rounded-[10px] bg-[#EAF0F7] shadow-md">
                <span className="text-[#667085] font-['Poppins'] text-[16px]">
                  ••••••••
                </span>
                {/* Possibly an icon to toggle visibility */}
                <div className="w-6 h-6" />
              </div>
            </div>

            {/* Sign In button */}
            <div className="relative w-full h-[77px]">
              <button
                type="submit"
                className="absolute w-full h-[60px] bg-[#273266] rounded-[10px] shadow-lg top-0 left-0
                           flex items-center justify-center 
                           hover:opacity-95
                           focus:outline-none
                          "
              >
                <span className="text-white font-black text-[19px] leading-[77px] tracking-wide">
                  Log In
                </span>
              </button>
            </div>

            {/* Divider line + "Or continue with" */}
            <div className="flex flex-row items-center gap-3 w-full">
              <hr className="flex-grow border-[#273266]" />
              <span className="text-[#273266] text-sm font-['Poppins']">
                Or continue with
              </span>
              <hr className="flex-grow border-[#273266]" />
            </div>

            {/* Social logins */}
            <div className="flex flex-row items-center gap-4">
              {/* Google */}
              <button className="relative w-[117px] h-[60px] bg-white shadow-md rounded-[10px] hover:opacity-90">
                {/* Place Google’s G logo or an <svg> inside */}
              </button>

              {/* Apple */}
              <button className="relative w-[117px] h-[60px] bg-white shadow-md rounded-[10px] hover:opacity-90">
                {/* Apple logo */}
              </button>

              {/* Facebook */}
              <button className="relative w-[117px] h-[60px] bg-white shadow-md rounded-[10px] hover:opacity-90">
                {/* Facebook F logo */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
