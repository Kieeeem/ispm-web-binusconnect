import React from 'react';
import MainLayout from '../Layouts/MainLayout'; 
import { Link } from '@inertiajs/react';

import FiturSubPage from "../subPages/FiturSubPage";
import OngoingEventSubPage from "../subPages/OnGoingEventSubPage";
import TestimonialSubPage from "../subPages/TestimonySubPage";

const LandingPage = () => {
  return (
    <>
      <section className="bg-[#ececec] flex items-center justify-center py-20 min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-[873px_1000px] gap-[0px]">
          <div className="text-center md:text-left space-y-5 mt-16 md:mt-25  md:ml-30 ">
            <h1 className="text-[72px] leading-tight font-[600] text-gray-800">
              Binus Connect
            </h1>
            <p className="mt-10 text-[28px] text-gray-600 font-[400] md:ml-0">
              Platform digital yang menghubungkan seluruh komunitas
              Binusian dalam satu ekosistem terpadu. Temukan event,
              diskusi forum, informasi organisasi, dan marketplace
              dalam satu tempat.
            </p>
            <Link
  href={route('login')} // Ini akan mengarah ke route 'login' di Laravel
  className="mt-8 bg-[#0099DC] text-white w-[297px] h-[72px] px-7 py-4 rounded-lg
  text-[30px] font-[600] flex items-center justify-center hover:bg-blue-700 transition"
>
  Sign In
</Link>
          </div>
          <div className="flex justify-end mr-30">
            <img
              src="/images/LandingPageImg2.png"
              alt="Team collaborating on laptops"
              className="w-full md:w-[617px] h-auto object-contain transform md:-translate-y-5"
            />
          </div>
        </div>
      </section>

      <FiturSubPage />
      <OngoingEventSubPage />
      <TestimonialSubPage />
    </>
  );
};

// V-- 2. ADD THIS LINE
LandingPage.layout = page => <MainLayout children={page} />;

export default LandingPage;