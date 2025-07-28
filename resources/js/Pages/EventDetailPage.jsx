import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> );
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> );

// --- MAIN PAGE COMPONENT ---
export default function EventDetailPage({ eventDetail }) {
    if (!eventDetail) {
        return <div>Loading event...</div>;
    }

    const {
        judulEvent,
        idEventOpportunityCategory,
        created_at,
        fotoEvent,
        penyelenggaraEvent,
        linkRegistrasi,
        lokasiEvent,
        jadwalStartEvent,
        jadwalEndEvent,
        deskripsiEvent,
        organisasi // Asumsi ada data organisasi
    } = eventDetail;

    const getCategoryName = (categoryId) => {
        switch(categoryId) {
            case 'CAT001': return 'Webinar';
            case 'CAT002': return 'Lomba';
            case 'CAT003': return 'ComServ';
            case 'CAT004': return 'Workshop';
            default: return 'Event';
        }
    };

    const postedDate = new Date(created_at).toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const startDate = new Date(jadwalStartEvent).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const endDate = new Date(jadwalEndEvent).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB';

    return (
        <>
            <Head title={judulEvent} />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-6">
                        <Link href={route('events')} className="inline-flex items-center p-2 rounded-full bg-white shadow hover:bg-gray-200 transition">
                            <BackArrowIcon />
                        </Link>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Banner Image */}
                        <img src={`/storage/${fotoEvent}`} alt={judulEvent} className="w-full h-64 object-cover bg-gray-200" />

                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Kolom Kiri */}
                            <div className="md:col-span-2">
                                <p className="text-sm text-gray-500">Posted on {postedDate}</p>
                                <h1 className="text-2xl font-bold text-gray-900 mt-2">{getCategoryName(idEventOpportunityCategory)} {judulEvent}</h1>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mt-4">{deskripsiEvent}</p>
                            </div>

                            {/* Kolom Kanan */}
                            <div className="md:col-span-1 space-y-4">
                                {/* Link Registrasi */}
                                <div className="bg-white border border-gray-200 rounded-md p-3 flex justify-between items-center shadow-sm">
                                    <div>
                                        <p className="font-semibold text-gray-700">GRATIS</p>
                                    </div>
                                    <a href={linkRegistrasi} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 text-sm">
                                        Daftar
                                    </a>
                                </div>

                                {/* Info Penyelenggara */}
                                <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Penyelenggara</h3>
                                    <div className="flex items-center space-x-3">
                                        <img src={organisasi?.logoUrl || 'https://placehold.co/40x40/cccccc/333333?text=Org'} alt={penyelenggaraEvent} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-semibold text-gray-700">{penyelenggaraEvent || 'Organizer'}</p>
                                            <p className="text-gray-500 text-sm">{organisasi?.namaOrganisasi || 'Informasi Organisasi'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Lokasi */}
                                <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Lokasi</h3>
                                    <div className="flex items-center space-x-3">
                                        <LocationIcon />
                                        <div>
                                            <p className="text-gray-700">{lokasiEvent || 'TBA'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Jadwal */}
                                <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Jadwal</h3>
                                    <div className="flex items-center space-x-3">
                                        <CalendarIcon />
                                        <div>
                                            <p className="text-gray-700">Mulai: {startDate}</p>
                                            <p className="text-gray-700">Selesai: {endDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

EventDetailPage.layout = page => <MainLayout children={page} />;
