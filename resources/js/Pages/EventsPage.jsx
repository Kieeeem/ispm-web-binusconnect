import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- ICONS ---
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const PlusIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg> );

// Kategori statis untuk filter
const categories = ['All', 'Webinar', 'Lomba', 'ComServ', 'Workshop'];

// --- UI COMPONENTS ---

const EventCard = ({ event }) => {
    // Fungsi untuk mencocokkan ID kategori dengan nama kategori
    const getCategoryName = (categoryId) => {
        switch(categoryId) {
            case 'CAT001': return 'Webinar';
            case 'CAT002': return 'Lomba';
            case 'CAT003': return 'ComServ';
            case 'CAT004': return 'Workshop';
            default: return 'Event';
        }
    };
    
    const categoryName = getCategoryName(event.idEventOpportunityCategory);

    const categoryColors = {
        Webinar: 'text-purple-600',
        Lomba: 'text-pink-600',
        ComServ: 'text-indigo-600',
        Workshop: 'text-blue-600',
    };

    return (
        // Kartu dibungkus dengan Link yang benar
        <Link href={route('events.show', event.idEventOpportunity)} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300">
                {/* Menggunakan data asli dari database */}
                <img 
                    src={`/storage/${event.fotoEvent}`} 
                    alt={event.judulEvent} 
                    className="w-full h-40 object-cover bg-gray-200"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
                />
                <div className="p-4">
                    <p className={`text-sm font-bold uppercase ${categoryColors[categoryName] || 'text-gray-600'}`}>
                        {categoryName}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1 truncate">{event.judulEvent}</h3>
                    <div className="text-gray-500 group-hover:text-blue-600 text-sm font-medium mt-2 inline-block">
                        Selengkapnya
                    </div>
                </div>
            </div>
        </Link>
    );
};

// --- MAIN PAGE COMPONENT ---
// Menerima 'events' sebagai props dari controller
export default function EventsPage({ events = [] }) {
    // --- TES DEBUGGING: Cek data yang diterima dari controller ---
    console.log('Data events dari controller:', events);
    // -----------------------------------------------------------

    const [activeCategory, setActiveCategory] = useState('All');

    // Logika filter disempurnakan untuk mencocokkan dengan data asli
    const filteredEvents = events.filter(event => {
        const getCategoryName = (categoryId) => {
            switch(categoryId) {
                case 'CAT001': return 'Webinar';
                case 'CAT002': return 'Lomba';
                case 'CAT003': return 'ComServ';
                case 'CAT004': return 'Workshop';
                default: return 'Event';
            }
        };
        return activeCategory === 'All' || getCategoryName(event.idEventOpportunityCategory) === activeCategory;
    });

    return (
        <>
            <Head title="Events" />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    <div className="relative mb-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon />
                        </span>
                        <input
                            type="search"
                            placeholder="Search event favoritmu"
                            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid dirender menggunakan data asli */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map(event => (
                            <EventCard key={event.idEventOpportunity} event={event} />
                        ))}
                    </div>

                </div>
            </div>

            <Link href={route('events.create')} className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-transform duration-200 hover:scale-105">
                <PlusIcon />
                <span className="ml-2 font-bold">Add Event</span>
            </Link>
        </>
    );
}

EventsPage.layout = page => <MainLayout children={page} />;
