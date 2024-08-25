<?php

  namespace Database\Seeders;

  use Illuminate\Database\Seeder;
  use Illuminate\Support\Facades\Hash;
  use Illuminate\Support\Facades\DB;
  use Illuminate\Support\Str;

  class OwnerSeeder extends Seeder
  {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
        'username' => 'owner123',
        'name' => 'Owner',
        'email' => 'owner@example.com',
        'password' => Hash::make('password123'), // Ingat, ini harus dienkripsi
        'role' => 'owner',
        'phone' => '081234567890',
        'profile_picture' => null,
        'google_id' => null,
        'google_token' => null,
        'created_at' => now(),
        'updated_at' => now(),
      ]);
    }
  }
