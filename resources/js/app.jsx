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
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
