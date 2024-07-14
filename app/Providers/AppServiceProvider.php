<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Carbon;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(UrlGenerator $url): void
    {
        //Force use https in staging, production
        if (!app()->isLocal())
            $url->forceScheme('https');


        // This is dangerous but is needed to upload files, if someone can find a better way to do this, please do it
        Request::macro('hasValidSignature', function ($absolute = true) {
            return true;
        });

//        Request::macro('hasValidRelativeSignature', function () {
//            if (config('app.env') === 'local') return true;
//            return URL::hasValidSignature($this, $absolute = false);
//        });
//
//        Request::macro('hasValidSignatureWhileIgnoring', function ($ignoreQuery = [], $absolute = true) {
//            if (config('app.env') === 'local') return true;
//            return URL::hasValidSignature($this, $absolute, $ignoreQuery);
//        });

    }
}
