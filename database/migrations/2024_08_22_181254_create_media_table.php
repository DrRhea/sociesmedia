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
      Schema::create('media', function (Blueprint $table) {
        $table->id();
        $table->enum('type', ['video', 'podcast', 'poster', 'cerita']);
        $table->string('title', 255);
        $table->string('url', 255);
        $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
