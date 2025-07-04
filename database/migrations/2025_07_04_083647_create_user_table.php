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
        Schema::create('user', function (Blueprint $table) {
            $table->char('idUser', 10)->primary();
            $table->integer('idUserType');
            $table->string('namaUser', 100);
            $table->string('emailUser', 100)->unique();
            $table->string('nim', 20)->unique();
            $table->string('passwordUser', 50);
            $table->string('fotoUser', 255)->nullable();
            $table->timestamps();

            // Foreign key
            $table->foreign('idUserType')->references('idUserType')->on('usertype')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
