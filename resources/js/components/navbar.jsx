

const Navbar = () => {
return(<nav className="bg-[#FAFAFA] text-[#292929] px-40 py-4 flex items-center justify-between">
      {/* Left section: Logo and Search */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        </div>

        {/* Search Bar */}
        {/* <div className="w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow"
          />
        </div> */}
      </div>

      {/* Center: Navigation Menu */}
      <div className="absolute left-1/2 transform -translate-x-[90%] flex space-x-18">
        {["Dashboard","Event", "Organization", "Forum", "Marketplace"].map((item) => (
          <button
            key={item}
            onClick={() => {
              if (item !== "Event" && item !== "Marketplace") {
                setPage(item.toLowerCase());
              }
            }}
            className="text-[400] text-[#292929] text-[20px] relative transition-all duration-300 ease-in-out hover:text-[#0099DC] hover:scale-105 active:scale-95"
          >
            {item}
            <span className="block h-0.5 bg-[#0099DC] scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </button>
        ))}
      </div>

      {/* Right section: Notifications and Profile */}
      <div className="flex items-center space-x-4">
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

)   
};
export default Navbar;