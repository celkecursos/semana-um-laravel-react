<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'cesar@celke.com.br'],
            ['name' => 'Cesar', 'email' => 'cesar@celke.com.br', 'password' => '123456A#']
        );

        User::firstOrCreate(
            ['email' => 'kelly@celke.com.br'],
            ['name' => 'Kelly', 'email' => 'kelly@celke.com.br', 'password' => '123456A#']
        );

        User::firstOrCreate(
            ['email' => 'jessica@celke.com.br'],
            ['name' => 'Jessica', 'email' => 'jessica@celke.com.br', 'password' => '123456A#']
        );
        User::firstOrCreate(
            ['email' => 'gabrielly@celke.com.br'],
            ['name' => 'Gabrielly', 'email' => 'gabrielly@celke.com.br', 'password' => '123456A#']
        );
    }
}
