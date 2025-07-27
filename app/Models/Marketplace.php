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

    protected $fillable = [
        'idMarketplace', 'idUser', 'idOrganisasi', 'judulMarketplace',
        'deskripsiMarketplace', 'lokasiMarketplace', 'jadwalStartMarketplace',
        'jadwalEndMarketplace', 'fotoMarketplace', 'statusMarketplace',
    ];

    protected $casts = [
        'jadwalStartMarketplace' => 'datetime',
        'jadwalEndMarketplace' => 'datetime',
    ];

    public function getRouteKeyName()
    {
        return 'idMarketplace';
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    public function discussions()
    {
        return $this->hasMany(MarketplaceDiscussion::class, 'idMarketplace', 'idMarketplace');
    }
}
