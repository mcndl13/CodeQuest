import React from "react";
import Sidebar from "../components/Sidebar";

function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, name: "Paul C. Ramos", score: 5075, badge: 9, avatar: "../assets/user1.jpg" },
    { rank: 2, name: "Derrick L. Thoman", score: 4985, badge: 9, avatar: "../assets/user2.jpg" },
    { rank: 3, name: "Kelsey T. Donovan", score: 4642, badge: 8, avatar: "../assets/user3.jpg" },
    { rank: 4, name: "Jack L. Gregory", score: 3874, badge: 9, avatar: "../assets/user4.jpg" },
    { rank: 5, name: "Mary R. Mercado", score: 3567, badge: 7, avatar: "../assets/user5.jpg" },
    { rank: 6, name: "Theresa N. Maki", score: 3478, badge: 8, avatar: "../assets/user6.jpg" },
    { rank: 7, name: "Jack L. Gregory", score: 3387, badge: 5, avatar: "../assets/user7.jpg" },
    { rank: 8, name: "James R. Stokes", score: 3257, badge: 7, avatar: "../assets/user8.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F2ECFE]">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-white px-4 py-2 rounded-full">
            <h1 className="text-[40px] leading-[20px] text-[#5E1BEE] font-jersey20">Leaderboard</h1>
          </div>
          <div className="bg-[#273266] px-4 py-2 rounded-full">
            <span className="text-white text-sm">Tuesday March 26th 2025</span>
          </div>
        </div>

        {/* My Rank */}
        <div className="bg-white border border-black/40 shadow-md rounded-[25px] w-full px-8 py-6">
          <div className="text-[#5E1BEE] text-2xl font-semibold mb-4">My Rank: 720</div>
          <hr className="border-[#273266] mb-6" />

          {/* Leaderboard List */}
          <div className="space-y-4">
            {leaderboardData.map((user) => (
              <LeaderboardCard key={user.rank} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderboardCard({ user }) {
  const trophyColors = {
    1: "bg-[#FFAA04A6]",
    2: "bg-[#9E9E9EA6]",
    3: "bg-[#FF6E04A6]",
  };
  const rankBg = trophyColors[user.rank] || "bg-black/10";

  return (
    <div className="relative bg-white border border-black/10 rounded-xl shadow p-4 flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />

      </div>
      <div>
        <h3 className="text-md font-semibold text-black">{user.name}</h3>
      </div>
      <div className="ml-auto text-right">
        <p className="text-lg font-bold text-black">{user.score}</p>
      </div>
      <div className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black/60 ${rankBg}`}>
        {user.rank}
      </div>
    </div>
  );
}

export default LeaderboardPage;
