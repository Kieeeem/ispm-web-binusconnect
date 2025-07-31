<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Organization; // Pastikan model ini ada
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Menampilkan halaman utama daftar organisasi.
     */
    public function index()
{
    // 1. Ambil semua data organisasi
         // 1. Ambil semua data organisasi (ini tidak berubah)
        $organizations = Organization::latest()->get();

        // 2. Definisikan SEMUA tipe organisasi yang mungkin ada secara manual
        $categories = [
            'Himpunan Mahasiswa Jurusan',
            'Penalaran',
            'Kerohanian dan Kemasyarakatan',
            'Olahraga dan Beladiri',
            // Anda bisa tambahkan tipe lain di sini jika ada
        ];

        // 3. Kirim data organisasi dan daftar kategori statis ke frontend
        return Inertia::render('OrganizationPage', [
            'organizations' => $organizations,
            'categories' => $categories,
        ]);

        
}

    /**
     * Menampilkan halaman detail untuk satu organisasi.
     */
    public function show(Organization $organization)
{
    $organization->load(['events' => function ($query) {
        $query->latest()->first();
    }]);

    // Pastikan nama komponennya 'OrganizationDetailPage'
    return Inertia::render('OrganizationDetailPage', [
        'organization' => $organization
    ]);
}
}
