<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Marketplace;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class MarketplaceController extends Controller
{
    public function index()
    {
        $products = Marketplace::latest()->get();
        return Inertia::render('MarketplacePage', [
            'products' => $products
        ]);
    }

    public function show(Marketplace $product)
    {
        $product->load('discussions.user', 'user');
        return Inertia::render('MarketplaceDetailPage', [
            'product' => $product
        ]);
    }

    public function create()
    {
        return Inertia::render('AddProductPage');
    }

    public function store(Request $request)
    {
        $request->validate([
            'fotoMarketplace' => ['required', 'image', 'max:10240'],
            'judulMarketplace' => ['required', 'string', 'max:255'],
            'deskripsiMarketplace' => ['required', 'string'],
            'lokasiMarketplace' => ['required', 'string'],
            'jadwalStartMarketplace' => ['required', 'date'],
            'jadwalEndMarketplace' => ['required', 'date', 'after_or_equal:jadwalStartMarketplace'],
        ]);

        $userId = auth()->id() ?? User::first()->idUser;

        // Simpan file gambar ke storage dan dapatkan path-nya
        $fotoPath = $request->file('fotoMarketplace')->store('marketplace_photos', 'public');

        Marketplace::create([
            'idMarketplace' => Str::random(10),
            'idUser' => $userId,
            'judulMarketplace' => $request->judulMarketplace,
            'deskripsiMarketplace' => $request->deskripsiMarketplace,
            'lokasiMarketplace' => $request->lokasiMarketplace,
            'jadwalStartMarketplace' => $request->jadwalStartMarketplace . ' 00:00:00',
            'jadwalEndMarketplace' => $request->jadwalEndMarketplace . ' 00:00:00',
            'fotoMarketplace' => $fotoPath, // Simpan path gambar, bukan BLOB
            'statusMarketplace' => 'Tersedia',
        ]);

        return redirect()->route('marketplace')->with('success', 'Produk berhasil ditambahkan!');
    }

    public function storeDiscussion(Request $request, Marketplace $product)
    {
        $request->validate(['content' => 'required|string']);
        $userId = auth()->id() ?? User::first()->idUser;
        $product->discussions()->create([
            'idDiscussion' => Str::random(10),
            'idUser' => $userId,
            'isiDiscussion' => $request->content,
        ]);
        return Redirect::back()->with('success', 'Pertanyaan berhasil dikirim!');
    }
}
