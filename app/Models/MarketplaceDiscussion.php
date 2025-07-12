<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketplaceDiscussion extends Model
{
    use HasFactory;

    protected $table = 'MarketplaceDiscussion';
    protected $primaryKey = 'idDiscussion';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'idDiscussion',
        'idMarketplace',
        'idUser',
        'isiDiscussion',
        'fotoDiscussion',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    public function marketplace()
    {
        return $this->belongsTo(Marketplace::class, 'idMarketplace', 'idMarketplace');
    }

    public function replies()
{
    return $this->hasMany(MarketplaceReply::class, 'idDiscussion', 'idDiscussion');
}
}