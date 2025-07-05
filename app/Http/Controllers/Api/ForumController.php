<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Forum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ForumController extends Controller
{
    // ... (fungsi index, show, destroy tidak berubah) ...
    public function index()
    {
        $forums = Forum::with('user', 'category')->latest()->get();
        return response()->json(['success' => true, 'message' => 'Daftar semua post forum', 'data' => $forums], 200);
    }

    public function store(Request $request)
    {
        // KITA SAMAKAN SEMUANYA DENGAN NAMA DI DATABASE
        $validator = Validator::make($request->all(), [
            'judulForum'   => 'required|string|max:100',
            'isiForum'     => 'required|string',
            // Validasi: cari key 'IdFormCategory' di request,
            // dan cek nilainya di tabel ForumCategory, kolom IdFormCategory
            'IdFormCategory' => 'required|string|exists:ForumCategory,IdFormCategory', 
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $forum = Forum::create([
            'idForum'        => Str::random(10),
            'judulForum'     => $request->judulForum,
            'isiForum'       => $request->isiForum,
            // DIUBAH: Mengisi kolom 'idFormCategory' di tabel Forum
            // dengan nilai dari 'IdFormCategory' yang dikirim dari Postman.
            'idFormCategory' => $request->IdFormCategory,
            'idUser'         => auth()->id(),
            'statusForum'    => 'active',
        ]);

        if ($forum) {
            return response()->json(['success' => true, 'message' => 'Forum berhasil dibuat', 'data' => $forum], 201);
        }
        return response()->json(['success' => false, 'message' => 'Gagal membuat forum'], 409);
    }
    
    public function show(string $id)
    {
        $forum = Forum::with('user', 'category')->find($id);
        if ($forum) {
            return response()->json(['success' => true, 'message' => 'Detail Forum', 'data' => $forum], 200);
        }
        return response()->json(['success' => false, 'message' => 'Forum tidak ditemukan'], 404);
    }

    public function update(Request $request, string $id)
    {
        $forum = Forum::find($id);
        if (!$forum) {
            return response()->json(['message' => 'Forum tidak ditemukan'], 404);
        }

        $validator = Validator::make($request->all(), [
            'judulForum'   => 'sometimes|required|string|max:100',
            'isiForum'     => 'sometimes|required|string',
            'IdFormCategory' => 'sometimes|required|string|exists:ForumCategory,IdFormCategory',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        $updateData = $request->only(['judulForum', 'isiForum']);
        if ($request->has('IdFormCategory')) {
            // DIUBAH: Mengupdate kolom 'idFormCategory'
            $updateData['idFormCategory'] = $request->IdFormCategory;
        }

        $forum->update($updateData);
        return response()->json(['success' => true, 'message' => 'Forum berhasil diupdate', 'data' => $forum], 200);
    }
    
    public function destroy(string $id)
    {
        $forum = Forum::find($id);
        if (!$forum) {
            return response()->json(['message' => 'Forum tidak ditemukan'], 404);
        }
        $forum->delete();
        return response()->json(['success' => true, 'message' => 'Forum berhasil dihapus'], 200);
    }
}
