import React, { useState } from 'react'; // Import useState
import MainLayout from '../Layouts/MainLayout';
import { Link, useForm } from '@inertiajs/react';

// --- ICONS ---
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const ThumbUpIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H9V11l3.354-3.354a2 2 0 012.828 0zM5 11v10H4a1 1 0 01-1-1v-8a1 1 0 011-1h1z" /></svg> );
const ThumbDownIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.738 3H15v10l-3.354 3.354a2 2 0 01-2.828 0zM19 13V3h1a1 1 0 011 1v8a1 1 0 01-1 1h-1z" /></svg> );

// --- DUMMY DATA (Hanya untuk sidebar) ---
const trendingTopics = [ 'Elevate Binus x Microsoft', 'Mastering The ART of Digital Banking', 'Open Recruitment BINUS Theatre Club (SMG)', 'Mid-Terms Week', '2025 RWTH Summer School', 'FYP, Discussions' ];

// --- UI COMPONENTS ---

const CreatePost = ({ categories }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        judulForum: '',
        isiForum: '',
        idFormCategory: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('forum.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={submit} className="bg-white p-4 rounded-lg border border-gray-200 flex space-x-4 mb-6">
            <img src="https://i.pravatar.cc/150?u=currentUser" alt="Your avatar" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
                <input
                    type="text"
                    value={data.judulForum}
                    onChange={e => setData('judulForum', e.target.value)}
                    placeholder="Judul Forum..."
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                {errors.judulForum && <div className="text-red-500 text-sm mb-2">{errors.judulForum}</div>}

                <textarea
                    value={data.isiForum}
                    onChange={e => setData('isiForum', e.target.value)}
                    placeholder="Tuliskan isi pikiranmu..."
                    rows="3"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {errors.isiForum && <div className="text-red-500 text-sm mb-2">{errors.isiForum}</div>}
                
                <select
                    value={data.idFormCategory}
                    onChange={e => setData('idFormCategory', e.target.value)}
                    className="w-full mt-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Pilih Kategori</option>
                    {categories.map(category => (
                        <option key={category.idFormCategory} value={category.idFormCategory}>
                            {category.forumCategory}
                        </option>
                    ))}
                </select>
                {errors.idFormCategory && <div className="text-red-500 text-sm mt-1">{errors.idFormCategory}</div>}


                <div className="flex justify-end items-center mt-2">
                    <button type="submit" disabled={processing} className="bg-[#0099DC] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                        {processing ? 'Posting...' : 'Post'}
                    </button>
                </div>
            </div>
        </form>
    );
};

const ForumPostCard = ({ forum }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-shadow duration-200 cursor-pointer">
    <div className="flex items-center mb-4">
      <img src={forum.user?.fotoUser || `https://i.pravatar.cc/150?u=${forum.idUser}`} alt={forum.user?.namaUser} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold text-gray-800">{forum.user?.namaUser || 'User Dihapus'}</p>
        <p className="text-sm text-gray-500">{new Date(forum.created_at).toLocaleString()}</p>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{forum.judulForum}</h2>
      <p className="text-gray-700 leading-relaxed line-clamp-3">{forum.isiForum}</p>
    </div>
    <div className="flex items-center mt-4 space-x-4 text-gray-500">
      <button className="hover:text-blue-600"><ThumbUpIcon /></button>
      <button className="hover:text-red-600"><ThumbDownIcon /></button>
    </div>
  </div>
);

const TrendingSidebar = () => ( <div className="bg-white p-6 rounded-lg border border-gray-200"> <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Today at BINUS!</h3> <ol className="list-decimal list-inside space-y-3"> {trendingTopics.map((topic, index) => ( <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">{topic}</li> ))} </ol> </div> );

const ForumPage = ({ forums = [], categories = [] }) => {
    // State untuk menyimpan isi dari search bar
    const [searchTerm, setSearchTerm] = useState('');

    // Logika filter untuk pencarian
    const filteredForums = forums.filter(forum => 
        forum.judulForum.toLowerCase().includes(searchTerm.toLowerCase()) ||
        forum.isiForum.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"> <SearchIcon /> </span>
          <input 
            type="search" 
            placeholder="Search a topic" 
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Mengikat input dengan state
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CreatePost categories={categories} />
            <div className="space-y-6">
                {/* Menggunakan data yang sudah difilter */}
                {filteredForums.map(forum => (
                <Link key={forum.idForum} href={route('forum.show', forum.idForum)} className="block">
                    <ForumPostCard forum={forum} />
                </Link>
                ))}
            </div>
          </div>
          <aside className="space-y-6">
             <TrendingSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

ForumPage.layout = page => <MainLayout children={page} title={"Forum"} />;
export default ForumPage;
