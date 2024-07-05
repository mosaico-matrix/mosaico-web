<?php

namespace Database\Seeders;

use App\Models\Widget;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WidgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Widget::factory()->count(10)->create([
            'user_id' => 1,
            'repository_url' => 'https://github.com/mosaico-matrix/mosaico-widget-template',
        ]);

        // Add icon and images
        foreach (Widget::all() as $widget) {

            // Icon
            $widget
                ->addMediaFromUrl('https://picsum.photos/200/200')
                ->toMediaCollection('icon');

            // Images
            for ($i = 0; $i < 3; $i++) {
                $widget
                    ->addMediaFromUrl('https://picsum.photos/500/300')
                    ->toMediaCollection('images');
            }
        }
    }
}
