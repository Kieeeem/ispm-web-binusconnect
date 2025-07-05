import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// 'children' is a special prop that will contain your page content
export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#ececec]">
            <Navbar />

            <main className="mx-auto max-w-screen-2xl">
                {/* This is where your page (e.g., LandingPage) will be displayed */}
                {children} 
            </main>

            <Footer />
        </div>
    );
}