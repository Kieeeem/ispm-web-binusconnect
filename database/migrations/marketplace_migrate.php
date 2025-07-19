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
        Schema::create('marketplace', function(Blueprint $table){
            $table->char('idMarketplace', 10);
            $table->char('idOrganisasi', 10); 
            $table->char('idUser', 10); 
            $table->string('judulMarketplace', 50);
            $table->string('deskripsiMarketplace', 1000); 
            $table->string('lokasiMarketplace', 50); 
            $table->date('jadwalStartMarketplace'); 
            $table->date('jadwalEndMarketplace'); 
            $table->binary('fotoMarketplace')->nullable(); 
            $table->string('statusMarketplace', 20); 
    
            
            $table->foreign('idOrganisasi')->references('idOrganisasi')->on('organisasi')->onDelete('cascade');
            $table->foreign('idUser')->references('idUser')->on('users')->onDelete('cascade');
            
            $table->primary('idMarketplace'); 
            $table->timestamps(); 
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
