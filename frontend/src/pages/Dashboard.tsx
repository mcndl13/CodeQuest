import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "JavaScript Dungeon: The Callback Quest",
    description: "Master callbacks, closures, and higher-order functions in this thrilling coding dungeon.",
    speaker: "Merlin the Dev Wizard",
    date: "Today",
    tags: ["🧠 Logic", "⚔️ Challenge", "JavaScript"],
  },
  {
    title: "Python Alchemy: Automate All the Things",
    description: "Turn boring tasks into Python spells with automation, scripting, and data wizardry.",
    speaker: "Alina the Automator",
    date: "March 31st",
    tags: ["🐍 Python", "🤖 Automation", "🔥 Hot Topic"],
  },
  {
    title: "React Arena: Build Your First Web App",
    description: "Enter the React Arena and craft dynamic UIs using hooks, state, and components.",
    speaker: "Captain Component",
    date: "April 3rd",
    tags: ["⚛️ React", "🎯 Hands-on", "Frontend"],
  },
];

export default function Dashboard() {
  return (
    <div className="flex bg-[#f5ebff] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Top header */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-4xl font-extrabold text-purple-600 font-pixel bg-white rounded-full px-4 py-2 shadow">
            Dashboard
          </h1>
          <div className="bg-indigo-900 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
            Tuesday March 26th 2025
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 to-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-2">
              Welcome back, Challenger!
            </h2>
            <p className="text-gray-700">
              Complete today's challenge to gain XP, unlock badges, and climb the leaderboard.
            </p>
          </div>
          <img
            src="../assets/xp.jpg"
            alt="Event"
            className="w-48 mt-4 md:mt-0"
          />
        </section>

        {/* XP Progress */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-purple-700">Level 1</span>
            <span className="text-sm text-purple-500">XP: 0 / 1500</span>
          </div>
          <div className="w-full bg-purple-200 rounded-full h-4 overflow-hidden shadow-inner">
            <div className="bg-purple-600 h-full rounded-full transition-all duration-700" style={{ width: "10%" }} />
          </div>
        </section>

        {/* Daily Challenge */}
        <section className="mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-purple-700 mb-1">🎯 Daily Challenge</h3>
              <p className="text-sm text-gray-600">Write a <code>greet()</code> function that returns "Hello World!"</p>
            </div>
            <Link to="/challenge">
            <button className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-full font-semibold text-black shadow">
              Go to Challenge
            </button>
            </Link>
          </div>
        </section>

        {/* Courses */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-purple-700">Your Courses</h3>
            <button className="flex items-center text-purple-600 font-semibold hover:underline">
              Show All <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 border-t-4 border-purple-100 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{course.title}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{course.description}</p>

                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">👤 {course.speaker}</span>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">📅 {course.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {course.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
