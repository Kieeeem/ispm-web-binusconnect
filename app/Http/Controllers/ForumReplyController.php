<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use App\Models\ReplyForum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ForumReplyController extends Controller
{
    /**
     * Menampilkan semua balasan untuk sebuah forum spesifik.
     */
    public function index(Forum $forum)
    {
        $replies = $forum->replies()->with('user')->latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Daftar balasan untuk forum ' . $forum->judulForum,
            'data' => $replies
        ], 200);
    }

    /**
     * Menyimpan balasan baru untuk sebuah forum spesifik.
     */
    public function store(Request $request, Forum $forum)
    {
        // DIUBAH: Validasi sekarang mencari 'isiReplyForum'
        $validator = Validator::make($request->all(), [
            'isiReplyForum' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $reply = $forum->replies()->create([
            'idReplyForum' => Str::random(10),
            // DIUBAH: Menggunakan key dan kolom yang benar
            'isiReplyForum' => $request->isiReplyForum,
            'idUser'       => auth()->id(),
        ]);

        $reply->load('user');

        return response()->json([
            'success' => true,
            'message' => 'Balasan berhasil dikirim',
            'data'    => $reply
        ], 201);
    }

    /**
     * Mengupdate sebuah balasan.
     */
    public function update(Request $request, ReplyForum $reply)
    {
        if (auth()->id() !== $reply->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // DIUBAH: Validasi sekarang mencari 'isiReplyForum'
        $validator = Validator::make($request->all(), [
            'isiReplyForum' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // DIUBAH: Mengupdate kolom yang benar
        $reply->update($request->only('isiReplyForum'));

        return response()->json([
            'success' => true,
            'message' => 'Balasan berhasil diupdate',
            'data'    => $reply
        ], 200);
    }

    /**
     * Menghapus sebuah balasan.
     */
    public function destroy(ReplyForum $reply)
    {
        if (auth()->id() !== $reply->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $reply->delete();

        return response()->json([
            'success' => true,
            'message' => 'Balasan berhasil dihapus',
        ], 200);
    }
}
