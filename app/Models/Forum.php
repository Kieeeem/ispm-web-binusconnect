<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// TAMBAHKAN BARIS INI UNTUK "MENGENALKAN" MODEL REPLYFORUM
use App\Models\ReplyForum;

class Forum extends Model
{
    use HasFactory;

    protected $table = 'Forum';
    protected $primaryKey = 'idForum';
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * Kolom-kolom yang boleh diisi.
     * Pastikan semua nama kolom di sini sesuai dengan tabel Forum-mu.
     */
    protected $fillable = [
        'idForum',
        'idUser',
        'idOrganisasi',
        'idFormCategory', // Sesuai dengan typo yang kita temukan
        'judulForum',
        'isiForum',
        'likeForum',
        'statusForum',
    ];

    /**
     * Relasi ke User: Satu Forum dimiliki oleh satu User.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'idUser', 'idUser');
    }

    /**
     * Relasi ke Kategori: Satu Forum dimiliki oleh satu Kategori.
     */
    public function category()
    {
        // Foreign key di tabel ini adalah 'idFormCategory'
        // Primary key di tabel tujuan adalah 'IdFormCategory'
        return $this->belongsTo(ForumCategory::class, 'idFormCategory', 'IdFormCategory');
    }

    /**
     * Relasi ke Balasan: Satu Forum bisa memiliki BANYAK Balasan.
     */
    public function replies()
    {
        // Foreign key di tabel ReplyForum adalah 'idForum'
        // Primary key di tabel ini (Forum) adalah 'idForum'
        return $this->hasMany(ReplyForum::class, 'idForum', 'idForum');
    }
}
