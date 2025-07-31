<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    // --> TAMBAHKAN BARIS INI <--
    // Baris ini memberitahu Laravel untuk menggunakan tabel 'organisasi'
    protected $table = 'organisasi';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    // --> TAMBAHKAN JUGA INI JIKA ID ANDA BUKAN 'id' <--
    // Karena nama kolom ID Anda adalah 'idOrganisasi'
    protected $primaryKey = 'idOrganisasi';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    // --> TAMBAHKAN INI KARENA ID ANDA BUKAN INTEGER AUTO-INCREMENT <--
    // Karena ID Anda adalah CHAR dan tidak auto-increment
    public $incrementing = false;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    // --> TAMBAHKAN INI UNTUK MENDEFINISIKAN TIPE ID ANDA <--
    protected $keyType = 'string';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // Sebaiknya definisikan juga kolom yang bisa diisi
    protected $fillable = [
        'idOrganisasi',
        'namaOrganisasi',
        'emailOrganisasi',
        'passwordOrganisasi',
        'fotoOrganisasi',
        'bioOrganisasi',
    ];
}
