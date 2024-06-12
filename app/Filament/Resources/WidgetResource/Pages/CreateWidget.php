<?php

namespace App\Filament\Resources\WidgetResource\Pages;

use App\Filament\Resources\WidgetResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateWidget extends CreateRecord
{
    protected static string $resource = WidgetResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();
        return parent::mutateFormDataBeforeCreate($data); // TODO: Change the autogenerated stub
    }
}
