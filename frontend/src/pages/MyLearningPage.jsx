import React from "react";
import Sidebar from "../components/Sidebar";

// Calendar Icon 
const CalendarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42C30.6274 42 36 36.6274 36 30C36 23.3726 30.6274 18 24 18C17.3726 18 12 23.3726 12 30C12 36.6274 17.3726 42 24 42Z" fill="#E9EFFD"/>
    <path d="M15.08 38H8C7.46957 38 6.96086 37.7893 6.58579 37.4142C6.21071 37.0391 6 36.5304 6 36V10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8H40C40.5304 8 41.0391 8.21071 41.4142 8.58579C41.7893 8.96086 42 9.46957 42 10V36C42 36.5304 41.7893 37.0391 41.4142 37.4142C41.0391 37.7893 40.5304 38 40 38H32.92" stroke="#273266" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 18H42M32 6V12M16 6V12M24 18C21.6266 18 19.3065 18.7038 17.3332 20.0224C15.3598 21.3409 13.8217 23.2151 12.9134 25.4078C12.0052 27.6005 11.7676 30.0133 12.2306 32.3411C12.6936 34.6689 13.8365 36.8071 15.5147 38.4853C17.1929 40.1635 19.3311 41.3064 21.6589 41.7694C23.9867 42.2325 26.3995 41.9948 28.5922 41.0866C30.7849 40.1783 32.6591 38.6402 33.9776 36.6668C35.2962 34.6935 36 32.3734 36 30C36 26.8174 34.7357 23.7652 32.4853 21.5147C30.2348 19.2643 27.1826 18 24 18ZM24 32.64L26.6 34L26.1 31.1L28.1 29.1L25.2 28.68L24 26L22.7 28.64L19.8 29.06L21.8 31.06L21.4 34L24 32.64Z" stroke="#273266" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DifficultyIcon = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.666626C5.42812 0.666626 3.75 2.34475 3.75 4.41663C3.75 6.4885 5.42812 8.16663 7.5 8.16663C9.57187 8.16663 11.25 6.4885 11.25 4.41663C11.25 2.34475 9.57187 0.666626 7.5 0.666626ZM9.375 4.41663C9.375 3.38538 8.53125 2.54163 7.5 2.54163C6.46875 2.54163 5.625 3.38538 5.625 4.41663C5.625 5.44788 6.46875 6.29163 7.5 6.29163C8.53125 6.29163 9.375 5.44788 9.375 4.41663ZM13.125 13.7916C12.9375 13.126 10.0312 11.9166 7.5 11.9166C4.97813 11.9166 2.09063 13.1166 1.875 13.7916H13.125ZM0 13.7916C0 11.2979 4.99687 10.0416 7.5 10.0416C10.0031 10.0416 15 11.2979 15 13.7916V15.6666H0V13.7916Z" fill="#425466"/>
  </svg>
);

const ProgressIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.375 8.75C4.375 8.40481 4.65482 8.125 5 8.125C5.34518 8.125 5.625 8.40481 5.625 8.75C5.625 9.09519 5.34518 9.375 5 9.375C4.65482 9.375 4.375 9.09519 4.375 8.75Z" fill="#425466"/>
    <path d="M5 10.625C4.65482 10.625 4.375 10.9048 4.375 11.25C4.375 11.5952 4.65482 11.875 5 11.875C5.34518 11.875 5.625 11.5952 5.625 11.25C5.625 10.9048 5.34518 10.625 5 10.625Z" fill="#425466"/>
    <path d="M6.875 8.75C6.875 8.40481 7.15481 8.125 7.5 8.125C7.84519 8.125 8.125 8.40481 8.125 8.75C8.125 9.09519 7.84519 9.375 7.5 9.375C7.15481 9.375 6.875 9.09519 6.875 8.75Z" fill="#425466"/>
    <path d="M7.5 10.625C7.15481 10.625 6.875 10.9048 6.875 11.25C6.875 11.5952 7.15481 11.875 7.5 11.875C7.84519 11.875 8.125 11.5952 8.125 11.25C8.125 10.9048 7.84519 10.625 7.5 10.625Z" fill="#425466"/>
    <path d="M9.375 8.75C9.375 8.40481 9.65481 8.125 10 8.125C10.3452 8.125 10.625 8.40481 10.625 8.75C10.625 9.09519 10.3452 9.375 10 9.375C9.65481 9.375 9.375 9.09519 9.375 8.75Z" fill="#425466"/>
    <path d="M10 10.625C9.65481 10.625 9.375 10.9048 9.375 11.25C9.375 11.5952 9.65481 11.875 10 11.875C10.3452 11.875 10.625 11.5952 10.625 11.25C10.625 10.9048 10.3452 10.625 10 10.625Z" fill="#425466"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 1.25C3.75 0.904825 4.02982 0.625 4.375 0.625C4.72017 0.625 5 0.904825 5 1.25V1.875H10V1.25C10 0.904825 10.2798 0.625 10.625 0.625C10.9702 0.625 11.25 0.904825 11.25 1.25V1.875H11.875C12.9106 1.875 13.75 2.71447 13.75 3.75V12.5C13.75 13.5356 12.9106 14.375 11.875 14.375H3.125C2.08947 14.375 1.25 13.5356 1.25 12.5V3.75C1.25 2.71447 2.08947 1.875 3.125 1.875H3.75V1.25ZM10 3.125V3.75C10 4.09518 10.2798 4.375 10.625 4.375C10.9702 4.375 11.25 4.09518 11.25 3.75V3.125H11.875C12.2202 3.125 12.5 3.40482 12.5 3.75V5.625H2.5V3.75C2.5 3.40482 2.77982 3.125 3.125 3.125H3.75V3.75C3.75 4.09518 4.02982 4.375 4.375 4.375C4.72017 4.375 5 4.09518 5 3.75V3.125H10ZM2.5 6.875V12.5C2.5 12.8452 2.77982 13.125 3.125 13.125H11.875C12.2202 13.125 12.5 12.8452 12.5 12.5V6.875H2.5Z" fill="#425466"/>
  </svg>
);

function MyLearningPage() {
  return (
    <div className="flex min-h-screen bg-[#F2ECFE]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header Row: "My Learning" and Date */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 p-6">
          <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 sm:mb-0">
            <h1 className="text-[40px] leading-[20px] text-[#5E1BEE] font-jersey20">
              My Learning
            </h1>
          </div>
          <div className="flex items-center bg-[#273266] rounded-full px-4 py-2">
            <span className="text-white text-sm">Tuesday March 26th 2025</span>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white border border-black/40 shadow-md rounded-[25px] p-6 mx-6">
          <div className="px-6 py-8 flex items-center">
            <h2 className="text-[#5E1BEE] text-2xl font-semibold">Your Courses</h2>
          </div>
          <hr className="border-[#273266] mb-2" />
          <div className="space-y-6">
            <CourseCard
              title="JavaScript 101"
              description="Write an amazing description in this dedicated card section."
              difficulty={3}
              progress={30}
            />
            <CourseCard
              title="Python 101"
              description="Write an amazing description in this dedicated card section."
              difficulty={2}
              progress={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ title, description, difficulty, progress }) {
  return (
    <div className="bg-[#F9FAFB] shadow-md rounded-[16px] mx-auto max-w-4xl">
      {/* Top bar with icon (calendar) and Start badge */}
      <div className="flex justify-between items-center bg-[#E4D9FC] p-2 rounded-t-[16px]">
        <div className="w-12 h-12">
          <CalendarIcon />
        </div>
        <div className="flex items-center justify-center px-3 py-1 gap-1 rounded-full bg-[#FFAFCC]">
          <span className="text-black font-bold text-xl">Start</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-3 h-[202px] flex flex-col justify-between gap-2">
        <h3 className="text-xl font-medium text-[#16192C]">{title}</h3>
        <p className="text-sm text-[#425466]">{description}</p>
        <div className="flex flex-wrap sm:flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <DifficultyIcon />
            <span className="text-sm font-semibold text-[#425466]">
              Difficulty: {difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <ProgressIcon />
            <span className="text-sm font-semibold text-[#425466]">
              Progress: {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLearningPage;
