<?php

namespace App\Http\Requests;

use App\Models\Registration;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRegistrationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255', 'unique:registrations,email'],
            'phone' => ['required', 'string', 'regex:/^(\+62|62|0)8[0-9]{7,12}$/'],
            'character_name' => ['required', 'string', 'max:100'],
            'category' => ['required', Rule::in(Registration::CATEGORIES)],
            'notes' => ['nullable', 'string', 'max:500'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.unique' => 'Email ini sudah terdaftar.',
            'phone.regex' => 'Nomor HP tidak valid (contoh: 081234567890).',
        ];
    }
}
