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
        Schema::create('replymarketplacediscussion', function (Blueprint $table) {
             $table->char('idReplyMarketplaceDiscussion', 10)->primary();

            $table->char('idMarketplaceDiscussion', 10);
            $table->char('idUser', 10)->nullable();

            $table->string('isiReplyMarketplaceDiscussion', 100);
            $table->binary('fotoReplyMarketplaceDiscussion')->nullable();
            $table->date('tanggalReplyMarketplaceDiscussion');
            $table->time('waktuReplyMarketplaceDiscussion');

            $table->timestamps();

            // Foreign Keys
            $table->foreign('idMarketplaceDiscussion')->references('idMarketplaceDiscussion')->on('marketplacediscussion')->onDelete('cascade');
            $table->foreign('idUser')->references('idUser')->on('user')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('replymarketplacediscussion');
    }
};
