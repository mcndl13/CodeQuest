import React from "react";
import {
  LayoutDashboard,
  Book,
  Calendar,
  BarChart2,
  MessageSquare,
  Bell,
  Info,
  LogOut,
  Users,
} from "lucide-react";
import Logo from "../assets/logo3.png"; // Path to the logo image
import { Link } from "react-router-dom"; // For navigation between routes

// Sidebar component for navigation
export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-50 h-screen p-6 flex flex-col justify-between rounded-r-3xl shadow-xl">
      {/* Top Section */}
      <div>
        {/* Logo Section */}
        <Link to="/dashboard">
          <div className="flex items-center mb-10">
            <img src={Logo} alt="Logo" className="" />
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-2 text-gray-600">
          {/* Dashboard Link */}
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active
          />
          {/* My Learning Link */}
          <Link to="/mylearning">
            <SidebarItem icon={<Book size={20} />} label="My Learning" />
          </Link>
          {/* Challenges Link */}
          <Link to="/challenge">
            <SidebarItem icon={<Calendar size={20} />} label="Challenges" />
          </Link>
          {/* Leaderboard Link */}
          <SidebarItem icon={<Users size={20} />} label="Leaderboard" />
          {/* Analytics Link */}
          <SidebarItem icon={<BarChart2 size={20} />} label="Analytics" />
          {/* Messages Link */}
          <SidebarItem icon={<MessageSquare size={20} />} label="Messages" />

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Notifications Link */}
          <SidebarItem icon={<Bell size={20} />} label="Notifications" />
          {/* Support Link */}
          <SidebarItem icon={<Info size={20} />} label="Support" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Log Out Link */}
        <Link to="/login">
          <SidebarItem icon={<LogOut size={20} />} label="Log Out" />
        </Link>

        {/* User Profile Section */}
        <Link to="/userprofile">
          <div className="mt-6 flex items-center bg-blue-100 px-4 py-3 rounded-2xl hover:bg-blue-200 cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/1?v=4"
              alt="John Doe"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3 text-sm">
              <p className="text-gray-600">Welcome back 👋</p>
              <p className="font-semibold text-gray-800">John Doe</p>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}

// SidebarItem component for individual navigation items
function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode; // Icon for the navigation item
  label: string; // Label for the navigation item
  active?: boolean; // Indicates if the item is active
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-left transition ${
        active
          ? "bg-indigo-100 text-indigo-800 font-semibold"
          : "hover:bg-gray-100 hover:cursor-pointer"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
