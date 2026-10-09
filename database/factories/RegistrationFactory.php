<?php

namespace Database\Factories;

use App\Models\Registration;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Registration>
 */
class RegistrationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => '08'.fake()->numerify('##########'),
            'character_name' => fake()->randomElement(['Dugong Samudra', 'Putri Duyung', 'Kapten Lamun']),
            'category' => fake()->randomElement(Registration::CATEGORIES),
            'notes' => null,
        ];
    }
}
