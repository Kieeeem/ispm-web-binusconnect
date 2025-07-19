import React from 'react';
import { PanelsTopLeft, MessageCircle, Users, ShoppingBag } from 'lucide-react';

const features = [
  {
    title: 'Event Hub',
    description:
      'Temukan dan ikuti berbagai acara menarik yang diselenggarakan oleh Binus dan organisasi kemahasiswaan',
    icon: <PanelsTopLeft size={32} className="text-white" />,
    bg: 'bg-[#8CEAFF]',
  },
  {
    title: 'Forum Diskusi',
    description:
      'Bertukar pikiran, pendapat, dan solusi bersama sesama Binusian',
    icon: <MessageCircle size={32} className="text-white" />,
    bg: 'bg-[#FFD680]',
  },
  {
    title: 'Organisasi',
    description:
      'Kenali lebih dekat organisasi kampus lengkap dengan profil dan kegiatannya',
    icon: <Users size={32} className="text-white" />,
    bg: 'bg-[#29ABE2]',
  },
  {
    title: 'Marketplace',
    description:
      'Jual-beli barang dan dukung kegiatan dana usaha organisasi kampus',
    icon: <ShoppingBag size={32} className="text-white" />,
    bg: 'bg-[#FFA726]',
  },
];

export default function FiturSubPage() {
  return (
    <section className="bg-[#F0F9FF] w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-16 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-[56px] font-[600] text-center text-black mb-12 md:mb-[69px]">Fitur-Fitur</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-[52px] gap-y-8 md:gap-y-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative bg-[#FFF9E6] p-6 md:p-8 rounded-xl shadow-md max-w-full md:max-w-[351px] max-h-[368px] mx-auto"
            >
              <div className={`absolute -top-4 left-6 p-3 rounded-full ${f.bg}`}>
                {f.icon}
              </div>
              <h3 className="mt-8 font-[600] text-xl md:text-[28px] text-black">{f.title}</h3>
              <p className="mt-2 text-black text-base md:text-[24px] font-[400] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}