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
        Schema::create('MarketplaceDiscussion', function (Blueprint $table) {
            $table->string('idDiscussion', 10)->primary();

            // Foreign Key ke tabel Marketplace
            $table->string('idMarketplace', 10);
            $table->foreign('idMarketplace')->references('idMarketplace')->on('Marketplace')->onDelete('cascade');

            // Foreign Key ke tabel User (mengasumsikan 'dUser' di ERD adalah 'idUser')
            $table->string('idUser', 10);
            $table->foreign('idUser')->references('idUser')->on('User')->onDelete('cascade');

            // Sesuai ERD (mengasumsikan 'isDiscussion' adalah 'isiDiscussion')
            $table->string('isiDiscussion', 255);
            $table->binary('fotoDiscussion')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('MarketplaceDiscussion');
    }
};
