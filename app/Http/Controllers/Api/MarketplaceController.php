<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Marketplace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class MarketplaceController extends Controller
{
    /**
     * Menampilkan semua item marketplace.
     */
    public function index()
    {
        $items = Marketplace::with('user')->latest()->get();
        return response()->json(['success' => true, 'message' => 'Daftar semua item di marketplace', 'data' => $items], 200);
    }

    /**
     * Menyimpan item marketplace baru.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'judulMarketplace'      => 'required|string|max:50',
            'deskripsiMarketplace'  => 'required|string',
            'lokasiMarketplace'     => 'required|string|max:50',
            'jadwalStartMarketplace' => 'required|date', // DIUBAH
            'jadwalEndMarketplace'   => 'required', // DIUBAH
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $item = Marketplace::create([
            'idMarketplace'         => Str::random(10),
            'judulMarketplace'      => $request->judulMarketplace,
            'deskripsiMarketplace'  => $request->deskripsiMarketplace,
            'lokasiMarketplace'     => $request->lokasiMarketplace,
            'jadwalStartMarketplace' => $request->jadwalStartMarketplace, // DIUBAH
            'jadwalEndMarketplace'   => $request->jadwalEndMarketplace, // DIUBAH
            'idUser'                => auth()->id(),
            'statusMarketplace'     => 'Tersedia',
        ]);

        return response()->json(['success' => true, 'message' => 'Item berhasil ditambahkan ke marketplace', 'data' => $item], 201);
    }

    /**
     * Menampilkan satu item marketplace spesifik.
     */
    public function show(Marketplace $marketplace)
    {
        $marketplace->load('user');
        return response()->json(['success' => true, 'message' => 'Detail item marketplace', 'data' => $marketplace], 200);
    }

    /**
     * Mengupdate item marketplace.
     */
    public function update(Request $request, Marketplace $marketplace)
    {
        if (auth()->id() !== $marketplace->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $validator = Validator::make($request->all(), [
            'judulMarketplace'      => 'sometimes|required|string|max:50',
            'deskripsiMarketplace'  => 'sometimes|required|string',
            'lokasiMarketplace'     => 'sometimes|required|string|max:50',
            'jadwalStartMarketplace' => 'sometimes|required|date', // DIUBAH
            'jadwalEndMarketplace'   => 'sometimes|required', // DIUBAH
            'statusMarketplace'     => 'sometimes|required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $marketplace->update($request->all());
        return response()->json(['success' => true, 'message' => 'Item berhasil diupdate', 'data' => $marketplace], 200);
    }

    /**
     * Menghapus item marketplace.
     */
    public function destroy(Marketplace $marketplace)
    {
        if (auth()->id() !== $marketplace->idUser) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $marketplace->delete();
        return response()->json(['success' => true, 'message' => 'Item berhasil dihapus'], 200);
    }
}
