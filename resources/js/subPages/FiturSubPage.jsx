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
    <section className="bg-[#F0F9FF] py-43 min-h-screen w-full" style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
      >
      <div className="max-w-screen-2xl mx-auto px-[0px]">
       
        <h2 className="text-[56px] font-[600] text-center text-black mb-[69px]">Fitur-fitur</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[52px] gap-y-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative bg-[#FFF9E6] p-8 rounded-xl shadow-md max-w-[351px] max-h-[368px] mx-auto"
            >
              
              <div className={`absolute -top-4 left-6 p-3 rounded-full ${f.bg}`}>
                {f.icon}
              </div>
              
              <h3 className="mt-8 font-[600] text-[28px] text-black">{f.title}</h3>
              <p className="mt-2 text-black text-[24px] font-[400] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}