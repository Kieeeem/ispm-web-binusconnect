<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    /**
     * Nama tabel yang terhubung dengan model ini.
     */
    protected $table = 'EventOpportunity';

    /**
     * Primary key dari tabel.
     */
    protected $primaryKey = 'idEventOpportunity';

    /**
     * Memberitahu Laravel bahwa primary key bukan auto-increment.
     */
    public $incrementing = false;

    /**
     * Tipe data dari primary key.
     */
    protected $keyType = 'string';

    /**
     * Kolom-kolom yang boleh diisi secara massal.
     */
    protected $fillable = [
        'idEventOpportunity',
        'idOrganisasi',
        // 'idUser', // <-- BARIS INI DIHAPUS
        'idEventOpportunityCategory',
        'judulEvent',
        'deskripsiEvent',
        'fotoEvent',
        'jadwalStartEvent',
        'jadwalEndEvent',
        'statusEvent',
        'penyelenggaraEvent',
        'linkRegistrasi',
    ];

    /**
     * Mengubah tipe data kolom secara otomatis.
     */
    protected $casts = [
        'jadwalStartEvent' => 'datetime',
        'jadwalEndEvent' => 'datetime',
    ];

    /**
     * Relasi ke Organisasi (jika ada).
     */
    public function organization()
    {
        return $this->belongsTo(Organization::class, 'idOrganisasi', 'idOrganisasi');
    }
}
