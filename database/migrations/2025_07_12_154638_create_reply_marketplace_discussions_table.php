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
        Schema::create('ReplyMarketplaceDiscussion', function (Blueprint $table) {
            $table->string('idReplyDiscussion', 10)->primary();

            // Foreign Key ke tabel MarketplaceDiscussion
            $table->string('idDiscussion', 10);
            $table->foreign('idDiscussion')->references('idDiscussion')->on('MarketplaceDiscussion')->onDelete('cascade');

            // Foreign Key ke tabel User (bisa null sesuai ERD)
            $table->string('idUser', 10)->nullable();
            $table->foreign('idUser')->references('idUser')->on('User')->onDelete('cascade');

            // Foreign Key ke tabel Organisasi (bisa null)
            $table->string('idOrganisasi', 10)->nullable();

            // Mengasumsikan 'isiReplyDiscussion' adalah nama kolom untuk teks balasan
            $table->text('isiReplyDiscussion');
            $table->binary('fotoReplyDiscussion')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ReplyMarketplaceDiscussion');
    }
};