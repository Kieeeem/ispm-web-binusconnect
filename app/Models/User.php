<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'user'; // Nama tabel lo (bukan 'users')
    protected $primaryKey = 'idUser'; // PK lo pake idUser
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'idUser',
        'idUserType',
        'namaUser',
        'emailUser',
        'nim',
        'passwordUser',
        'fotoUser',
    ];

    protected $hidden = [
        'passwordUser',
        'remember_token',
    ];

    // Tunjukkan ke Laravel kolom password yang harus dicek
    public function getAuthPassword()
    {
        return $this->passwordUser;
    }
}

