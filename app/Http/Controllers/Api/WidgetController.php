<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use Illuminate\Http\Request;

class WidgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return
            $this->okResponse(
                Widget::filter()
                    ->sort()
                    ->get()
                    ->map(function ($widget) {
                        return [
                            'id' => $widget->id,
                            'name' => $widget->name,
                            'tagline' => $widget->tagline,
                            'user' => $widget->user,
                        ];
                    })
            );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Widget $widget)
    {
        return
            $this->okResponse([
                'id' => $widget->id,
                'name' => $widget->name,
                'tagline' => $widget->tagline,
                'description' => $widget->description,
                'user' => $widget->user,
                'images' => $widget->getMedia('images')->map(function ($image) {
                    return $image->getUrl();
                }),
                'repository_url' => $widget->repository_url,
            ]);
    }

    /**
     * Display the widget icon as file
     */
    public function showIcon(Widget $widget)
    {
        return response()->file($widget->getFirstMediaPath('icon'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Widget $widget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Widget $widget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Widget $widget)
    {
        //
    }
}
