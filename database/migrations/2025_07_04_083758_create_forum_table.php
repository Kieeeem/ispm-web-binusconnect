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
        Schema::create('forum', function (Blueprint $table) {
             $table->char('idForum', 10)->primary();

            $table->char('idUser', 10)->nullable();
            $table->char('idOrganisasi', 10)->nullable();
            $table->char('idFormCategory', 10);

            $table->string('judulForum', 50);
            $table->string('isiForum', 100);
            $table->binary('fotoForum')->nullable();
            $table->integer('likeForum')->default(0);
            $table->date('tanggalForum');
            $table->time('waktuForum');
            $table->string('statusForum', 20);
            $table->timestamps();

            // Foreign Keys
            $table->foreign('idUser')->references('idUser')->on('user')->onDelete('set null');
            $table->foreign('idOrganisasi')->references('idOrganisasi')->on('organisasi')->onDelete('set null');
            $table->foreign('idFormCategory')->references('idFormCategory')->on('forumcategory')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum');
    }
};
