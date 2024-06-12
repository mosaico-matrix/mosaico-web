<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WidgetResource\Pages;
use App\Filament\Resources\WidgetResource\RelationManagers;
use App\Models\Widget;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class WidgetResource extends Resource
{
    protected static ?string $model = Widget::class;

    protected static ?string $navigationIcon = 'heroicon-o-squares-2x2';

    public static function form(Form $form): Form
    {
        return $form
            ->columns(3)
            ->schema([
                Forms\Components\TextInput::make('name')
                    //->columnSpanFull()
                    ->label(__('mosaico.name'))
                    ->columnSpan(2)
                    ->required(),
                Forms\Components\SpatieMediaLibraryFileUpload::make('icon')
                    ->label(__('mosaico.icon'))
                    ->collection('icon')
                    ->image()
                    ->avatar()
                    ->required(),
                Forms\Components\RichEditor::make('description')
                    ->label(__('mosaico.description'))
                    ->disableToolbarButtons([
                        'attachFiles'
                    ])
                    ->columnSpanFull()
                    ->label('Description'),
                Forms\Components\TextInput::make('repository_url')
                    ->columnSpanFull()
                    ->label(__('mosaico.repository_url'))
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->modifyQueryUsing(function (Builder $query) {
                $query->where('user_id', auth()->id());
            })
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('downloads'),
                Tables\Columns\SpatieMediaLibraryImageColumn::make('icon')
                ->collection('icon')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWidgets::route('/'),
            'create' => Pages\CreateWidget::route('/create'),
            'edit' => Pages\EditWidget::route('/{record}/edit'),
        ];
    }
}
