// resources/js/components/LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  return (
    <section
      className="bg-[#ececec]
                 h-[628px]
                 flex items-center"
    >
      {/* This DIV will size itself to its children, not full width */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16   items-center m-0 p-0">
        
        {/* LEFT COLUMN: fixed width */}
        <div className="w-[873px] text-center md:text-left md:-ml-45">
          <h1 className="text-[72px] leading-tight font-bold text-gray-800">
            Binus Connect
          </h1>
          <p className="mt-6 text-[28px] text-gray-600">
            Platform digital yang menghubungkan seluruh komunitas
            Binusian dalam satu ekosistem terpadu. Temukan event,
            diskusi forum, informasi organisasi, dan marketplace
            dalam satu tempat.
          </p>
          <button className="mt-8 bg-[#0099DC] text-white
                             px-10 py-4 rounded-lg
                             hover:bg-blue-700 transition
                             text-lg"
          >
            Sign Up
          </button>
        </div>

        {/* RIGHT COLUMN: fixed width */}
        <div className="flex justify-center">
          <img
            src="/images/LandingPageImg.png"
            alt="Team collaborating on laptops"
            className="w-[617px] h-[628px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default LandingPage;
