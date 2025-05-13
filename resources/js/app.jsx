import React from 'react';
import ReactDOM from "react-dom/client";
import "../css/app.css";
import Navbar from './components/navbar';
import BinusConnect from './Pages/BinusConnect';
import Footer from './components/footer';



const App = () => {
    return (
    <>
      <Navbar />

      <main className="p-6">
        <BinusConnect />
      </main>

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
