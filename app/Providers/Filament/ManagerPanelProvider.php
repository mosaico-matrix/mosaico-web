<?php

namespace App\Providers\Filament;

use DutchCodingCompany\FilamentSocialite\FilamentSocialitePlugin;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\AuthenticateSession;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use DutchCodingCompany\FilamentSocialite\Provider;

class ManagerPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('manager')
            ->path('manager')
            ->login()
            ->registration(Pages\Auth\Register::class)
            ->colors([
                'primary' => Color::hex('#000000'),
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                Widgets\AccountWidget::class,
                Widgets\FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->plugins([
                FilamentSocialitePlugin::make()
                    // (required) Add providers corresponding with providers in `config/services.php`.
                    ->providers([
                        Provider::make('github')
                            ->label('Github')
                            ->icon('fab-github')
                            ->scopes([
                                // Add scopes here.
                                'read:user',
                                'public_repo',
                            ]),
                    ])
                    // (optional) Enable/disable registration of new (socialite-) users.
                    ->registration(true)
                    // (optional) Enable/disable registration of new (socialite-) users using a callback.
                    // In this example, a login flow can only continue if there exists a user (Authenticatable) already.
//                    ->registration(fn (string $provider, SocialiteUserContract $oauthUser, ?Authenticatable $user) => (bool) $user)
//                    // (optional) Change the associated model class.
//                    ->userModelClass(\App\Models\User::class)
//                    // (optional) Change the associated socialite class (see below).
//                    ->socialiteUserModelClass(\App\Models\SocialiteUser::class)
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
