const testimonials = [
  {
    image: '/images/person1.jpg', 
    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.`,
    name: 'Nama Lengkap',
    position: 'Posisi atau jabatan',
  },
  {
    image: '/images/person2.jpg',
    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.`,
    name: 'Nama Lengkap',
    position: 'Posisi atau jabatan',
  },
  {
    image: '/images/person3.jpg',
    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.`,
    name: 'Nama Lengkap',
    position: 'Posisi atau jabatan',
  },
  {
    image: '/images/person4.jpg',
    text: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.`,
    name: 'Nama Lengkap',
    position: 'Posisi atau jabatan',
  },
];

export default function TestimonialSubPage() {
  return (
    <section className="bg-[#E8F2FF] w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-16 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12 md:mb-[112px]">
          What did they say about BINUS Connect?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[39px]">
          {testimonials.map(({ image, text, name, position }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 relative text-center"
            >
              <div className="md:absolute md:-top-16 md:left-1/2 md:-translate-x-1/2">
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg md:mb-0"
                />
              </div>
              <div className="mt-0 md:mt-12">
                <p className="text-black mb-6 text-base md:text-[24px] leading-relaxed">{text}</p>
                <h3 className="font-[600] text-lg md:text-[28px] text-black">{name}</h3>
                <p className="text-black text-base md:text-[24px]">{position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
