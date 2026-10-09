<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $ticket_code
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $character_name
 * @property string $category
 * @property string|null $notes
 */
#[Fillable(['name', 'email', 'phone', 'character_name', 'category', 'notes'])]
class Registration extends Model
{
    /** @use HasFactory<\Database\Factories\RegistrationFactory> */
    use HasFactory;

    public const CATEGORIES = ['Solo', 'Duo', 'Grup'];

    public function getRouteKeyName(): string
    {
        return 'ticket_code';
    }

    protected static function booted(): void
    {
        static::creating(function (Registration $registration) {
            $registration->ticket_code ??= 'DUGONG-'.strtoupper(Str::random(6));
        });
    }
}
