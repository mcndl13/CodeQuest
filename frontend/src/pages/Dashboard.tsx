import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Sidebar from "../components/Sidebar";

const courses = [
  {
    title: "Yapping 101",
    description: "Write an amazing description in this dedicated card section.",
    speaker: "Daniel Lam",
    date: "Now",
    tags: ["Hot Topic", "Automation", "Nonproductive"],
  },
  {
    title: "How to be the GOAT",
    description: "Write an amazing description in this dedicated card section.",
    speaker: "J. Carlos",
    date: "March 31st",
    tags: ["Hot Topic", "GOAT", "Productivity"],
  },
  {
    title: "Why the Job’s is NEVER Finished",
    description: "Write an amazing description in this dedicated card section.",
    speaker: "Keshan",
    date: "April 3rd",
    tags: ["Mamba Mentality", "Productivity", "Hot Topic"],
  },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-[#f5ebff] min-h-screen">
        {/* Top header */}
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-extrabold text-purple-600 font-pixel bg-white rounded-full px-4 py-2 shadow">
            Dashboard
          </h1>
          <div className="bg-indigo-900 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
            Tuesday March 26th 2025
          </div>
        </div>

        {/* Hero section */}
        <section className="bg-white mt-6 p-6 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-purple-700 mb-2">
              Be a Great Event Organizer
            </h2>
            <p className="text-gray-600">
              Plan, manage, and optimize events with ease—powerful tools for
              seamless organization and interactive experiences.
            </p>
          </div>
          <img
            src="/event-illustration.png"
            alt="Event Management"
            className="w-56 mt-6 md:mt-0"
          />
        </section>

        {/* Courses Section */}
        <section className="mt-10">
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
                className="bg-white rounded-2xl shadow-md p-5 border-t-4 border-purple-100"
              >
                <div className="flex items-center gap-2 text-purple-500 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{course.title}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {course.description}
                </p>
                <div className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">👤 Speaker:</span>{" "}
                  {course.speaker}
                </div>
                <div className="text-sm text-gray-700 mb-3">
                  <span className="font-medium">📅 Date:</span> {course.date}
                </div>
                <div className="flex flex-wrap gap-2">
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
