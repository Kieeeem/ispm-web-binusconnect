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
        Schema::create('marketplacediscussion', function (Blueprint $table) {
            $table->char('idMarketplaceDiscussion', 10)->primary();

            $table->char('idUser', 10)->nullable();
            $table->char('idOrganisasi', 10)->nullable();

            $table->string('judulMarketplaceDiscussion', 50);
            $table->string('isiMarketplaceDiscussion', 100);
            $table->binary('fotoMarketplaceDiscussion')->nullable();
            $table->integer('likeMarketplaceDiscussion')->default(0);
            $table->date('tanggalMarketplaceDiscussion');
            $table->time('waktuMarketplaceDiscussion');
            $table->string('statusMarketplaceDiscussion', 20);

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
        Schema::dropIfExists('marketplacediscussion');
    }
};
