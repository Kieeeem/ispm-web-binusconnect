import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- UI COMPONENTS ---
// Komponen kartu disederhanakan untuk hanya menggunakan data yang pasti ada
const OrganizationCard = ({ org }) => {
    return (
        // Menggunakan kolom ID yang benar dari database: org.idOrganisasi
        <Link href={route('organization.show', org.idOrganisasi)} className="block group">
            <div className="bg-white rounded-lg shadow-md p-4 text-center transform group-hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-center">
                {/* Menggunakan kolom foto yang benar: org.fotoOrganisasi */}
                <img 
                    src={org.fotoOrganisasi} 
                    alt={`${org.namaOrganisasi} Logo`} 
                    className="w-24 h-24 mx-auto mb-4 object-contain" 
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/cccccc/333333?text=Logo'; }}
                />
                <div>
                    {/* Menggunakan kolom nama yang benar: org.namaOrganisasi */}
                    {/* Bagian akronim dan kategori dihapus untuk sementara */}
                    <h3 className="text-md font-bold text-gray-900 mt-2">{org.namaOrganisasi}</h3>
                </div>
            </div>
        </Link>
    );
};


// --- MAIN PAGE COMPONENT ---
// Terima 'organizations' sebagai props dari controller
export default function OrganizationPage({ organizations = [] }) {
    // Logika filter dan state kategori dihapus untuk menyederhanakan
    // dan memastikan data tampil terlebih dahulu.

    return (
        <>
            <Head title="Organizations" />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Organisasi</h1>

                    {/* Filter kategori dihapus untuk sementara */}

                    {/* Organizations Grid */}
                    {/* Cek jika ada data, lalu langsung map tanpa filter */}
                    {organizations.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {organizations.map(org => (
                                <OrganizationCard key={org.idOrganisasi} org={org} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mt-10">Tidak ada organisasi yang ditemukan di database.</p>
                    )}
                </div>
            </div>
        </>
    );
}

OrganizationPage.layout = page => <MainLayout children={page} />;
