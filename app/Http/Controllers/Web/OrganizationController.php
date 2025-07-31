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
    $organizations = Organization::all();


    // Baris ini mengirimkan data tersebut ke komponen React 'OrganizationPage'
    return Inertia::render('OrganizationPage', [
        'organizations' => $organizations
    ]);
}

    /**
     * Menampilkan halaman detail untuk satu organisasi.
     */
    public function show(Organization $organization)
    {
        // Nanti, kita bisa memuat data forum & event terkait di sini
        // $organization->load('forums', 'events'); 

        return Inertia::render('OrganizationDetailPage', [
            'orgDetail' => $organization
        ]);
    }
}
