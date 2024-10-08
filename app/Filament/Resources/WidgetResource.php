<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WidgetResource\Pages;
use App\Filament\Resources\WidgetResource\RelationManagers;
use App\Models\User;
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
                    ->hint('Small icon, pixel art is recommended')
                    ->label(__('mosaico.icon'))
                    ->collection('icon')
                    ->image()
                    ->avatar()
                    ->required(),
                Forms\Components\TextInput::make('tagline')
                    ->hint('This will be displayed under the widget name')
                    ->placeholder('Short description')
                    ->label(__('mosaico.tagline'))
                    ->columnSpanFull()
                    ->maxLength(50)
                    ->required(),
                Forms\Components\MarkdownEditor::make('description')
                    ->required()
                    ->placeholder("Enter markdown here")
                    ->hint('This will be displayed in the widget details page')
                    ->label(__('mosaico.description'))
                    ->disableToolbarButtons([
                        'attachFiles'
                    ])
                    ->columnSpanFull()
                    ->label('Description'),
                Forms\Components\SpatieMediaLibraryFileUpload::make('images')
                    ->label('Images')
                    ->hint('Help the users know what your widget looks like')
                    ->collection('images')
                    ->maxFiles(5)
                    ->columnSpanFull()
                    ->multiple()
                    ->image(),
                Forms\Components\TextInput::make('repository_url')
                    ->columnSpanFull()
                    ->label(__('mosaico.repository_url'))
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->description(function () {
                return auth()->user()->canUploadInfiniteWidgets() ? '' :
                    'You can only upload up to ' . User::$MaxWidgetsPerUnverifiedUser . ' widgets' .
                    ' contact an administator if you want to upload more';
            })
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
