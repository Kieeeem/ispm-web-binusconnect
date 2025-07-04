<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('replyforum', function (Blueprint $table) {
            $table->char('idReplyForum', 10)->primary();

            $table->char('idForum', 10);
            $table->char('idUser', 10)->nullable();

            $table->string('isiReplyForum', 100);
            $table->binary('fotoReplyForum')->nullable();
            $table->date('tanggalReplyForum');
            $table->time('waktuReplyForum');

            $table->timestamps();

            // Foreign Keys
            $table->foreign('idForum')->references('idForum')->on('forum')->onDelete('cascade');
            $table->foreign('idUser')->references('idUser')->on('user')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('replyforum');
    }
};
