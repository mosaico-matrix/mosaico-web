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
        $testUser = User::factory()->create([
            'email' => 'a@a.it',
            'username' => 'murkrow',
            'password' => bcrypt('password'),
        ]);

        $testUser->assignRole(User::$SUPER_ADMIN_ROLE);

    }
}
