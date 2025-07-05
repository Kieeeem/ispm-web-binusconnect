<?php

    namespace Database\Seeders;

    use Illuminate\Database\Console\Seeds\WithoutModelEvents;
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Str;
    use App\Models\User;

    class UserSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         */
        public function run(): void
        {
            // Membuat satu user dummy untuk testing
            User::create([
                'idUser' => Str::random(10), // Membuat ID random 10 karakter
                'idUserType' => 1, // Misal 1 untuk user biasa
                'namaUser' => 'Test User',
                'emailUser' => 'test@example.com',
                'passwordUser' => Hash::make('password'), // Passwordnya adalah 'password'
            ]);

            // Kamu bisa tambahkan user lain jika perlu
            User::create([
                'idUser' => Str::random(10),
                'idUserType' => 2, // Misal 2 untuk admin
                'namaUser' => 'Admin User',
                'emailUser' => 'admin@example.com',
                'passwordUser' => Hash::make('admin123'), // Passwordnya adalah 'admin123'
            ]);
        }
    }
    