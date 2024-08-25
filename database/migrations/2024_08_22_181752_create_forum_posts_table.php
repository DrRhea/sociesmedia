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
      Schema::create('forum_posts', function (Blueprint $table) {
          $table->id();
          $table->foreignId('thread_id')->constrained('forum_threads')->onDelete('cascade');
          $table->text('content');
          $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
          $table->timestamps();
      });

      Schema::table('forum_posts', function (Blueprint $table) {
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
        Schema::dropIfExists('forum_posts');
    }
};
