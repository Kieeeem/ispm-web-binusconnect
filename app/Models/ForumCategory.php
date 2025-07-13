<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumCategory extends Model
{
    use HasFactory;

    /**
     * Beritahu Laravel nama tabel yang benar.
     */
    protected $table = 'ForumCategory';

    /**
     * Tentukan primary key yang benar (d kecil).
     */
    protected $primaryKey = 'idFormCategory';

    /**
     * Beritahu Laravel bahwa primary key bukan auto-increment.
     */
    public $incrementing = false;

    /**
     * Tentukan tipe data dari primary key jika bukan integer.
     */
    protected $keyType = 'string';

    /**
     * Kolom yang boleh diisi secara massal (d kecil).
     */
    protected $fillable = [
        'idFormCategory',
        'forumCategory',
    ];

    /**
     * Definisikan relasi: satu kategori bisa memiliki banyak forum.
     */
    public function forums()
    {
        // Sesuaikan foreign key dengan primary key (d kecil).
        return $this->hasMany(Forum::class, 'idFormCategory', 'idFormCategory');
    }
}
