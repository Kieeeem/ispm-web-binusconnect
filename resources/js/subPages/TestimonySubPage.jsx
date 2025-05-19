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
    <section className="bg-[#E8F2FF] py-24 w-full" style={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
    }}>
      <div className="max-w-screen-2xl mx-auto px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-[112px]">
          What did they say about BINUS Connect?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[39px]">
          {testimonials.map(({ image, text, name, position }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 relative text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto -mt-16 mb-6 border-4 border-white shadow-lg"
              />
              <p className="text-black mb-6 text-[24px] leading-relaxed">{text}</p>
              <h3 className="font-[600] text-[28px] text-black">{name}</h3>
              <p className="text-black text-[24px]">{position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
