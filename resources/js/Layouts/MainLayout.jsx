import React from 'react';
import { Link, usePage } from '@inertiajs/react';

// --- ICONS (SVG) ---
const LogoIcon = () => (
    <svg className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
    </svg>
);

const BellIcon = () => (
    <svg className="h-6 w-6 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

// --- MAIN LAYOUT COMPONENT ---
const MainLayout = ({ children }) => {
    // Mengambil data 'auth' yang dibagikan dari backend
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    {/* Left Side: Logo & Nav Links */}
                    <div className="flex items-center space-x-8">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <LogoIcon />
                            <span className="text-xl font-bold text-gray-800">Logo</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
                            <Link href="/events" className="text-gray-600 hover:text-blue-600">Event</Link>
                            <Link href="#" className="text-gray-600 hover:text-blue-600">Organization</Link>
                            <Link href="/forum" className="text-gray-600 hover:text-blue-600">Forum</Link>
                            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600">Marketplace</Link>
                        </div>
                    </div>

                    {/* Right Side: Auth dependent UI */}
                    <div className="flex items-center">
                        {auth.user ? (
                            // Tampilan jika user sudah login
                            <div className="flex items-center space-x-5">
                                <button>
                                    <BellIcon />
                                </button>
                                <Link href="/profile">
                                    <img 
                                        className="h-9 w-9 rounded-full object-cover" 
                                        src={auth.user.fotoUser || `https://i.pravatar.cc/150?u=${auth.user.idUser}`} 
                                        alt="User Avatar" 
                                    />
                                </Link>
                            </div>
                        ) : (
                            // Tampilan jika user belum login
                            <Link 
                              href="/login"
                              className="bg-[#0099DC] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                              Sign In
                            </Link>
                        )}
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
