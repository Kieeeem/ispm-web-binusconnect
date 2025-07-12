<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketplaceReply extends Model
{
    use HasFactory;

    protected $table = 'ReplyMarketplaceDiscussion';
    protected $primaryKey = 'idReplyDiscussion';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'idReplyDiscussion',
        'idDiscussion',
        'idUser',
        'idOrganisasi',
        'isiReplyDiscussion',
        'fotoReplyDiscussion',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    public function discussion()
    {
        return $this->belongsTo(MarketplaceDiscussion::class, 'idDiscussion', 'idDiscussion');
    }
}
