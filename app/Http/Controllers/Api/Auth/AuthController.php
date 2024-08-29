<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\Auth\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Logins The User and returns the token
     */
    public function loginUser(LoginRequest $request): JsonResponse
    {
        if (! Auth::attempt($request->only(['email', 'password']))) {
            return response()->json([
                'message' => 'Email & Password does not match with our record.',
            ], 401);
        }

        $user = User::where('email', $request->email)->first();

        return $this->createAccessToken($user);
    }



    /**
     * Creates and returns access token for user
     */
    private function createAccessToken($user): JsonResponse
    {
        return response()->json([
            'token' => $user->createToken('API TOKEN')->plainTextToken,
        ], 200);
    }
}
