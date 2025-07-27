import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

// --- ICONS ---
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );
const ChevronLeftIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> );
const ChevronRightIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg> );
const LinkIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> );
const ClockIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> );

// --- UI COMPONENTS ---

const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageList = images && images.length > 0 ? images : ['https://placehold.co/600x600/cccccc/333333?text=No+Image'];

    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? imageList.length - 1 : currentIndex - 1);
    const nextSlide = () => setCurrentIndex(currentIndex === imageList.length - 1 ? 0 : currentIndex + 1);

    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
                <img src={imageList[currentIndex]} alt="Product" className="w-full h-96 object-cover" />
                <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"><ChevronLeftIcon /></button>
                <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"><ChevronRightIcon /></button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
                {imageList.map((img, index) => (
                    <img key={index} src={img} alt={`Thumbnail ${index + 1}`} onClick={() => setCurrentIndex(index)} className={`w-full h-20 object-cover rounded-md cursor-pointer ${currentIndex === index ? 'ring-2 ring-blue-500' : ''}`} />
                ))}
            </div>
        </div>
    );
};

const DiscussionSection = ({ discussions = [], productId }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('marketplace.discussion.store', productId), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    
    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion</h3>
            <form onSubmit={submit} className="flex items-start space-x-3">
                <img src="https://i.pravatar.cc/150?u=currentUser" alt="Your Avatar" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                    <textarea
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                        placeholder="Ada pertanyaan tentang produk ini?"
                        rows="2"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                    {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
                    <div className="flex justify-end items-center mt-2">
                        <button type="submit" disabled={processing} className="bg-orange-500 text-white font-semibold px-4 py-1.5 rounded-lg hover:bg-orange-600 disabled:opacity-50">
                            {processing ? 'Mengirim...' : 'Send'}
                        </button>
                    </div>
                </div>
            </form>
            <div className="space-y-6 mt-6">
                {discussions.length > 0 ? (
                    discussions.map(item => (
                        <div key={item.idDiscussion} className="flex items-start space-x-3">
                            <img src={item.user?.fotoUser || `https://i.pravatar.cc/150?u=${item.idUser}`} alt={item.user?.namaUser} className="w-10 h-10 rounded-full" />
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{item.user?.namaUser || 'User'}</p>
                                <p className="text-sm text-gray-500 mb-1">{new Date(item.created_at).toLocaleString()}</p>
                                <p className="text-gray-900 whitespace-pre-wrap">{item.isiDiscussion}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-4">Belum ada diskusi untuk produk ini.</p>
                )}
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
export default function MarketplaceDetailPage({ product }) {
    if (!product) {
        return <div>Loading product details...</div>;
    }

    const { idMarketplace, judulMarketplace, fotoMarketplace, statusMarketplace, jadwalStartMarketplace, jadwalEndMarketplace, lokasiMarketplace, user, deskripsiMarketplace, discussions } = product;
    
    // --- PERBAIKAN DI SINI ---
    // Membuat URL gambar dari 'fotoMarketplace', bukan 'foto_url'
    const images = fotoMarketplace ? [`/storage/${fotoMarketplace}`] : [];

    return (
        <>
            <Head title={judulMarketplace} />
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href={route('marketplace')} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4">
                        <div className="bg-white rounded-full p-2 shadow hover:bg-gray-200 transition">
                            <BackArrowIcon />
                        </div>
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                            <ImageGallery images={images} />
                            <DiscussionSection discussions={discussions} productId={idMarketplace} />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-900">{judulMarketplace}</h1>
                            
                            <div className="space-y-4 text-base mt-4">
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-32">Status</span>
                                    <span className="font-semibold text-green-600">{statusMarketplace}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-32">Duration</span>
                                    <span className="font-semibold text-gray-800">{new Date(jadwalStartMarketplace).toLocaleDateString()} - {new Date(jadwalEndMarketplace).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-32">Location</span>
                                    <span className="font-semibold text-gray-800">{lokasiMarketplace}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-32">Sold By</span>
                                    <div className="flex items-center">
                                        <img src={user?.fotoUser || 'https://i.pravatar.cc/150'} alt={user?.namaUser} className="w-10 h-10 rounded-full mr-3" />
                                        <div>
                                            <p className="font-semibold text-gray-800">{user?.namaUser || 'Unknown Seller'}</p>
                                            <p className="text-sm text-gray-500">{user?.organisasi || 'Personal'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <hr/>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{deskripsiMarketplace}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

MarketplaceDetailPage.layout = page => <MainLayout children={page} />;
