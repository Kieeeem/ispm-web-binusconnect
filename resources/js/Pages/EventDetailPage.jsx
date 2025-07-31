import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> );
const CalendarIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> );
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );

// --- MAIN PAGE COMPONENT ---
export default function EventDetailPage({ eventDetail }) {
    // Guard clause untuk memastikan eventDetail ada sebelum render
    if (!eventDetail) {
        return (
            <MainLayout>
                <div className="text-center p-10">Loading event details...</div>
            </MainLayout>
        );
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
        organisasi
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

    // Fungsi aman untuk memformat tanggal, mencegah error jika data null
    const formatDate = (dateString, options) => {
        if (!dateString) return 'Tidak tersedia';
        const defaultOptions = {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit',
            hour12: false
        };
        return new Date(dateString).toLocaleString('id-ID', options || defaultOptions);
    };

    const postedDate = formatDate(created_at, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const scheduleStart = formatDate(jadwalStartEvent) + ' WIB';
    const scheduleEnd = formatDate(jadwalEndEvent) + ' WIB';

    return (
        <>
            <Head title={judulEvent || 'Event Detail'} />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Top Bar: Back Button & Search */}
                    <div className="flex justify-between items-center mb-6">
                            {/* --- PERBAIKAN DI SINI --- */}
                            {/* Menggunakan URL langsung untuk menghindari error Ziggy */}
                        <Link href="/events" className="inline-flex items-center p-2 rounded-full bg-white shadow hover:bg-gray-200 transition">
                            <BackArrowIcon />
                        </Link>
                        <div className="relative w-1/3">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><SearchIcon /></span>
                            <input type="search" placeholder="Search event favoritmu" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>

                    {/* Banner Section */}
                    <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <img 
                            src={fotoEvent ? `/storage/${fotoEvent}` : 'https://placehold.co/1200x400/cccccc/333333?text=Event+Banner'} 
                            alt={judulEvent || 'Event Banner'} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column (Info Cards) */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <p className="text-sm text-gray-500">Posted on {postedDate}</p>
                                <h2 className="text-xl font-bold text-gray-900 mt-1"> {judulEvent}</h2>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex items-center">
                                    <img src={organisasi?.fotoOrganisasi ? `/storage/${organisasi.fotoOrganisasi}` : 'https://placehold.co/40x40/cccccc/333333?text=Org'} alt={penyelenggaraEvent || 'Organizer'} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <p className="font-semibold text-gray-700">{penyelenggaraEvent || 'Organizer'}</p>
                                        <p className="text-gray-500 text-sm">{organisasi?.namaOrganisasi || 'Informasi Organisasi'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex items-start mb-2">
                                    <LocationIcon />
                                    <div>
                                        <p className="font-semibold">Onsite</p>
                                        <p className="text-gray-600">{lokasiEvent || 'TBA'}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <LocationIcon />
                                    <div>
                                        <p className="font-semibold">Online</p>
                                        <p className="text-gray-600">Zoom (TBA)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <div className="flex items-start">
                                    <CalendarIcon />
                                    <div>
                                        <p className="font-semibold">Mulai: <span className="font-normal">{scheduleStart}</span></p>
                                        <p className="font-semibold">Selesai: <span className="font-normal">{scheduleEnd}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Registration & Description) */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-800">GRATIS</p>
                                <a href={linkRegistrasi || '#'} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 text-md">
                                    Daftar Sekarang
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{deskripsiEvent || 'Deskripsi tidak tersedia.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

EventDetailPage.layout = page => <MainLayout children={page} />;
