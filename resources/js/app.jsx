import React from 'react';
import ReactDOM from "react-dom/client";
import "../css/app.css";

import Navbar from './components/navbar';
// import BinusConnect from './Pages/BinusConnect';
import LandingPage from './Pages/LandingPage';
import Footer from './components/footer';



const App = () => {
    return (
    <div className="min-h-screen bg-[#ececec]">
      <Navbar />

      <main className="mx-auto max-w-screen-2xl">
        <LandingPage />
      </main>

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
