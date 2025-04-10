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
import Logo from "../assets/logo3.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-50 h-screen p-6 flex flex-col justify-between rounded-r-3xl shadow-xl">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <Link to="/dashboard">
          <div className="flex items-center mb-10">
            <img src={Logo} alt="Logo" className="" />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2 text-gray-600">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active
          />
          <SidebarItem icon={<Book size={20} />} label="Courses" />
          <Link to="/challenge">
            <SidebarItem icon={<Calendar size={20} />} label="Challenges" />
          </Link>
          <SidebarItem icon={<Users size={20} />} label="Leaderboard" />

          <div className="border-t border-gray-200 my-4"></div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <Link to="/login">
          <SidebarItem icon={<LogOut size={20} />} label="Log Out" />
        </Link>

        <div className="mt-6 flex items-center bg-blue-100 px-4 py-3 rounded-2xl">
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
      </div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
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
