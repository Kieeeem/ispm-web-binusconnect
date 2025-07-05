<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Baris ini memberitahu Laravel untuk menjalankan seeder
        // yang sudah kita siapkan khusus untuk tabel User.
        $this->call([
            UserSeeder::class,
        ]);
    }
}