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
      Schema::create('blogs', function (Blueprint $table) {
        $table->id();
        $table->string('title', 255);
        $table->text('content');
        $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
        $table->timestamps();
      });

      Schema::table('blogs', function (Blueprint $table) {
        $table->foreign('created_by')->references('id')->on('users')
          ->onDelete('cascade')
          ->onUpdate('cascade')
          ->where(function ($query) {
            $query->where('role', 'guru')
              ->orWhere('role', 'admin');
          });
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
