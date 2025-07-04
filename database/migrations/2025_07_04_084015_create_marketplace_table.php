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
        Schema::create('marketplace', function (Blueprint $table) {
            $table->char('idMarketplace', 10)->primary();

            $table->char('idUser', 10)->nullable();
            $table->char('idOrganisasi', 10)->nullable();

            $table->string('judulMarketplace', 50);
            $table->string('deskripsiMarketplace', 100);
            $table->binary('fotoMarketplace')->nullable();
            $table->date('tanggalMarketplace');
            $table->time('waktuMarketplace');
            $table->string('statusMarketplace', 20);

            $table->timestamps();

            // Foreign Keys
            $table->foreign('idUser')->references('idUser')->on('user')->onDelete('set null');
            $table->foreign('idOrganisasi')->references('idOrganisasi')->on('organisasi')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marketplace');
    }
};
