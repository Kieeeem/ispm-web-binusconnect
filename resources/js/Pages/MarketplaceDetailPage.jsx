import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout'; // Pastikan path ini benar
import { Head, Link, useForm } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const ChevronLeftIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> );
const ChevronRightIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg> );
const LinkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> );
const ClockIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> );

// --- DUMMY DATA ---
// Nanti, data ini akan datang dari controller sebagai props
const productDetail = {
    id: 1,
    title: 'PO Kuliner Sipil 11 -18 Maret 2025',
    images: [
        'https://placehold.co/600x600/F9A826/333333?text=Produk+1',
        'https://placehold.co/600x600/3B82F6/FFFFFF?text=Produk+2',
        'https://placehold.co/600x600/1F2937/FFFFFF?text=Produk+3',
        'https://placehold.co/600x600/4F46E5/FFFFFF?text=Produk+4',
    ],
    status: 'Ongoing',
    duration: '11-18 Maret 2025',
    location: 'Binus Syahdan',
    seller: {
        name: 'HIMTES',
        description: 'Himpunan Mahasiswa Teknik Sipil',
        logo: 'https://placehold.co/40x40/cccccc/333333?text=H',
    },
    description: 'Buat kalian yang lagi cari cemilan enak, yuk order sekarang! ✨ Soal rasa? Nggak perlu diragukan lagi! Semua makanan dibuat dengan bahan berkualitas, diolah dengan penuh cinta, dan pastinya bikin nagih di setiap gigitan. Cocok banget buat ngemil santai, teman belajar, atau sekadar menikmati waktu luang. Dijamin sekali coba, pasti pengen lagi! 🔥',
    menu: [
        { name: 'Dimsum', price: '10K/5pcs' },
        { name: 'Pastel', price: '5K' },
        { name: 'Pudding', price: '5K' },
        { name: 'Semangka Susu Evaporasi', price: '10K' },
        { name: 'Truffle Choco', price: '12K' },
        { name: 'Es Cincau', price: '15K' },
    ],
    orderLink: 'http://bit.ly/3FLU40s',
    closeOrder: 'Sabtu, 18 Maret 2025 | Pukul 18.00 WIB',
    contact: {
        name: 'Haura Nayla Clarinta',
        wa: '081288884615',
    },
    discussions: [
        {
            id: 1,
            questioner: { name: 'Daniel Roberts', details: 'Information Systems | B26 | Kemanggisan Campus', avatar: 'https://i.pravatar.cc/150?u=daniel' },
            question: 'Where can I buy for this food?',
            answer: {
                sellerName: 'HIMTES',
                sellerLogo: 'https://placehold.co/40x40/cccccc/333333?text=H',
                text: 'We can meet at BINUS Kemanggisan campus area or any nearby public place that\'s convenient for both of us.',
            },
        },
    ],
};


// --- UI COMPONENTS ---

const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const nextSlide = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
                <img src={images[currentIndex]} alt="Product Image" className="w-full h-96 object-cover" />
                <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                    <ChevronLeftIcon />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                    <ChevronRightIcon />
                </button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-full h-20 object-cover rounded-md cursor-pointer ${currentIndex === index ? 'ring-2 ring-blue-500' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

const DiscussionSection = ({ discussions }) => (
    <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion</h3>
        {/* Question Form */}
        <div className="flex items-start space-x-3">
            <img src="https://i.pravatar.cc/150?u=currentUser" alt="Your Avatar" className="w-10 h-10 rounded-full" />
            <div className="flex-1 bg-white p-3 rounded-lg border">
                <textarea placeholder="Reply a question..." rows="2" className="w-full border-none focus:ring-0 p-0"></textarea>
                <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <div className="flex space-x-2 text-gray-500">
                        {/* Icons for formatting */}
                    </div>
                    <button className="bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-orange-600">Send</button>
                </div>
            </div>
        </div>
        {/* Discussion List */}
        <div className="space-y-6 mt-6">
            {discussions.map(item => (
                <div key={item.id} className="flex items-start space-x-3">
                    <img src={item.questioner.avatar} alt={item.questioner.name} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                        <p className="font-semibold text-gray-800">{item.questioner.name}</p>
                        <p className="text-sm text-gray-500 mb-1">{item.questioner.details}</p>
                        <p className="text-gray-900">{item.question}</p>
                        {/* Answer */}
                        <div className="mt-3 flex items-start space-x-3 pl-4 border-l-2 border-gray-200">
                            <img src={item.answer.sellerLogo} alt={item.answer.sellerName} className="w-10 h-10 rounded-full" />
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{item.answer.sellerName}</p>
                                <p className="text-gray-700">{item.answer.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// --- MAIN PAGE COMPONENT ---
export default function MarketplaceDetailPage() {
    // Nanti, 'productDetail' akan datang dari props
    const { title, images, status, duration, location, seller, description, menu, orderLink, closeOrder, contact, discussions } = productDetail;

    return (
        <>
            <Head title={title} />
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href={route('marketplace')} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4">
                        <BackArrowIcon />
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                            <ImageGallery images={images} />
                            <DiscussionSection discussions={discussions} />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                            <div className="bg-white p-4 rounded-lg border text-sm">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Status</span>
                                    <span className="font-semibold text-green-600">{status}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-semibold text-gray-800">{duration}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-semibold text-gray-800">{location}</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500 w-24">Sold By</span>
                                    <div className="flex items-center">
                                        <img src={seller.logo} alt={seller.name} className="w-8 h-8 rounded-full mr-2" />
                                        <span className="font-semibold text-gray-800">{seller.name}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{description}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Berikut menu makanannya :</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {menu.map(item => (
                                        <li key={item.name}>{item.name} | {item.price}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2 text-sm">
                                <p className="text-gray-800"><LinkIcon /> <span className="font-semibold">Link Pemesanan :</span> <a href={orderLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{orderLink}</a></p>
                                <p className="text-gray-800"><ClockIcon /> <span className="font-semibold">Close Order :</span> {closeOrder}</p>
                                <p className="text-gray-800"><PhoneIcon /> <span className="font-semibold">Contact Person (WA) :</span> {contact.name} - {contact.wa}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

MarketplaceDetailPage.layout = page => <MainLayout children={page} />;
