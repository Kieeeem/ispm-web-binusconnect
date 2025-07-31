import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

// --- ICONS ---
const ThumbUpIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0   0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H9V11l3.354-3.354a2 2 0 012.828 0zM5 11v10H4a1 1 0 01-1-1v-8a1 1 0 011-1h1z" /></svg> );
const ThumbDownIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.738 3H15v10l-3.354 3.354a2 2 0 01-2.828 0zM19 13V3h1a1 1 0 011 1v8a1 1 0 01-1 1h-1z" /></svg> );

// --- DUMMY DATA ---
// Nanti, data ini akan datang dari controller sebagai props
const orgDetail = {
    id: 1,
    name: 'Bina Nusantara Computer Club (BNCC)',
    description: 'Established in 1989, Bina Nusantara Computer Club (BNCC) is the oldest computer-based organization at BINUS University. We are a close-knit family of exceptional individuals who are passionately into technology and a commitment to professionalism.\n\nSince our establishment for 35 years, BNCC has grown and evolved. Throughout our journey, we have laid a solid foundation of a commitment to continuous learning into technological innovation, development of vital business, and organizational skills.',
    bannerUrl: 'https://placehold.co/1200x400/1F2937/FFFFFF?text=BNCC+Banner',
    logoUrl: 'https://placehold.co/150x150/FFFFFF/000000?text=BNCC',
    forums: [
        { id: 1, title: 'How to stay focus during lecture?', content: 'Honestly, staying focused during lectures is tough sometimes, especially with everything going on around you. One thing that helps me is putting my phone on silent and keeping it out of sight so I’m not tempted to scroll through social media...' },
        { id: 2, title: 'How to stay focus during lecture?', content: 'Taking notes in my own words instead of just copying everything the lecturer says also keeps me engaged. If I’m really struggling to concentrate, I’ll try to do some quick breathing exercises before class to clear my head...' },
    ],
    event: {
        id: 1,
        title: 'TechnoScape 2025 "Future Forward: Exploring the Digital Horizon"',
        tag: 'Upcoming Event',
        imageUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=TechnoScape',
    }
};

// --- UI COMPONENTS ---

const ForumPostCard = ({ post }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold text-gray-800">{post.title}</h4>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{post.content}</p>
        <div className="flex items-center mt-3 space-x-4 text-gray-400">
            <button className="hover:text-blue-600"><ThumbUpIcon /></button>
            <button className="hover:text-red-600"><ThumbDownIcon /></button>
        </div>
    </div>
);

const EventCard = ({ event }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                {event.tag}
            </span>
            <h3 className="text-md font-semibold text-gray-900 mt-1">{event.title}</h3>
            <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm font-medium mt-2 inline-block">
                Selengkapnya
            </Link>
        </div>
    </div>
);


// --- MAIN PAGE COMPONENT ---
export default function OrganizationDetailPage() {
    // Nanti, 'orgDetail' akan datang dari props
    const { name, description, bannerUrl, logoUrl, forums, event } = orgDetail;

    return (
        <>
            <Head title={name} />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    {/* Banner and Logo */}
                    <div className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <img src={bannerUrl} alt={`${name} Banner`} className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-md">
                            <img src={logoUrl} alt={`${name} Logo`} className="w-24 h-24 object-contain" />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mt-[-40px] relative z-10 mx-4">
                        {/* Description */}
                        <div className="pt-20">
                            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mt-4">{description}</p>
                        </div>

                        {/* Forum & Event Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t pt-6">
                            {/* Forum Section */}
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Forum</h2>
                                <div className="space-y-4">
                                    {forums.map(post => (
                                        <ForumPostCard key={post.id} post={post} />
                                    ))}
                                </div>
                            </div>

                            {/* Event Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Event</h2>
                                <EventCard event={event} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

OrganizationDetailPage.layout = page => <MainLayout children={page} />;
