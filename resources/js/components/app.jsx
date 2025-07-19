import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Index from '../router/Index';

const App = () => (
  <div className="min-h-screen flex flex-col bg-[#ececec]">
    <Navbar />
    <main className="flex-grow mx-auto max-w-screen-2xl w-full">
      <Index />
    </main>
    <Footer />
  </div>
);

export default App;