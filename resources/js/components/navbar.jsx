import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#FAFAFA] text-[#292929] px-4 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between relative max-w-full">
      {/* Top Row: Logo and Hamburger (mobile) */}
      <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`w-full md:w-auto flex-col md:flex-row flex md:items-center md:space-x-8 mt-4 md:mt-0 ${menuOpen ? "flex" : "hidden"} md:flex absolute md:static left-0 top-full md:top-auto bg-[#FAFAFA] md:bg-transparent z-20 px-4 md:px-0 max-w-full`}
      >
        {["Dashboard", "Event", "Organization", "Forum", "Marketplace"].map((item) => (
          item === "Marketplace" ? (
            <NavLink
              to="/marketplace"
              className="text-[400] text-[#292929] text-[20px] relative transition-all duration-300 ease-in-out hover:text-[#0099DC] hover:scale-105 active:scale-95 py-2 md:py-0 md:px-2 w-full md:w-auto text-left md:text-center active:text-[#0099DC]"
              key={item}
            >
              {item}
              <span className="block h-0.5 bg-[#0099DC] scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          ) : item === "Dashboard" ? (
            <NavLink
              to="/"
              className="text-[400] text-[#292929] text-[20px] relative transition-all duration-300 ease-in-out hover:text-[#0099DC] hover:scale-105 active:scale-95 py-2 md:py-0 md:px-2 w-full md:w-auto text-left md:text-center active:text-[#0099DC]"
              key={item}
            >
              {item}
              <span className="block h-0.5 bg-[#0099DC] scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          ) : (
            <button
              key={item}
              onClick={() => {
                if (item !== "Event" && item !== "Marketplace") {
                  setPage(item.toLowerCase());
                }
              }}
              className="text-[400] text-[#292929] text-[20px] relative transition-all duration-300 ease-in-out hover:text-[#0099DC] hover:scale-105 active:scale-95 py-2 md:py-0 md:px-2 w-full md:w-auto text-left md:text-center active:text-[#0099DC]"
            >
              {item}
              <span className="block h-0.5 bg-[#0099DC] scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          )
        ))}
      </div>

      {/* Right section: Notifications and Profile */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Notification Icon */}
        <button className="relative hover:text-[#0099DC] transition">
          <i className="fas fa-bell text-xl"></i>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
        </button>
        {/* Profile Picture */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-white hover:scale-105 transition-transform"
        />
      </div>
    </nav>
  );
};
export default Navbar;