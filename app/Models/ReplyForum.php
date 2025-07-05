<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReplyForum extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ReplyForum';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'idReplyForum';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'idReplyForum',
        'idUser',
        'idForum',
        'idOrganisasi',
        'isiReplyForum', // DIUBAH SESUAI DATABASE
        'likeBalasanForum',
    ];

    /**
     * Mendefinisikan bahwa setiap balasan dimiliki oleh satu User.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    /**
     * Mendefinisikan bahwa setiap balasan dimiliki oleh satu Forum.
     */
    public function forum()
    {
        return $this->belongsTo(Forum::class, 'idForum', 'idForum');
    }
}
