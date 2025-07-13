import React from 'react';
import { Link } from '@inertiajs/react'; // Make sure Link is imported

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            {/* You can replace this with your logo */}
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Binus Connect
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            
            {/* --- THIS IS THE MODIFIED LINE --- */}
            <Link href={route('forum')} className="text-gray-600 hover:text-blue-500">
              Forum
            </Link>
            {/* ---------------------------------- */}

            <Link href="#" className="text-gray-600 hover:text-blue-500">Events</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500">Marketplace</Link>
          </div>
          <div>
            <Link 
              href={route('login')} 
              className="bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>

      {/* You can add a footer here if you have one */}
      {/* <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Binus Connect. All rights reserved.
      </footer> */}
    </>
  );
};

export default MainLayout;