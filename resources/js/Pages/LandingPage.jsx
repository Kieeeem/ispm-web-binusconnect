import FiturSubPage from "../subPages/FiturSubPage";
import OngoingEventSubPage from "../subPages/OnGoingEventSubPage";
import TestimonialSubPage from "../subPages/TestimonySubPage";

// Force disable horizontal scrolling globally
const style = document.createElement('style');
style.innerHTML = `html, body { overflow-x: hidden !important; }`;
document.head.appendChild(style);

const LandingPage = () => {
  return (
    <>
      {/* If the horizontal scroll persists, add 'html, body { overflow-x: hidden; max-width: 100vw; }' to your global CSS */}
      <section className="bg-[#ececec] flex items-center justify-center py-10 md:py-20 min-h-screen w-full max-w-[1920px] mx-auto overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-24 w-full">
          <div className="text-center md:text-left space-y-5 mt-10 flex flex-col items-center md:items-start">
            <h1 className="text-[40px] md:text-[72px] leading-tight font-[600] text-gray-800">
              Binus Connect
            </h1>
            <p className="mt-6 md:mt-10 text-[18px] md:text-[28px] text-gray-600 font-[400] max-w-xl">
              Platform digital yang menghubungkan seluruh komunitas
              Binusian dalam satu ekosistem terpadu. Temukan event,
              diskusi forum, informasi organisasi, dan marketplace
              dalam satu tempat.
            </p>
            <button className="mt-6 md:mt-8 bg-[#0099DC] text-white w-full md:w-[297px] h-[56px] md:h-[72px] px-7 py-4 rounded-lg text-[20px] md:text-[30px] font-[600] flex items-center justify-center hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full">
            <img
              src="/images/LandingPageImg2.png"
              alt="Team collaborating on laptops"
              className="w-full max-w-[90%] md:max-w-[500px] h-auto object-contain mx-auto"
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

export default LandingPage;
