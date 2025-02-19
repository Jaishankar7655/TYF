import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Music, Users, Trophy } from "lucide-react";
import festlogo from "../assets/festlogo.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated color dots background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              backgroundColor: ["#ff5f6d", "#ffc371", "#2ecc71", "#3498db"][
                i % 4
              ],
              opacity: 0.3,
              animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 ">
        {/* Hero section */}
        <div className="flex justify-between" >
          <img className="md:w-[200px] md:h-[200px]  w-[70px] h-[70px]" src={festlogo} alt="" />

          <div className="text-center mb-16">
            <h1 className="md:text-7xl text-4xl   font-bold text-purple-900 mb-6 animate-fade-in">
              Truba Youth Fest1
              <span className="block text-8xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                2K25
              </span>
            </h1>
            <p className="text-3xl text-purple-700 mb-8">
              Celebrate the Colors of Youth | March 8-9-10, 2025
            </p>
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-bold py-4 px-8 rounded-full 
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </button>
          </div>
          <img className="md:w-[200px] md:h-[200px]  w-[70px] h-[70px]" src={festlogo} alt="" />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Calendar className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">3 Days</h3>
            <p className="text-gray-600">
              Of non-stop excitement and cultural extravaganza
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Music className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              25+ Events
            </h3>
            <p className="text-gray-600">
              Cultural, Technical, Literary & Sports competitions
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              1000+ Students
            </h3>
            <p className="text-gray-600">From colleges across the region</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Trophy className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-bold text-purple-900 mb-2"></h3>
            <p className="text-gray-600">Worth of prizes to be won</p>
          </div>
        </div>

        {/* Event categories preview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-8">
            Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Cultural", "Literary", "Technical", "E-Sports", "Sports"].map(
              (category, index) => (
                <div
                  key={category}
                  className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-75 
                              group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      {category}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
