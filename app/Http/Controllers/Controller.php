<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

abstract class Controller
{
    /**
     * Create a JSON response.
     *
     * @param int $status
     * @param string $message
     * @param mixed|null $data
     * @return JsonResponse
     */
    protected function jsonResponse(int $status, string $message, mixed $data = null): JsonResponse
    {
        $response = [
            'message' => $message,
            'status' => $status
        ];

        if (!is_null($data)) {
            $response['data'] = $data;
        }

        return response()->json($response, $status);
    }

    /**
     * Create a successful response.
     *
     * @param mixed|null $data
     * @param string $message
     * @return JsonResponse
     */
    protected function okResponse(mixed $data = null, string $message = "Success"): JsonResponse
    {
        return $this->jsonResponse(200, $message, $data);
    }

    /**
     * Create a bad request response.
     *
     * @param string $message
     * @return JsonResponse
     */
    protected function badRequestResponse(string $message = 'Bad Request'): JsonResponse
    {
        return $this->jsonResponse(400, $message);
    }

    /**
     * Create a not found response.
     *
     * @param string $message
     * @return JsonResponse
     */
    protected function notFoundResponse(string $message = 'Not Found'): JsonResponse
    {
        return $this->jsonResponse(404, $message);
    }

    /**
     * Create a forbidden response.
     *
     * @param string $message
     * @return JsonResponse
     */
    protected function forbiddenResponse(string $message = 'Forbidden'): JsonResponse
    {
        return $this->jsonResponse(403, $message);
    }

    /**
     * Create an unauthorized response.
     *
     * @param string $message
     * @return JsonResponse
     */
    protected function unauthorizedResponse(string $message = 'Unauthorized'): JsonResponse
    {
        return $this->jsonResponse(401, $message);
    }
}
