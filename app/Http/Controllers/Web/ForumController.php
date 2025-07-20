<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use App\Models\ForumCategory;
use App\Models\User; // Pastikan model User di-import
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ForumController extends Controller
{
    /**
     * Menampilkan halaman utama forum dengan semua post.
     */
    public function index()
    {
        $forums = Forum::with('user', 'category')->latest()->get();
        $categories = ForumCategory::all();

        return Inertia::render('ForumPage', [
            'forums' => $forums,
            'categories' => $categories,
        ]);
    }

    /**
     * Menyimpan post forum baru.
     */
    public function store(Request $request)
    {
        $request->validate([
            'judulForum' => 'required|string|max:100',
            'isiForum' => 'required|string',
            'idFormCategory' => 'required|string|exists:ForumCategory,idFormCategory',
        ]);

        $userId = auth()->id();
        if (!$userId) {
            $defaultUser = User::first();
            $userId = $defaultUser ? $defaultUser->idUser : null;
        }

        if (!$userId) {
            return back()->withErrors(['user' => 'Tidak dapat membuat post. Tidak ada user default.']);
        }

        Forum::create([
            'idForum'        => Str::random(10),
            'idUser'         => $userId,
            'judulForum'     => $request->judulForum,
            'isiForum'       => $request->isiForum,
            'idFormCategory' => $request->idFormCategory,
            'statusForum'    => 'active',
        ]);

        return Redirect::route('forum')->with('success', 'Forum berhasil diposting!');
    }

    /**
     * Menampilkan halaman detail untuk satu post.
     */
    public function show(Forum $forum)
    {
        // Memuat relasi untuk ditampilkan di halaman detail
        $forum->load('user', 'category', 'replies.user');

        return Inertia::render('ForumDetailPage', [
            'forumDetail' => $forum
        ]);
    }

    /**
     * Menyimpan balasan baru untuk sebuah forum.
     */
    public function storeReply(Request $request, Forum $forum)
    {
        $request->validate([
            'isiReplyForum' => 'required|string',
        ]);

        $userId = auth()->id();
        if (!$userId) {
            $defaultUser = User::first();
            $userId = $defaultUser ? $defaultUser->idUser : null;
        }

        if (!$userId) {
            return back()->withErrors(['user' => 'Tidak dapat membalas. Tidak ada user default.']);
        }

        // Membuat balasan baru yang berelasi dengan forum ini
        $forum->replies()->create([
            'idReplyForum'  => Str::random(10),
            'isiReplyForum' => $request->isiReplyForum,
            'idUser'        => $userId,
        ]);

        // Redirect kembali ke halaman detail forum sebelumnya
        return Redirect::back()->with('success', 'Balasan berhasil dikirim!');
    }
}
