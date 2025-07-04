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
        Schema::create('eventopportunity', function (Blueprint $table) {
            $table->char('idEventOpportunity', 10)->primary();

            $table->char('idOrganisasi', 10)->nullable();
            $table->char('idEventOpportunityCategory', 10);

            $table->string('judulEvent', 50);
            $table->string('deskripsiEvent', 1000);
            $table->binary('fotoEvent')->nullable();
            $table->date('jadwalStartEvent');
            $table->date('jadwalEndEvent');
            $table->string('statusEvent', 20);
            $table->string('penyelenggaraEvent', 20);
            $table->string('linkRegistrasi', 100);

            $table->timestamps();

            // Foreign Keys
            $table->foreign('idOrganisasi')->references('idOrganisasi')->on('organisasi')->onDelete('set null');
            $table->foreign('idEventOpportunityCategory')->references('idEventOpportunityCategory')->on('eventopportunitycategory')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eventopportunity');
    }
};
