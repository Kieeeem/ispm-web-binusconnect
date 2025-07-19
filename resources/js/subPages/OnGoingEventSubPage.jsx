import React from 'react';

export default function OngoingEventSubPage() {
  const events = [
    {
      title: 'Judul Event',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
      imageSrc: '/images/event1.png', 
    },
    {
      title: 'Judul Event',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
      imageSrc: '/images/event2.png', 
    },
  ];

  return (
    <section className="bg-[#ececec] py-10 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-[56px] font-bold text-center text-black mb-8 md:mb-16">Ongoing Event</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {events.map((event, idx) => (
            <React.Fragment key={idx}>
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h3 className="text-2xl md:text-[48px] text-black font-bold mb-4">{event.title}</h3>
                    <p className="text-base md:text-[24px] text-black leading-relaxed mb-6">{event.description}</p>
                    <button className="bg-[#0099DC] text-white px-6 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-blue-700 transition">
                      Selengkapnya
                    </button>
                  </div>
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="rounded-xl shadow-lg w-full object-cover max-h-72 md:max-h-none"
                  />
                </>
              ) : (
                <>
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="rounded-xl shadow-lg w-full object-cover max-h-72 md:max-h-none"
                  />
                  <div>
                    <h3 className="text-2xl md:text-[48px] font-bold mb-4">{event.title}</h3>
                    <p className="text-base md:text-[24px] text-black font-[400] leading-relaxed mb-6">{event.description}</p>
                    <button className="bg-[#0099DC] text-white px-6 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-blue-700 transition">
                      Selengkapnya
                    </button>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
