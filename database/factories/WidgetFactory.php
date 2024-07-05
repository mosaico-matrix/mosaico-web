<?php

namespace Database\Factories;

use App\Models\Widget;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Widget>
 */
class WidgetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'tagline' => $this->faker->sentence,
            'description' => file_get_contents(resource_path('examples/widgets/description.md')),
        ];
    }
}
