import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- UI COMPONENTS ---
// Komponen-komponen ini bisa Anda pindah ke file terpisah nanti jika diperlukan

const ForumPostCard = ({ post }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold text-gray-800">{post.title}</h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{post.content}</p>
        <div className="flex items-center mt-3 space-x-4 text-gray-400">
            {/* Placeholder untuk tombol like/dislike */}
            <button className="hover:text-blue-600">👍</button>
            <button className="hover:text-red-600">👎</button>
        </div>
    </div>
);

const EventCard = ({ event }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={event.imageUrl || 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Event'} alt={event.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                {event.tag || 'Upcoming Event'}
            </span>
            <h3 className="text-md font-semibold text-gray-900 mt-1">{event.title}</h3>
            <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm font-medium mt-2 inline-block">
                Selengkapnya
            </Link>
        </div>
    </div>
);

// --- DUMMY DATA UNTUK FORUM & EVENT ---
const dummyForums = [
    { id: 1, title: 'Bagaimana cara tetap fokus saat kuliah?', content: 'Jujur, tetap fokus selama kuliah terkadang sulit, apalagi dengan semua yang terjadi di sekitar Anda. Satu hal yang membantu saya adalah membisukan ponsel dan menyimpannya dari pandangan agar tidak tergoda untuk scroll media sosial...' },
    { id: 2, title: 'Tips manajemen waktu untuk mahasiswa?', content: 'Membuat catatan dengan kata-kata sendiri daripada hanya menyalin semua yang dikatakan dosen juga membuat saya tetap terlibat. Jika saya benar-benar kesulitan berkonsentrasi, saya akan mencoba melakukan beberapa latihan pernapasan cepat sebelum kelas untuk menjernihkan pikiran...' },
];

const dummyEvent = {
    id: 1,
    title: 'TechnoScape 2025 "Future Forward: Exploring the Digital Horizon"',
    tag: 'Upcoming Event',
    imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=TechnoScape',
};


// --- MAIN PAGE COMPONENT ---
// Menerima 'organization' sebagai props dari OrganizationController@show
export default function OrganizationDetailPage({ organization }) {

    return (
        <>
            <Head title={organization.namaOrganisasi} />
            <div className="bg-gray-100 min-h-screen">
                
                {/* Banner and Logo (Full Width) */}
                <div className="relative w-full h-80 bg-gray-800 shadow-lg flex items-center justify-center">
                    <img 
                        src={`/storage/${organization.fotoOrganisasi}`} 
                        alt={`${organization.namaOrganisasi} Banner`} 
                        className="w-full h-full object-cover opacity-30" 
                    />
                    <h1 className="text-5xl font-bold text-white absolute z-10 text-center px-4">{organization.namaOrganisasi}</h1>
                </div>
                
                {/* Main Content Section (Full Width White Background) */}
                <div className="relative bg-white mt-[-80px] z-20 pb-8">
                    {/* Inner container to constrain content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Logo dibuat lingkaran dan diposisikan di atas */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 -translate-y-1/2">
                                <div className="bg-white p-1 rounded-full shadow-lg">
                                    <img 
                                        src={`/storage/${organization.fotoOrganisasi}`} 
                                        alt={`${organization.namaOrganisasi} Logo`} 
                                        className="w-36 h-36 object-cover rounded-full border-4 border-white" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        {/* Padding atas ditambah untuk memberi ruang bagi logo */}
                        <div className="pt-20">
                            <h2 className="text-3xl font-bold text-gray-900">{organization.namaOrganisasi}</h2>
                            {/* Menggunakan bioOrganisasi dari database */}
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mt-4">{organization.bioOrganisasi}</p>
                        </div>

                        {/* Forum & Event Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t pt-6">
                            {/* Forum Section */}
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Forum</h2>
                                <div className="space-y-4">
                                    {dummyForums.length > 0 ? (
                                        dummyForums.map(post => (
                                            <ForumPostCard key={post.id} post={post} />
                                        ))
                                    ) : (
                                        <p className="text-gray-500">Belum ada diskusi di forum.</p>
                                    )}
                                </div>
                            </div>

                            {/* Event Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Event</h2>
                                {dummyEvent ? (
                                    <EventCard event={dummyEvent} />
                                ) : (
                                    <p className="text-gray-500">Tidak ada event yang akan datang.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

OrganizationDetailPage.layout = page => <MainLayout children={page} />;
