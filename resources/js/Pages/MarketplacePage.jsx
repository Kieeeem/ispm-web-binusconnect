import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- ICONS ---
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const PlusIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> );

const categories = ['All', 'Food', 'Lanyard', 'Hoodie', 'T-Shirt'];

// --- UI COMPONENTS ---

const ProductCard = ({ product }) => (
    <Link href={`/marketplace/${product.idMarketplace}`} className="block group">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300">
            {/* DIUBAH: Menggunakan path dari storage */}
            <img 
                src={`/storage/${product.fotoMarketplace}`} 
                alt={product.judulMarketplace} 
                className="w-full h-48 object-cover bg-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
            />
            <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                    {product.statusMarketplace || 'Event'}
                </span>
                <h3 className="text-lg font-bold text-gray-900 truncate">{product.judulMarketplace}</h3>
                <p className="text-gray-600 text-sm mt-1 truncate">{product.deskripsiMarketplace}</p>
                <div className="text-blue-600 group-hover:text-blue-800 text-sm font-semibold mt-2 inline-block">
                    Selengkapnya
                </div>
            </div>
        </div>
    </Link>
);


// --- MAIN PAGE COMPONENT ---
export default function MarketplacePage({ products = [] }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredProducts = products;

    return (
        <>
            <Head title="Marketplace" />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="relative mb-6">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3"><SearchIcon /></span>
                        <input type="search" placeholder="Search a product" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
                        {categories.map(category => (
                            <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${ activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200' }`}>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.idMarketplace} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Link href="/marketplace/create" className="fixed bottom-8 right-8 bg-[#0099DC] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform duration-200 hover:scale-110">
                <PlusIcon />
            </Link>
        </>
    );
}

MarketplacePage.layout = page => <MainLayout children={page} />;
