import React from "react";
import { PhoneCall, Facebook } from "lucide-react";
import Logo from "../../assets/logo2.png";

// Footer component for the website
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r footer text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Section */}
        <div className="md:col-span-1 flex flex-col justify-between">
          {/* Contact Information */}
          <div>
            <p className="mb-4">
              Sed ut perspiciatis undmnis is iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <div className="flex items-center gap-2 text-white/90 mb-6">
              <PhoneCall size={20} /> {/* Phone Icon */}
              <span>+012 (345) 678 99</span> {/* Contact Number */}
            </div>
          </div>
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-12" />
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Saas Development</li>
            <li>Our Products</li>
            <li>Our Products</li>
            <li>User Strategy</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>About Landio</li>
            <li>Contact & Support</li>
            <li>Success History</li>
            <li>Setting & Privacy</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Premium Support</li>
            <li>Our Services</li>
            <li>Know Our Team</li>
            <li>Download App</li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col justify-between">
          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Follow Us On</h3>
            <div className="flex items-center gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500"
                >
                  <Facebook size={16} /> {/* Facebook Icon */}
                </div>
              ))}
            </div>
          </div>
          {/* Copyright Information */}
          <p className="text-sm text-white/70 mt-6">© 2025 MegaSoft.</p>
        </div>
      </div>
    </footer>
  );
}
