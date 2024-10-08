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
      Schema::create('contacts', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('subject', 255);
          $table->text('message');
          $table->unsignedBigInteger('user_id')
            ->nullable();
          $table->string('email', 255);
          $table->string('name', 255);
          $table->timestamps();

          $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('set null');
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
