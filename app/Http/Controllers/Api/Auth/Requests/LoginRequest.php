<?php

namespace App\Http\Controllers\Api\Auth\Requests;

use App\Http\Controllers\BaseRequest;

/**
 * @property string $email
 * @property string $password
 */
class LoginRequest extends BaseRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required',
        ];
    }
}
