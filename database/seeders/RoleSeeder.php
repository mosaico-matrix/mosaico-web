<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => User::$SUPER_ADMIN_ROLE],
            ['name' => User::$ADMIN_ROLE],
            ['name' => User::$VERIFIED_DEVELOPER_ROLE],
            ['name' => User::$DISABLED_ROLE],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
