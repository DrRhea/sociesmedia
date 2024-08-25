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
      Schema::create('forum_threads', function (Blueprint $table) {
          $table->id();
          $table->string('title', 255);
          $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
          $table->timestamps();
      });

      Schema::table('forum_threads', function (Blueprint $table) {
          $table->foreign('created_by')->references('id')->on('users')
            ->onDelete('cascade')
            ->onUpdate('cascade')
            ->where(function ($query) {
              $query->where('role', 'murid')
                ->orWhere('role', 'guru');
            });
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forum_threads');
    }
};
