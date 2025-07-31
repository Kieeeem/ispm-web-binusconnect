import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- UI COMPONENTS ---

const OrganizationCard = ({ org }) => {
    const categoryColors = {
        'Penalaran': 'bg-blue-100 text-blue-800',
        'Himpunan Mahasiswa Jurusan': 'bg-green-100 text-green-800',
        'Kerohanian dan Kemasyarakatan': 'bg-orange-100 text-orange-800',
        'Olahraga dan Beladiri': 'bg-indigo-100 text-indigo-800',
    };

    return (
        <Link href={route('organization.show', org.idOrganisasi)} className="block group">
            {/* Menggunakan overflow-hidden agar gambar tidak keluar dari border-radius */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                {/* Bagian untuk gambar banner */}
                <div className="w-full h-32 bg-gray-200">
                    <img
                        // --- INI BAGIAN YANG DIPERBAIKI ---
                        // Mengambil path dari database dan menggabungkannya dengan /storage
                        src={`/storage/${org.fotoOrganisasi}`}
                        alt={`${org.namaOrganisasi} Logo`}
                        // object-cover akan membuat gambar mengisi div tanpa merusak rasio
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Bagian untuk konten teks */}
                <div className="p-4 flex-grow flex flex-col">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 self-start ${categoryColors[org.tipeOrganisasi] || 'bg-gray-100 text-gray-800'}`}>
                        {org.tipeOrganisasi}
                    </span>
                    <h3 className="text-md font-bold text-gray-900 mt-1 flex-grow">{org.namaOrganisasi}</h3>
                </div>
            </div>
        </Link>
    );
};


// --- MAIN PAGE COMPONENT ---
// Terima 'organizations' sebagai props dari controller
export default function OrganizationPage({ organizations = [], categories = [] }) {
    const [activeCategory, setActiveCategory] = useState('All');

    const allCategories = ['All', ...categories];

    // Logika filter ini sekarang akan berjalan pada data asli dari database
    const filteredOrgs = organizations.filter(org => 
        activeCategory === 'All' || org.tipeOrganisasi === activeCategory
    );

    return (
        <>
            <Head title="Organizations" />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors duration-200 ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Organizations Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredOrgs.map(org => (
                            <OrganizationCard key={org.idOrganisasi} org={org} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

OrganizationPage.layout = page => <MainLayout children={page} />;
