<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use App\Models\Organization;

class EventController extends Controller
{
    /**
     * Menampilkan halaman utama event dengan data asli.
     */
    public function index()
    {
        // Ambil semua event dari database, urutkan dari yang terbaru
        $events = Event::latest()->get();
        
        // dd($events); // <-- BARIS INI SUDAH DIHAPUS

        return Inertia::render('EventsPage', [
            'events' => $events
        ]);
    }

    /**
     * Menampilkan form untuk membuat event baru.
     */
    public function create()
    {
    
    $organizations = Organization::all();

    // Kirim data organisasi ke komponen React
    return Inertia::render('AddEventPage', [
        'organizations' => $organizations,
    ]);
    }

    /**
     * Menyimpan event baru ke database.
     */
    public function store(Request $request)
    {
        $request->validate([
            'fotoEvent' => ['required', 'image', 'max:10240'],
            'judulEvent' => ['required', 'string', 'max:255'],
            'idEventOpportunityCategory' => ['required'],
            'deskripsiEvent' => ['required', 'string'],
            'jadwalStartEvent' => ['required', 'date'],
            'jadwalEndEvent' => ['required', 'date', 'after_or_equal:jadwalStartEvent'],
            'linkRegistrasi' => ['required', 'url'],
        ]);

        $fotoPath = $request->file('fotoEvent')->store('event_photos', 'public');

        Event::create([
            'idEventOpportunity' => Str::random(10),
            'idOrganisasi' => null, // Ganti dengan logika organisasi Anda jika ada
            'judulEvent' => $request->judulEvent,
            'idEventOpportunityCategory' => $request->idEventOpportunityCategory,
            'deskripsiEvent' => $request->deskripsiEvent,
            'jadwalStartEvent' => $request->jadwalStartEvent,
            'jadwalEndEvent' => $request->jadwalEndEvent,
            'linkRegistrasi' => $request->linkRegistrasi,
            'fotoEvent' => $fotoPath,
            'statusEvent' => 'Published',
        ]);

        return redirect()->route('events')->with('success', 'Event berhasil ditambahkan!');
    }
    
    /**
     * Menampilkan halaman detail untuk satu event.
     */
    public function show(Event $event)
{
    // Memuat data relasi 'organisasi' ke dalam objek $event
    // yang sudah ditemukan secara otomatis oleh Laravel.
    $event->load('organization');

    // Langsung kirim objek $event yang sudah lengkap dengan data organisasinya.
    return Inertia::render('EventDetailPage', [
        'eventDetail' => $event
    ]);
}

}
