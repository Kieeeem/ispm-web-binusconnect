<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marketplace extends Model
{
    use HasFactory;

    protected $table = 'Marketplace';
    protected $primaryKey = 'idMarketplace';
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'idMarketplace',
        'idUser',
        'idOrganisasi',
        'judulMarketplace',
        'deskripsiMarketplace',
        'lokasiMarketplace',
        'jadwalStartMarketplace',
        'jadwalEndMarketplace',
        'fotoMarketplace',
        'statusMarketplace',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'jadwalStartMarketplace' => 'date', // Ganti dengan nama kolom yang baru
    ];

    /**
     * Relasi ke User: Satu item Marketplace dimiliki oleh satu User.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    public function discussions()
{
    return $this->hasMany(MarketplaceDiscussion::class, 'idMarketplace', 'idMarketplace');
}
}
