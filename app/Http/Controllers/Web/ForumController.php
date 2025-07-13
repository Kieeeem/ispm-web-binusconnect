<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use App\Models\ForumCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Models\User;

class ForumController extends Controller
{
    public function index()
    {
        $forums = Forum::with('user', 'category')->latest()->get();
        $categories = ForumCategory::all();

        return Inertia::render('ForumPage', [
            'forums' => $forums,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        // --- PERUBAHAN DI SINI ---
        // Sesuaikan aturan validasi dengan nama kolom yang benar (d kecil).
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

    public function show(Forum $forum)
    {
        $forum->load('user', 'category', 'replies.user');

        return Inertia::render('ForumDetailPage', [
            'forumDetail' => $forum
        ]);
    }
}
