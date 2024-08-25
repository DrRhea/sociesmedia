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
      Schema::create('materi', function (Blueprint $table) {
          $table->id();
          $table->enum('kelas', ['VII', 'VIII', 'IX']);
          $table->string('title', 255);
          $table->text('content');
          $table->boolean('is_active')->default(true);
          $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
          $table->timestamps();
      });

      Schema::table('materi', function (Blueprint $table) {
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
        Schema::dropIfExists('materis');
    }
};
