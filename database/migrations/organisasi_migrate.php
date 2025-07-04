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
        Schema::create('organisasi', function(Blueprint $table){
            $table->id();
            $table->string('namaOrganisasi'); 
            $table->string('emailOrganisasi'); 
            $table->string('passwordOrganisasi'); 
            $table->text('bioOrganisasi')->nullable(); 
            $table->binary('fotoOrganisasi')->nullable(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
