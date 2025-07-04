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
        Schema::create('organisasi', function (Blueprint $table) {
            $table->char('idOrganisasi', 10)->primary();
            $table->string('namaOrganisasi', 50);
            $table->string('emailOrganisasi', 100);
            $table->string('passwordOrganisasi', 50);
            $table->binary('fotoOrganisasi')->nullable();
            $table->string('bioOrganisasi', 1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organisasi');
    }
};
