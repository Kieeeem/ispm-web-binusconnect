import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

// --- ICONS ---
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const ThumbUpIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H9V11l3.354-3.354a2 2 0 012.828 0zM5 11v10H4a1 1 0 01-1-1v-8a1 1 0 011-1h1z" /></svg> );
const ThumbDownIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.738 3H15v10l-3.354 3.354a2 2 0 01-2.828 0zM19 13V3h1a1 1 0 011 1v8a1 1 0 01-1 1h-1z" /></svg> );

// --- DUMMY DATA ---
const forumPosts = [
  { id: 1, author: 'Amelia Bernard', details: 'Information Systems | B26 | Kemanggisan Campus', avatar: 'https://i.pravatar.cc/150?u=amelia', title: 'How to stay focus during lecture?', content: 'Honestly, staying focused during lectures is tough sometimes... Everyone’s got their own way of staying focused, but these little things definitely make it easier for me!', },
  { id: 2, author: 'David Chen', details: 'Computer Science | B25 | Alam Sutera Campus', avatar: 'https://i.pravatar.cc/150?u=david', title: 'Best place to find internship opportunities?', content: 'Hey everyone, I\'m starting to look for internships for the next semester. Besides the university portal, are there any other good websites or platforms you would recommend?', },
];
const trendingTopics = [ 'Elevate Binus x Microsoft', 'Mastering The ART of Digital Banking', 'Open Recruitment BINUS Theatre Club (SMG)', 'Mid-Terms Week', '2025 RWTH Summer School', 'FYP, Discussions' ];

// --- UI COMPONENTS ---

const CreatePost = () => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex space-x-4 mb-6">
        <img src="https://i.pravatar.cc/150?u=currentUser" alt="Your avatar" className="w-12 h-12 rounded-full" />
        <div className="flex-1">
            <input
                type="text"
                // placeholder untuk judul post
                placeholder="Post title..."
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            />
            <textarea
                // placeholder untuk isi post
                placeholder="Write your thoughts here..."
                rows="3"
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-4">
                    <button className="font-bold text-gray-600 hover:text-gray-900">B</button>
                    <button className="italic text-gray-600 hover:text-gray-900">I</button>
                    <button className="underline text-gray-600 hover:text-gray-900">U</button>
                </div>
                <button className="bg-[#0099DC] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Post
                </button>
            </div>
        </div>
    </div>
);

const ForumPostCard = ({ post }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-shadow duration-200 cursor-pointer">
    <div className="flex items-center mb-4">
      <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold text-gray-800">{post.author}</p>
        <p className="text-sm text-gray-500">{post.details}</p>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed line-clamp-3">{post.content}</p>
    </div>
    <div className="flex items-center mt-4 space-x-4 text-gray-500">
      <button className="hover:text-blue-600"><ThumbUpIcon /></button>
      <button className="hover:text-red-600"><ThumbDownIcon /></button>
    </div>
  </div>
);

const TrendingSidebar = () => ( <div className="bg-white p-6 rounded-lg border border-gray-200"> <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Today at BINUS!</h3> <ol className="list-decimal list-inside space-y-3"> {trendingTopics.map((topic, index) => ( <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">{topic}</li> ))} </ol> </div> );

// --- MAIN PAGE COMPONENT ---
const ForumPage = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3"> <SearchIcon /> </span>
          <input type="search" placeholder="Search a topic" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CreatePost />

            <div className="space-y-6">
                {forumPosts.map(post => (
                <Link key={post.id} href={route('forum.show', post.id)} className="block">
                    <ForumPostCard post={post} />
                </Link>
                ))}
            </div>
          </div>
          <aside className="space-y-6">
             <TrendingSidebar />
          </aside>
        </div>
      </div>
      <button className="fixed bottom-20 right-8 bg-[#0099DC] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /> </svg>
      </button>
    </div>
  );
};

ForumPage.layout = page => <MainLayout children={page} title={"Forum"} />;
export default ForumPage;
