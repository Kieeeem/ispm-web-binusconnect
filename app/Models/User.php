<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Menyesuaikan dengan struktur tabel dari ERD
     */
    protected $table = 'User'; // Nama tabel sesuai ERD
    protected $primaryKey = 'idUser'; // Primary Key sesuai ERD
    public $incrementing = false; // Karena idUser bukan auto-increment
    protected $keyType = 'string'; // Karena idUser adalah char/string

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'idUser',
        'idUserType',
        'namaUser',
        'emailUser',
        'passwordUser',
        'fotoUser',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'passwordUser',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'passwordUser' => 'hashed', // Otomatis hash saat di-set
    ];

    /**
     * Override untuk mendapatkan nama kolom email yang benar
     */
    public function getEmailForVerification()
    {
        return $this->emailUser;
    }
    
    /**
     * Override untuk mendapatkan nama kolom password yang benar
     */
    public function getAuthPassword()
    {
        return $this->passwordUser;
    }
}
