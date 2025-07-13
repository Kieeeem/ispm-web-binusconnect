import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

// --- ICONS ---
const ThumbUpIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H9V11l3.354-3.354a2 2 0 012.828 0zM5 11v10H4a1 1 0 01-1-1v-8a1 1 0 011-1h1z" /></svg> );
const ThumbDownIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.738 3H15v10l-3.354 3.354a2 2 0 01-2.828 0zM19 13V3h1a1 1 0 011 1v8a1 1 0 01-1 1h-1z" /></svg> );
const BackArrowIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> );

// --- DUMMY DATA (Hanya untuk sidebar) ---
const trendingTopics = [ 'Elevate Binus x Microsoft', 'Mastering The ART of Digital Banking', 'Open Recruitment BINUS Theatre Club (SMG)', 'Mid-Terms Week', '2025 RWTH Summer School', 'FYP, Discussions' ];

// --- UI COMPONENTS ---

// Komponen ini sekarang akan menerima 'forum' sebagai prop
const ForumPostCard = ({ forum }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <div className="flex items-center mb-4">
      <img src={forum.user?.fotoUser || `https://i.pravatar.cc/150?u=${forum.idUser}`} alt={forum.user?.namaUser} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold text-gray-800">{forum.user?.namaUser || 'User Dihapus'}</p>
        <p className="text-sm text-gray-500">{new Date(forum.created_at).toLocaleString()}</p>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{forum.judulForum}</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{forum.isiForum}</p>
    </div>
    <div className="flex items-center mt-4 space-x-4 text-gray-500">
      <button className="hover:text-blue-600 flex items-center"><ThumbUpIcon /></button>
      <button className="hover:text-red-600 flex items-center"><ThumbDownIcon /></button>
    </div>
  </div>
);

const TrendingSidebar = () => ( <div className="bg-white p-6 rounded-lg border border-gray-200"> <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Today at BINUS!</h3> <ol className="list-decimal list-inside space-y-3"> {trendingTopics.map((topic, index) => ( <li key={index} className="text-gray-700 hover:text-blue-600 cursor-pointer">{topic}</li> ))} </ol> </div> );

const CommentInput = () => (
    <div className="flex items-center space-x-3 mt-4">
        <img src="https://i.pravatar.cc/150?u=currentUser" alt="Your avatar" className="w-10 h-10 rounded-full" />
        <input type="text" placeholder="Tulis balasan..." className="w-full bg-white border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
);

// Komponen ini akan menerima 'reply' sebagai prop
const CommentCard = ({ reply }) => (
    <div className="flex items-start space-x-3 pt-6">
        <img src={reply.user?.fotoUser || `https://i.pravatar.cc/150?u=${reply.idUser}`} alt={reply.user?.namaUser} className="w-10 h-10 rounded-full mt-1" />
        <div className="flex-1">
            <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-800">{reply.user?.namaUser || 'User Dihapus'}</p>
                <p className="text-xs text-gray-500 mb-2">{new Date(reply.created_at).toLocaleString()}</p>
                <p className="text-gray-700">{reply.isiReply}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2 pl-4">
                <button className="hover:underline">Like</button>
                <span className="text-gray-300">•</span>
                <button className="hover:underline font-semibold">Reply</button>
            </div>
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
// Terima 'forumDetail' sebagai props dari controller
const ForumDetailPage = ({ forumDetail }) => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        <div className="mb-6">
            <Link href={route('forum')} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                <BackArrowIcon />
                Kembali ke Forum
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Gunakan data 'forumDetail' dari props */}
            <ForumPostCard forum={forumDetail} />

            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Balasan ({forumDetail.replies.length})</h3>
                <CommentInput />
                <div className="mt-4 divide-y divide-gray-200">
                    {/* Gunakan data balasan dari 'forumDetail.replies' */}
                    {forumDetail.replies.map(reply => (
                        <CommentCard key={reply.idReply} reply={reply} />
                    ))}
                </div>
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

ForumDetailPage.layout = page => <MainLayout children={page} title={"Detail Postingan Forum"} />;
export default ForumDetailPage;
